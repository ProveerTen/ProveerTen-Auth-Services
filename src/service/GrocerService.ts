import connection from '../config/configdb';
import { Response } from 'express';
import generateToken from '../helpers/generator-tokens';
import Grocer from '../models/grocer.model';

function GrocerSave(GrocerData: Grocer, res: Response) {
    connection.query("insert into Grocer (email_grocer, name_grocer, last_name_grocer, name_store, city_grocer, password_grocer) VALUES (?,?,?,?,?,?)",
        [GrocerData.email_grocer, GrocerData.name_grocer, GrocerData.last_name_grocer, GrocerData.name_store, GrocerData.city_grocer, GrocerData.password_grocer], (error) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
            }
            connection.query("insert into GrocerAddress (neighborhood, street, number_street, fk_address_email_grocer) VALUES (?,?,?,?)",
                [GrocerData.neighborhood, GrocerData.street, GrocerData.number_street, GrocerData.email_grocer], (error) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
                    }
                    connection.query("insert into GrocerPhone (number_grocer, fk_phone_email_grocer) values (?,?)",
                        [GrocerData.number_grocer, GrocerData.email_grocer], (error) => {
                            if (error) {
                                console.error(error);
                                return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
                            }
                        })
                })
            let secret_key: any = process.env.SIGNING_KEY_TOKEN;
            let token: any = generateToken(
                { role: "tendero", email: GrocerData.email_grocer },
                secret_key, new Date().getTime() + (2 * 60 * 1000)
            )
            return res.status(200).json({ "Status": "Registrado con éxito", "token": token });
        });
}

export default GrocerSave;
