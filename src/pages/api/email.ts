import { Message, MessageHeaders, SMTPClient } from "emailjs";
import { Enviroments } from '@utils/Config'; 
import { NextApiRequest, NextApiResponse } from "next";
import { ContactMessage } from "@interfaces/contactMessage.interface";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log(req.body);

    const {name, fromEmail, subject, message} = req.body as ContactMessage;

    console.log(Enviroments);

    const client:SMTPClient = new SMTPClient({
        user: Enviroments.email,
        password: Enviroments.password,
        host: "smtp.gmail.com",
        ssl: true,
    })

    //Enviroments.emailjs_service, Enviroments.emailjs_template 

    try {
        const response = await client.sendAsync({
            text: `Name: ${name} 
                    ${message}`,
            from: fromEmail,
            to: Enviroments.email,
            subject: subject,
        });

        console.log("Response");
        console.log(response);
        console.log("Response");
    } catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }));
        return;
    }

    res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
