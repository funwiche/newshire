import User from "@/server/models/User";
import bcrypt from "bcryptjs";
export default defineEventHandler(async (event) => {
  try {
    let { email, password }: any = await readBody(event);
    password = await bcrypt.hash(password, 10);
    await User.updateOne({ email }, { $set: { password } }, { upsert: true });
    return [statusCode.UPDATED_SUCCESSFULLY, null];
  } catch (error: any) {
    return [null, error.message];
  }
});
