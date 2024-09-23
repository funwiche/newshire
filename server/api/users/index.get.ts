import User from "@/server/models/User";
export default defineEventHandler(async (event) => {
  try {
    const query: any = getQuery(event);
    const skip = parseInt(query.skip || "0");
    const limit = parseInt(query.limit || "24");
    const items = await User.find().skip(skip).limit(limit);
    const total = await User.countDocuments();
    return [{ items, limit, skip, total }, null];
  } catch (error: any) {
    return [null, error.message];
  }
});
