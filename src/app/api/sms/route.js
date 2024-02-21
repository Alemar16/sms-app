import { NextResponse } from "next/server";
import twilio from "twilio";

//credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

//twilio client + credentials
const client = twilio(accountSid, authToken);

export async function GET() {
  try {
    //send SMS
    const message = await client.messages.create({
      body: "Hello from Twilio",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.USER_PHONE_NUMBER,
    });
    console.log(message.sid);

    return NextResponse.json({ message: "Hello world" });
  } catch (error) {
    console.log(error);

    return (
      NextResponse.json({ error: "Something went wrong, message not sent, please try again" }),
      {
        status: 500,
      }
    );
  }
}
