import bcrypt from 'bcrypt';
import { Request, Response } from 'express'
import ProviderSave from '../service/ProviderService';
import GrocerSave from '../service/GrocerService';
import Provider from '../models/provider.model';
import Grocer from '../models/grocer.model';


const registerProvider = async (req: Request, res: Response) => {
  try {
    let {
      nit_provider,
      email_provider,
      name_provider,
      last_name_provider,
      name_company,
      city_provider,
      password_provider,
      description_provider,
      neighborhood,
      street,
      number_street,
      number_provider
    } = req.body;

    password_provider = await bcrypt.hash(password_provider, 10);

    const ProviderData: Provider = {
      nit_provider,
      email_provider,
      name_provider,
      last_name_provider,
      name_company,
      city_provider,
      password_provider,
      description_provider,
      neighborhood,
      street,
      number_street,
      number_provider
    };

    ProviderSave(ProviderData, res);

  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }

}

const registerGrocer = async (req: Request, res: Response) => {
  try {
    let {
      email_grocer,
      name_grocer,
      last_name_grocer,
      name_store,
      city_grocer,
      password_grocer,
      neighborhood,
      street,
      number_street,
      number_grocer
  } = req.body;

  password_grocer = await bcrypt.hash(password_grocer, 10);

  const GrocerData: Grocer = {
    email_grocer,
    name_grocer,
    last_name_grocer,
    name_store,
    city_grocer,
    password_grocer,
    neighborhood,
    street,
    number_street,
    number_grocer
  };

  GrocerSave(GrocerData, res);

} catch (error) {
  console.error(error);
  res.status(500).send('Error en el servidor');
}

}

export default { registerProvider, registerGrocer };
