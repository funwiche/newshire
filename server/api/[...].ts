export default defineEventHandler((event) => {
  // setHeader(event,)
  setResponseStatus(event, 200, "Message sent successfully");
});
