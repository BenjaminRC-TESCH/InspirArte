import { Schema, model, Document } from "mongoose";

const schema = new Schema(
  {
    title: String,
    description: String,
    imagePath: String,
    reactions: Number, //Modificado
  },
  { timestamps: true }
);

export interface IPhoto extends Document {
  title: string;
  description: string;
  imagePath: string;
  reactions: number;
}

export default model<IPhoto>("Photo", schema);
