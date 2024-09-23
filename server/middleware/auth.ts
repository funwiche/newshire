import JWT from "jsonwebtoken";
export default defineEventHandler((event) => {
  const { AccessToken } = useRuntimeConfig();
  const token = getCookie(event, "access_token");
  if (!token) event.context.user = null;
  else
    JWT.verify(token, AccessToken, async (err, user) => {
      if (err) return (event.context.user = null);
      event.context.user = user;
    });
});
