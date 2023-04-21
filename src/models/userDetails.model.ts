import { Schema, model } from "mongoose";

export interface UserDetail {
  id: string;
  name: string;
  email: string;
  mobile: number;
  city: string;
}

export const userSchema = new Schema<UserDetail>(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: Number, require: true, unique: true },
    city: { type: String, require: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const userModel = model<UserDetail>("userDetail", userSchema);
