import { Request, Response } from 'express';
import generateToken from '../helpers/generate-token';
import login from '../services/login';
import { validateTokenGoogle } from '../helpers/validate-token-google';
import { log } from 'console';



export const googleCompany = async (req: Request, res: Response) => {
    try {
        let token:any = await validateTokenGoogle(req.body.token)
        if (token !== null) {
            let data: any = {
                email_company: token.email
            }
            login.loginGoogleCompany(data, (error: any, id_company: string, _role: string) => {
                if (error) {
                    if (error.sqlState === '45000') {
                        res.status(409).json({ "error": error.message });
                    } else {
                        res.status(500).json({ "error": error.message });
                    }
                } else {
                    let secretKey: any = process.env.SECRET_KEY;
                    let token: any = generateToken(
                        { role: _role, email: data.email_company, id: id_company },
                        secretKey, '30d'
                    )
                    return res.status(200).json({ status: 'Successful authentication', token: token });
                }
            });
        } else {
            res.status(401).json({ response: "error authentication with google" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: `failed to login`
        });
    }
};


export const googleGrocer = async (req: Request, res: Response) => {
    console.log(req.body);
    
    try {
        let token: any = await validateTokenGoogle(req.body.token);
        console.log(token);
        
        if (token !== null) {
            const data: any = {
                email_grocer: token.email,
            }
            console.log(data);
            
            login.loginGoogleGrocer(data, (error: any, id_grocer: string, _role: string) => {
                if (error) {
                    if (error.sqlState === '45000') {
                        res.status(409).json({ "error": error.message });
                    } else {
                        res.status(500).json({ "error": error.message });
                    }
                } else {
                    let secretKey: any = process.env.SECRET_KEY;
                    console.log(data.email_grocer, id_grocer, _role);
                    
                    let token: any = generateToken(
                        { role: _role, email: data.email_grocer, id: id_grocer },
                        secretKey, '30d'
                    )
                    return res.status(200).json({ status: 'Successful authentication', token: token });
                }
            });
        } else {
            res.status(401).json({ response: "error authentication with google" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: `failed to login`
        });
    }
};