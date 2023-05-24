import { Request, Response } from "express";
import sendinblue from "./sendInBlue";

export const sendEmail = async (req: Request, res: Response) => {
  const { email = "jeghamnidhal7@gmail.com", msg = "", name = "" } = req.body;

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
        link: msg,
      },
    };

    await sendinblue(sendSmtpEmail);
    res.send("success");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
