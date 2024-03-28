import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Provider from '../models/Provider';
import Grocer from '../models/Grocer';
import Company from '../models/Company';
import register, { get_name_company } from '../services/register';
import { generateWelcomeEmail } from '../helpers/generate-email';
import { v4 as uuidv4 } from 'uuid';

export const company = async (req: Request, res: Response) => {

    try {
        const {
            nit_company,
            name_company,
            email_company,
            password_company,
            national_line_company,
            profile_photo_company,
            cover_photo_company,
            foundation_company,
            description_company
        } = req.body;

        const password_hash = await bcrypt.hash(password_company, 10);

        const data: Company = {
            nit_company,
            name_company,
            email_company,
            password_company: password_hash,
            national_line_company,
            profile_photo_company,
            cover_photo_company,
            foundation_company,
            description_company
        };
        register.registerCompany(data, (error: any, result: any) => {
            if (error) {
                if (error.sqlState === '45000') {
                    res.status(409).json({ "error": error.message });
                } else {
                    res.status(500).json({ "error": error.message });
                }
            } else {
                generateWelcomeEmail(data.email_company, data.name_company);
                res.status(200).json({ "Status": result[0][0].message_text });
            }
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error,
            message: `error registering company`
        });
    }
}


export const provider = async (req: Request, res: Response) => {
    try {
        const {
            name_provider,
            last_name_provider,
            email_provider,
            password_provider,
            profile_photo_provider,
            nit_company,
            city_provider,
            neighborhood,
            street,
            number_street,
            department,
            number_provider
        } = req.body;

        const password_hash = await bcrypt.hash(password_provider, 10);
        let name_company = await get_name_company(nit_company);
        const document_provider = name_company.replace(/\s/g, '_') + '_' + uuidv4();

        const data: Provider = {
            document_provider,
            name_provider,
            last_name_provider,
            email_provider,
            password_provider: password_hash,
            profile_photo_provider,
            nit_company,
            city_provider,
            neighborhood,
            street,
            number_street,
            department,
            number_provider
        };

        register.registerProvider(data, (error: any, result: any) => {
            if (error) {
                if (error.sqlState === '45000') {
                    res.status(409).json({ "error": error.message });
                } else {
                    res.status(500).json({ "error": error.message });
                }
            } else {
                generateWelcomeEmail(data.email_provider, data.name_provider);
                res.status(200).json({ "Status": result[0][0].message_text });
            }
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error,
            message: `error registering provider`
        });
    }

};

export const grocer = async (req: Request, res: Response) => {
    try {
        const {
            document_grocer,
            name_grocer,
            last_name_grocer,
            email_grocer,
            name_store,
            profile_photo_grocer,
            cover_photo_grocer,
            city_grocer,
            password_grocer,
            neighborhood,
            street,
            number_street,
            department,
            number_grocer
        } = req.body;

        const password_hash = await bcrypt.hash(password_grocer, 10);

        const data: Grocer = {
            document_grocer,
            name_grocer,
            last_name_grocer,
            email_grocer,
            name_store,
            profile_photo_grocer,
            cover_photo_grocer,
            city_grocer,
            password_grocer: password_hash,
            neighborhood,
            street,
            number_street,
            department,
            number_grocer
        };

        register.registerGrocer(data, (error: any, result: any) => {
            if (error) {

                if (error.sqlState === '45000') {
                    res.status(409).json({ "error": error.message });
                } else {
                    res.status(500).json({ "error": error.message });
                }

            } else {
                generateWelcomeEmail(data.email_grocer, data.name_grocer);
                res.status(200).json({ "Status": result[0][0].message_text });
            }
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error,
            message: `error registering grocer`
        });
    }
}
