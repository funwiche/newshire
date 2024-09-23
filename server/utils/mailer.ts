import nodemailer from "nodemailer";

export const mailer = ({
  to,
  from,
  replyTo,
  subject,
  html,
  attachments = [],
  mailer,
}: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const send = await nodemailer
        .createTransport(mailer)
        .sendMail({ from, to, replyTo, subject, html, attachments });
      resolve(send);
    } catch (error) {
      reject(error);
    }
  });
