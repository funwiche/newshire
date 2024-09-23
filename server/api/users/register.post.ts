import User from "@/server/models/User";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const _id: any = $rand;
    const expiry = Date.now() + 8.64e6;
    let { email, password, ...body } = await readBody(event);
    const { AccessToken, mailer, $app }: any = useRuntimeConfig();
    if (await User.findOne({ email })) return [null, statusCode.EMAIL_EXITS];
    password = await bcrypt.hash(password, 10);
    const token = JWT.sign(_id, AccessToken);
    const access_token = JWT.sign({ email, expiry }, AccessToken);
    const html = `<h4>Welcome ${body.profile.lname} ${body.profile.fname},</h4><p>Thanks for registering at the ${$app.name}.</p><p>One more step is required to confirm your registration within <strong>24 hours.</strong></p><p>To complete your registration and activate your account, please click the link below:</p><a href="${$app.baseUrl}/account/activate?access_token=${access_token}" style="font-weight:700;text-decoration:none;font-size:18px">Activate Your Account</a><p>If you didn’t sign up for this account, you can ignore this email. If you encounter any issues, please contact our support team for assistance.</p><p>Once activated, you can access online services from <a href="${$app.baseUrl}">your personal profile</a></p><p>Best regards,</p><div><b>International Admissions</b></div><div>Tel:&nbsp;${$app.phone}</div><div>Email:&nbsp;${$app.email}</div><div>Website:&nbsp;${$app.domain}</div>`;
    const subject = `Activate Your Account`;
    const from = `${$app.name} <${$app.email}>`;
    await nodemailer
      .createTransport(mailer)
      .sendMail({ from, to: email, replyTo: $app.email, subject, html });
    const user: any = new User({ _id, email, password, ...body });
    await user.save();
    return [{ user, token }, null];
  } catch (error: any) {
    return [null, error.message];
  }
});
