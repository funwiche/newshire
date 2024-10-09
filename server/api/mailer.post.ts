import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    let { name, email, phone, location, message }: any = await readBody(event);
    const { mailer, $app }: any = useRuntimeConfig();
    const html = `
    <div style="font-size:14px;margin-bottom:8px;"><strong>Full name:</strong> ${name}</div>
    <div style="font-size:14px;margin-bottom:8px;"><strong>Email Address: </strong>${email}</div>
    <div style="font-size:14px;margin-bottom:8px;"><strong>Phone Number:</strong> ${phone}</div>
    <div style="font-size:14px;margin-bottom:8px;"><strong>Country / Region:</strong> ${location}</div>
    <div style="font-size:14px;margin-bottom:8px;"><strong>Message: </strong>${message}`;
    const subject = "Contact us";
    const from = `${name} <${$app.email}>`;
    const replyTo = `"${name} " <${email}>`;
    const to = `"Admissions Team" <${$app.email}>`;
    await nodemailer
      .createTransport(mailer)
      .sendMail({ from, to, replyTo, subject, html });
    return ["Your message has been sent successfully!", null];
  } catch (error: any) {
    console.log(error.message);
    return [null, error.message];
  }
});
