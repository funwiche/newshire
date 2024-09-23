import User from "@/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const _id = event.context.user;
    await getAuthUser(_id);
    const body: any = await readBody(event);
    await User.updateOne({ _id }, { $set: body }, { upsert: true });
    const user = await User.findById(_id);
    return [user, null];
  } catch (error: any) {
    return [null, error.message];
  }
});
