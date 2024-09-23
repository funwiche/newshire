import User from "@/server/models/User";
import nodemailer from "nodemailer";
export default defineEventHandler(async (event) => {
  try {
    const { mailer, $app }: any = useRuntimeConfig();
    const _id = event.context.user;
    let user: any = await getAuthUser(_id);
    user = $parsed(user);
    const html = `<p>Dear ${user.profile.lname} ${
      user.profile.fname
    },</p><p>Thank you for applying to ${
      $app.name
    }. We have received your application for admission, and it is currently under review.</p><p><b>Application Details:</b></p><ul><li>Program:&nbsp;<b>${
      user.program.name
    }</b></li><li>Application ID:&nbsp;<b>00${
      user._id
    }</b></li><li>Duration of Study:&nbsp;<b>${
      user.program.duration
    } (Full-time)</b></li><li>Submission Date:&nbsp;<b>${new Date().toLocaleDateString()}</b></li></ul><p>Please keep this email for your records. If we need any additional information, we will contact you via email. You can check the status of your application at any time by logging into your&nbsp;<a href="${
      $app.baseUrl
    }">application portal</a>.</p><p>We appreciate your interest in joining ${
      $app.name
    } and look forward to reviewing your application.</p><p>If you have any questions or need assistance, please do not hesitate to contact our admissions office at ${
      $app.email
    }.</p><p>Best regards,</p><div><b>International Admissions</b></div><div>Tel:&nbsp;${
      $app.phone
    }</div><div>Email:&nbsp;${$app.email}</div><div>Website:&nbsp;${
      $app.domain
    }</div>`;
    const subject = `Application for Admission Submitted`;
    const from = `${$app.name} <${$app.email}>`;
    await nodemailer
      .createTransport(mailer)
      .sendMail({ from, to: user.email, replyTo: $app.email, subject, html });
    await User.updateOne(
      { _id },
      { $set: { status: "submitted" } },
      { upsert: true }
    );
    return [await User.findById(_id), null];
  } catch (error: any) {
    return [null, error.message];
  }
});
