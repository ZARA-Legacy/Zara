//@ts-ignore
import * as SibApiV3Sdk from "sib-api-v3-sdk";

const defaultClient: any = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SMTP_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendinblue = async (sendSmtpEmail: any) => {
  try {
    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      (data: any) => {
        console.log(data);
        return true;
      },
      (error: Error) => {
        console.error(error);
        return false;
      }
    );
  } catch (error) {
    console.log(error);
  }
  return;
};

export default sendinblue;
