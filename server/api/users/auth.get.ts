export default defineEventHandler(async (event) => {
  try {
    return [await getAuthUser(event.context.user), null];
  } catch (error: any) {
    return [null, error.message];
  }
});
