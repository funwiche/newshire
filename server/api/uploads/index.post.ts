export default defineEventHandler(async (event) => {
  try {
    let res;
    const user = event.context.user;
    await getAuthUser(user);
    const files = await readMultipartFormData(event);
    return [await uploadFile(files?.[0], user), null];
  } catch (error: any) {
    return [null, error.message];
  }
});
