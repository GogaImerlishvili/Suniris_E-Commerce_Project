import { createTransport } from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = "412177978138-ulqpmb1gutrc1j8fdoka4t04d4pd1n7t.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04HP31POkGtu4CgYIARAAGAQSNwF-L9IrcB00ZPweyUrzcp8B0GFP1t32Lu3k7ZJmHiUHWwKHyLLurMNNSHBJE2DHTjhePWbgr14";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN, scope: "https://www.googleapis.com/auth/gmail.send" })

async function sendMail() {
    try {
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "gogaimerlishvili1@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            }
        })

        const mailOptions = {
            from: "Sunirisiris@gmail.com",
            to: "gogaimerlishvili1@gmail.com",
            subject: "Hello from gmail using API",
            text: "Hello from gmail email using API",
            html: "<h1>Hello from gmail</h1>"
        }

        const result = await transport.sendMail(mailOptions)
        return result;

    } catch (error) {
        return error;
    }
}

sendMail().then(result => console.log("Email sent...", result))
    .catch(error => console.log(error))