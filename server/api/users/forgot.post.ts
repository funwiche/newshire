import User from "@/server/models/User";
import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const expiry = Date.now() + 1.8e6;
    let { email, dob }: any = await readBody(event);
    const { AccessToken, mailer, $app }: any = useRuntimeConfig();
    let user: any = await User.findOne({ email, "profile.birthdate": dob });
    if (!user) return [null, statusCode.USER_NOT_FOUND];
    user = $parsed(user);
    const access_token = JWT.sign({ email, expiry }, AccessToken);
    const html = `<p>Dear <strong>${user.profile.lname} ${user.profile.fname},</strong>,</p><p>We received a request to reset the password for your account. If you made this request, please click the link below to reset your password:</p><a href="${$app.baseUrl}/account/reset?access_token=${access_token}" style="font-weight:700;text-decoration:none;font-size:18px">Reset Your Password</a><p>If you didn’t request a password reset, please ignore this email or contact our support team if you have any concerns.</p><p>For security reasons, this link will expire in <strong>30 minutes</strong>.</p><div>Best regards,</div><div>Admission Team</div>`;
    const subject = `Password reset`;
    const from = `${$app.name} <${$app.email}>`;
    await nodemailer
      .createTransport(mailer)
      .sendMail({ from, to: email, replyTo: $app.email, subject, html });
    return [access_token, null];
  } catch (error: any) {
    return [null, error.message];
  }
});
