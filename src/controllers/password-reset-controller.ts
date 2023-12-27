import { Request, Response } from "express";
import { verifyGrocer } from "../services/reset-password-service";
import generateToken from "../helpers/generate-token";

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;

    verifyGrocer(email, (error: any, result: any) => {
      if (error) {
        res.status(500).json({ error: error.message });
      }

      if (result) {
        let secret_key: any = process.env.SIGNING_KEY_TOKEN;
        let token: any = generateToken(
          { email: email },
          secret_key,
          new Date().getTime() + 2 * 60 * 1000
        );
      }
    });
  } catch (error) {}
};
