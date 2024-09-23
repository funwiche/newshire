import User from "@/server/models/User";
import Upload from "@/server/models/Upload";
export default defineEventHandler(async (event) => {
  try {
    const _id = getRouterParam(event, "id");
    await Upload.deleteMany({ user: _id });
    await User.deleteOne({ _id });
    return [statusCode.DELETED_SUCCESSFULLY, null];
  } catch (error: any) {
    return [null, error.message];
  }
});
