"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configdb_1 = __importDefault(require("../config/configdb"));
const generator_tokens_1 = __importDefault(require("../helpers/generator-tokens"));
function GrocerSave(GrocerData, res) {
    configdb_1.default.query("insert into Grocer (email_grocer, name_grocer, last_name_grocer, name_store, city_grocer, password_grocer) VALUES (?,?,?,?,?,?)", [GrocerData.email_grocer, GrocerData.name_grocer, GrocerData.last_name_grocer, GrocerData.name_store, GrocerData.city_grocer, GrocerData.password_grocer], (error) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
        }
        configdb_1.default.query("insert into GrocerAddress (neighborhood, street, number_street, fk_address_email_grocer) VALUES (?,?,?,?)", [GrocerData.neighborhood, GrocerData.street, GrocerData.number_street, GrocerData.email_grocer], (error) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
            }
            configdb_1.default.query("insert into GrocerPhone (number_grocer, fk_phone_email_grocer) values (?,?)", [GrocerData.number_grocer, GrocerData.email_grocer], (error) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ "Status": "Error al registrar", "Error": error.message });
                }
            });
        });
        let secret_key = process.env.SIGNING_KEY_TOKEN;
        let token = (0, generator_tokens_1.default)({ role: "tendero", email: GrocerData.email_grocer }, secret_key, new Date().getTime() + (2 * 60 * 1000));
        return res.status(200).json({ "Status": "Registrado con éxito", "token": token });
    });
}
exports.default = GrocerSave;
