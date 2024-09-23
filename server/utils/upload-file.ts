import User from "../models/User.js";
import Upload from "../models/Upload.js";

export default (file: any, user: string) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!file) return reject("Please upload a valid file!");
      const { name: field, filename: name, type, data } = file;
      const _id = $filename(name);
      await Upload.deleteMany({ field, user });
      await new Upload({ _id, field, user, type, data }).save();
      await User.updateOne(
        { _id: user },
        { $set: { [`uploads.${field}`]: { name, slug: _id } } },
        { upsert: true }
      );
      resolve({ name, slug: _id });
    } catch (error) {
      reject(error);
    }
  });
