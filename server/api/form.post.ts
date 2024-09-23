export default defineEventHandler(async (event) => {
  const fd: any = await readMultipartFormData(event);
  const email = fd.find((el: any) => el.name == "email").data.toString();
  const password = fd.find((el: any) => el.name == "password").data.toString();
  const file = fd.filter((el: any) => el.name == "file");
  console.log(file);
  return { email, password };
});
