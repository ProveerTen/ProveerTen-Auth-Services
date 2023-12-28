import { Request, Response } from "express";
import { verifyGrocer } from "../services/reset-password-service";
import generateToken from "../helpers/generate-token";
import { generateEmail } from "../helpers/generate-email";
import 'dotenv/config';

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const email = req.body.email_grocer;

    verifyGrocer(email, (error: any, result: any) => {
      if (error) {
        res.status(500).json({ error: error.message });
      }

      if (result) {
        let secret_key: any = process.env.SECRET_KEY
        let token: any = generateToken(
          { email: email },
          secret_key,
          new Date().getTime() + 2 * 60 * 1000
        );

        generateEmail(token, email, req, res);
      }
    });
  } catch (error) {
    console.error(error);
        res.status(500).json({
            error: error,
            message: `error controlador`
        });
  }
};
