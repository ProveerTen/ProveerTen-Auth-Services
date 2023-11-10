import connection from '../config/configdb';
import { Response } from 'express';
import generateToken from '../helpers/generator-tokens';
import Provider from '../models/provider.model';


function ProviderSave(ProviderData: Provider, res: Response) {
    connection.query("insert into Provider (nit_provider,email_provider,name_provider,last_name_provider,name_company,city_provider, password_provider,description_provider) VALUES (?,?,?,?,?,?,?,?)",
        [ProviderData.nit_provider, ProviderData.email_provider, ProviderData.name_provider, ProviderData.last_name_provider, ProviderData.name_company, ProviderData.city_provider, ProviderData.password_provider, ProviderData.description_provider], (error) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
            }
            connection.query("insert into ProviderPhone (number_provider,fk_phone_email_provider) values (?,?)", [ProviderData.number_provider, ProviderData.email_provider], (error) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
                }
                connection.query("insert into ProviderAddress (neighborhood,street,number_street,fk_address_email_provider) values (?,?,?,?)",
                    [ProviderData.neighborhood, ProviderData.street, ProviderData.number_provider, ProviderData.email_provider], (error) => {
                        if (error) {
                            console.error(error);
                            return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
                        }
                    });
            });

            let secret_key: any = process.env.SIGNING_KEY_TOKEN
            let token: any = generateToken(
                { role: "proveedor", email: ProviderData.email_provider },
                secret_key, new Date().getTime() + (2 * 60 * 1000)
            )
            return res.status(200).json({ "Status": "Registrado con éxito", "token": token });
        });
}

export default ProviderSave;


