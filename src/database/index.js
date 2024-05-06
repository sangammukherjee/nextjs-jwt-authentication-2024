import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://sangammukherjee2022:sangam2024@cluster0.pcwnsgk.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Auth database connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;
