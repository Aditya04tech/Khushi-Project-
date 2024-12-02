import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
  },
  images:
     [
        {
            filename: {
                type: String,
                required: true
            }
        }
    ],
});

const authModel = mongoose.model("user", authSchema);
export default authModel;
