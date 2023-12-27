import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Provider from '../models/Provider';
import Grocer from '../models/Grocer';
import { registerGrocer } from '../services/grocer-service';
import { registerProvider } from '../services/provider-service';

export const provider = async (req: Request, res: Response) => {
    try {
        const {
            nit_provider,
            email_provider,
            name_provider,
            last_name_provider,
            name_company,
            city_provider,
            password_provider,
            description_provider,
            number_provider,
            neighborhood,
            street,
            number_street
        } = req.body;

        const password_hash = await bcrypt.hash(password_provider, 10);

        const data: Provider = {
            nit_provider,
            email_provider,
            name_provider,
            last_name_provider,
            name_company,
            city_provider,
            password_provider: password_hash,
            description_provider,
            number_provider,
            neighborhood,
            street,
            number_street
        };
            

        registerProvider(data, (error: any, result: any) => {
            if (error) {
                res.status(500).json({ "error": error.message });
            } else {
                res.status(200).json({ "Status": result[0][0].message_text});
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
            message: `error registering provider`
        });
    }
};

export const grocer = async (req: Request, res: Response) => {
    try {
        const {
            email_grocer,
            name_grocer,
            last_name_grocer,
            name_store,
            city_grocer,
            password_grocer,
            neighborhood,
            street,
            number_street,
            number_grocer,
            apartment
        } = req.body;

        const password_hash = await bcrypt.hash(password_grocer, 10);

        const data: Grocer = {
            email_grocer,
            name_grocer,
            last_name_grocer,
            name_store,
            city_grocer,
            password_grocer: password_hash,
            neighborhood,
            street,
            number_street,
            number_grocer,
            apartment
        };

        registerGrocer(data, (error: any, result: any) => {
            if (error) {
                res.status(500).json({ "error": error.message });
            } else {
                res.status(200).json({ "Status": result[0][0].message_text});
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
            message: `error registering grocer`
        });
    }
}