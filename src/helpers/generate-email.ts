import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const generateEmail = async (token: any, email: any, req: Request, res: Response) => {
    try {
        if (email) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.KEY_EMAIL
                }
            });
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Recuperación de contraseña',
                text: `http://${req.headers.host}/reset/reset-password/${token}`
            };

            transporter.sendMail(mailOptions, (error: any, info: any) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                    return res.status(500).json({ message: 'Error al enviar el correo' });
                } else {
                    console.log('Correo electrónico enviado:', info.response);
                    return res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export const emailConfirmation = async (email: any, req: Request, res: Response) => {
    try {
        if (email) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.KEY_EMAIL
                }
            });
            const mailOptions = {

                from: process.env.EMAIL,
                to: email,
                subject: 'Actualizacion de Contraseña',
                text: 'Exitoso Cambio De Contraseña'
            };

            transporter.sendMail(mailOptions, (error: any, info: any) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                    return res.status(500).json({ message: 'Error al enviar el correo' });
                } else {
                    console.log('Correo electrónico enviado:', info.response);
                    return res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export const generateWelcomeEmail = async (email: string, username: string, role: any) => {
    try {
        if (email) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.KEY_EMAIL
                }
            });
            let html;
            if (role === 'grocer') {
                html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a ProveerTen</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            /* Centrado */
        }

        .header {
            text-align: center;
            padding-bottom: 20px;
        }

        .header img {
            max-width: 100px;
            height: auto;
        }

        .content {
            padding: 20px;
        }

        .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
        }

        .footer a {
            color: #333;
            text-decoration: none;
        }

        .footer p {
            margin: 5px 0;
        }

        .footer .social {
            margin-bottom: 10px;
        }

        .footer .social a {
            margin: 0 10px;
        }

        .footer .social a img {
            width: 30px;
            height: 30px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #fb8500;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #e76f00;
        }

        @media screen and (max-width: 600px) {
            .container {
                width: 100%;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712194219/fmeyw3a97a7h3vtbrewv.png"
                alt="Logo">
            <h1 style="color: #fb8500">Bienvenido a ProveerTen</h1>
        </div>

        <div class="content">
            <p>¡Hola ${username}!</p>
            <p>Nos da gusto tenerte en nuestra plataforma.</p>
            <p>Gracias por preferirnos</p>
            <p>Todo lo que buscas a distancia de un click,
                Todo aqui en ProveerTen.</p>
            <p><strong>¿Que puedes hacer en ProveerTen?</strong></p>
            <ul style="list-style-type: none; text-align: left;">
                <li>&#10004; Puedes realizar pedidos a tus compañias de preferencia</li>
                <li>&#10004; Chatear con trabajadores de compañias sobre dudas</li>
                <li>&#10004; Descubrir nuevos productos y empresas en tu localidad</li>
                <li>&#10004; Ver publicaciones sobre novedades de las empresas</li>
                <li>&#10004; Y mucho mas solo el proveerten</li>
            </ul>
            <a href="https://proveerten.netlify.app/" class="button">Ir a la pagina</a>
        </div>
    </div>

    <div class="footer">
        <div class="social">
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195124/mb1efrjjsh2wcpqh1ueh.png"
                    alt="Facebook"></a>
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195125/jcrere3xbrzpngcu2huf.jpg"
                    alt="Twitter"></a>
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195128/eb4vzwgxrzuutgarmjlp.webp"
                    alt="Instagram"></a>
        </div>
        <p>Todos los derechos reservados &copy; 2024 ProveerTen</p>
        <p><a href="#">Términos de Uso</a> | <a href="#">Política de Privacidad</a> | <a href="#">Visítanos</a></p>
    </div>
    </div>
    </div>
</body>

</html>
`
            } else if (role === 'company') {
                html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a ProveerTen</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            /* Centrado */
        }

        .header {
            text-align: center;
            padding-bottom: 20px;
        }

        .header img {
            max-width: 100px;
            height: auto;
        }

        .content {
            padding: 20px;
        }

        .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
        }

        .footer a {
            color: #333;
            text-decoration: none;
        }

        .footer p {
            margin: 5px 0;
        }

        .footer .social {
            margin-bottom: 10px;
        }

        .footer .social a {
            margin: 0 10px;
        }

        .footer .social a img {
            width: 30px;
            height: 30px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #fb8500;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #e76f00;
        }

        @media screen and (max-width: 600px) {
            .container {
                width: 100%;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712194219/fmeyw3a97a7h3vtbrewv.png"
                alt="Logo">
            <h1 style="color: #fb8500">Bienvenido a ProveerTen</h1>
        </div>

        <div class="content">
            <p>¡Hola ${username}!</p>
            <p>Nos da gusto tenerte en nuestra plataforma.</p>
            <p>Gracias por preferirnos</p>
            <p>Todo lo que buscas a distancia de un click,
                solo en ProveerTen.</p>
            <p><strong>¿Que puedes hacer en ProveerTen?</strong></p>
            <ul style="list-style-type: none; text-align: left;">
                <li>&#10004; Crea, gestiona y publica tus productos</li>
                <li>&#10004; Crea y gestiona publicaciones sobre promociones de tus productos</li>
                <li>&#10004; Crea y gestiona tus trabajadores </li>
                <li>&#10004; Visualiza los pedidos realizados a tu empresa</li>
                <li>&#10004; Y mucho mas solo el proveerten</li>
            </ul>
            <a href="https://proveerten.netlify.app/" class="button">Ir a la pagina</a>
        </div>
    </div>

    <div class="footer">
        <div class="social">
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195124/mb1efrjjsh2wcpqh1ueh.png"
                    alt="Facebook"></a>
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195125/jcrere3xbrzpngcu2huf.jpg"
                    alt="Twitter"></a>
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195128/eb4vzwgxrzuutgarmjlp.webp"
                    alt="Instagram"></a>
        </div>
        <p>Todos los derechos reservados &copy; 2024 ProveerTen</p>
        <p><a href="#">Términos de Uso</a> | <a href="#">Política de Privacidad</a> | <a href="#">Visítanos</a></p>
    </div>
    </div>
    </div>
</body>

</html>
`
            } else if (role === 'provider') {
                html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a ProveerTen</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            /* Centrado */
        }

        .header {
            text-align: center;
            padding-bottom: 20px;
        }

        .header img {
            max-width: 100px;
            height: auto;
        }

        .content {
            padding: 20px;
        }

        .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
        }

        .footer a {
            color: #333;
            text-decoration: none;
        }

        .footer p {
            margin: 5px 0;
        }

        .footer .social {
            margin-bottom: 10px;
        }

        .footer .social a {
            margin: 0 10px;
        }

        .footer .social a img {
            width: 30px;
            height: 30px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #fb8500;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #e76f00;
        }

        @media screen and (max-width: 600px) {
            .container {
                width: 100%;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712194219/fmeyw3a97a7h3vtbrewv.png"
                alt="Logo">
            <h1 style="color: #fb8500">Bienvenido a ProveerTen</h1>
        </div>

        <div class="content">
            <p>¡Hola ${username}!</p>
            <p>Nos da gusto tenerte en nuestra plataforma.</p>
            <p>Gracias por preferirnos</p>
            <p>Todo lo que buscas a distancia de un click,
                solo en ProveerTen.</p>
            <p><strong>¿Que puedes hacer en ProveerTen?</strong></p>
            <ul style="list-style-type: none; text-align: left;">
                <li>&#10004; Gestiona tus pedidos</li>
                <li>&#10004; Filtra y encuentra todos los tenderos de tu localidad</li>
                <li>&#10004; Ve los productos de tu empresa </li>
                <li>&#10004; Visualiza el perfil y las publicaciones de tu empresa</li>
                <li>&#10004; Y mucho mas solo el proveerten</li>
            </ul>
            <a href="https://proveerten.netlify.app/" class="button">Ir a la pagina</a>
        </div>
    </div>

    <div class="footer">
        <div class="social">
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195124/mb1efrjjsh2wcpqh1ueh.png"
                    alt="Facebook"></a>
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195125/jcrere3xbrzpngcu2huf.jpg"
                    alt="Twitter"></a>
            <a href="#"><img
                    src="https://res.cloudinary.com/dl0dgsxb7/image/upload/v1712195128/eb4vzwgxrzuutgarmjlp.webp"
                    alt="Instagram"></a>
        </div>
        <p>Todos los derechos reservados &copy; 2024 ProveerTen</p>
        <p><a href="#">Términos de Uso</a> | <a href="#">Política de Privacidad</a> | <a href="#">Visítanos</a></p>
    </div>
    </div>
    </div>
</body>

</html>
`
            }

            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Bienvenido a ProveerTen',
                html: html
            };

            transporter.sendMail(mailOptions, (error: any, info: any) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                } else {
                    console.log('Correo electrónico enviado:', info.response);

                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
