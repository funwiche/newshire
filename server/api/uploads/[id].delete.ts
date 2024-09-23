import Upload from "@/server/models/Upload";
import User from "@/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const _id = getRouterParam(event, "id");
    if (!event.context.user) throw new Error(statusCode.UNAUTHORIZED);
    const data = await Upload.findById(_id, { user: 1, field: 1 });
    if (!data) throw new Error(statusCode.USER_NOT_FOUND);
    const { field, user } = data;
    await Upload.deleteOne({ _id });
    await User.updateOne(
      { _id: user },
      { $set: { [`uploads.${field}`]: null } },
      { upsert: true }
    );
    return [true, null];
  } catch (error: any) {
    return [null, error.message];
  }
});
