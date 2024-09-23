import User from "@/server/models/User";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    let { email, password }: any = await readBody(event);
    const { AccessToken } = useRuntimeConfig();
    let user: any = await User.findOne({ email });
    if (!user) return [null, statusCode.INVALID_EMAIL];
    if (!user.password) return [null, statusCode.INVALID_CREDENTIALS];
    if (!(await bcrypt.compare(password, user.password)))
      return [null, statusCode.INCORRECT_PASSWORD];
    const token = JWT.sign(user._id, AccessToken);
    return [{ token, user }, null];
  } catch (error: any) {
    return [null, error.message];
  }
});
