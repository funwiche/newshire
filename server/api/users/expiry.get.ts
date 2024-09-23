import User from "@/server/models/User";
import JWT from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const { access_token: token }: any = getQuery(event);
  const { AccessToken } = useRuntimeConfig();
  try {
    if (!token) return [null, statusCode.UNAUTHORIZED];
    return JWT.verify(
      token,
      AccessToken,
      async (err: any, { email, expiry }: any) => {
        if (err) return [null, statusCode.INVALID_USER];
        const user = await User.findOne({ email });
        if (!user) return [null, statusCode.INVALID_USER];
        if (Date.now() > expiry) return [null, statusCode.EXPIRED_PIN];
        await User.updateOne(
          { email },
          { $set: { verified: true } },
          { upsert: true }
        );
        return [user.email, false];
      }
    );
  } catch (error: any) {
    return [null, error.message];
  }
});
