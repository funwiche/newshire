import path from "path";
import User from "@/server/models/User";

export const $parsed = (val: any) => {
  if (!val) return val;
  if (typeof val != "object") return val;
  return JSON.parse(JSON.stringify(val));
};
export const $rand = Math.floor(100000 + Math.random() * 900000);
export const $filename = (str: string) => {
  if (!str) return Date.now().toString();
  if (typeof str !== "string") return Date.now().toString();
  const val = str.slice(0, str.lastIndexOf(".")).toLowerCase();
  return val.replaceAll(/\s/gi, "-") + `-${Date.now()}${path.extname(str)}`;
};
export const getAuthUser = (id: any) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!id) throw new Error(statusCode.UNAUTHORIZED);
      const user = await User.findById(id);
      if (!user) throw new Error(statusCode.USER_NOT_FOUND);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
