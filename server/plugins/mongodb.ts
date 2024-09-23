import mongoose from "mongoose";
// MongoDB Connection
export default defineNitroPlugin(() => {
  const { db_url } = useRuntimeConfig();
  mongoose.set("strictQuery", true);
  mongoose.connect(db_url);
  const db = mongoose.connection;
  db.on("error", console.error);
  db.once("open", () => console.log("Connected to Database..."));
});
