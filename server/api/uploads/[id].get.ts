import Upload from "@/server/models/Upload";
export default defineEventHandler(async (event: any) => {
  try {
    const id = getRouterParam(event, "id");
    const file = await Upload.findById(id);
    if (!file) return event.node.res.end();
    event.node.res.end(file.data, "binary");
  } catch (error: any) {
    event.node.res.end();
  }
});
