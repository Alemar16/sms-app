import { NextResponse } from "next/server";
import twilio from "twilio";

//credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

//twilio client + credentials
const client = twilio(accountSid, authToken);

export async function POST(request) {
  try {
    //get data from reques
    const data = await request.json();
    //send SMS
    const message = await client.messages.create({
      body: data.message,
      from: process.env.TWILIO_NUMBER,
      to: data.phone,
    });
    //console.log(message.sid);

    return NextResponse.json({
      message: `Message sent to ${data.phone} by ${message.sid}`,
    });
  } catch (error) {
    console.log(error);

    return (
      NextResponse.json({
        error: "Something went wrong, message not sent, please try again",
      }),
      {
        status: 500,
      }
    );
  }
}
