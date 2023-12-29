import { Request, Response } from "express";
import {
  verifyCompany,
  verifyGrocer,
} from "../services/reset-password-service";
import generateToken from "../helpers/generate-token";
import { generateEmail } from "../helpers/generate-email";
import "dotenv/config";

export const resetPasswordGrocer = async (req: Request, res: Response) => {
  try {
    const emailGrocer = req.body.email_grocer;

    verifyGrocer(emailGrocer, (error: any, result: any) => {
      if (error) {
        res.status(500).json({ error: error.message });
      }

      if (result) {
        let secret_key: any = process.env.SECRET_KEY;
        let token: any = generateToken(
          { role: "grocer", email: emailGrocer },
          secret_key,
          new Date().getTime() + 2 * 60 * 1000
        );

        generateEmail(token, emailGrocer, req, res);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error,
      message: `error reset password`,
    });
  }
};

export const resetPasswordCompany = async (req: Request, res: Response) => {
  try {
    const emailCompany = req.body.email_company;

    verifyCompany(emailCompany, (error: any, result: any) => {
      if (error) {
        res.status(500).json({ error: error.message });
      }

      if (result) {
        let secret_key: any = process.env.SECRET_KEY;
        let token: any = generateToken(
          { role: "company", email: emailCompany },
          secret_key,
          new Date().getTime() + 2 * 60 * 1000
        );

        generateEmail(token, emailCompany, req, res);
      }
    });
  } catch (error) {}
};


export const updatePassword = async ()=>{

}