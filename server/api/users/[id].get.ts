import User from "@/server/models/User";
export default defineEventHandler(async (event) => {
  const _id = getRouterParam(event, "id");
  const email = getRouterParam(event, "id");
  try {
    const user = await User.findOne({ $or: [{ email }, { _id }] });
    return user ? [user, null] : [null, statusCode.USER_NOT_FOUND];
  } catch (error: any) {
    return [null, error.message];
  }
});
