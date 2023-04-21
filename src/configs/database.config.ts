import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () => {
  connect(process.env.Db_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log("Db Connected SuccessFully"),
    (err) => console.log(err)
  );
};
