import { Request, Response } from "express";
import sendinblue from "./sendInBlue";

export const sendEmail = async (req: Request, res: Response) => {
  const { email = "waeldghim7@gmail.com", name = "" } = req.body;

  try {
    let sendSmtpEmail = {
      to: [
        {
          email,
        },
      ],
      templateId: 1,
      params: {
        name,
        email,
        link: "http://localhost:5173/confirm-email",
      },
    };

    await sendinblue(sendSmtpEmail);
    res.send("success");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
