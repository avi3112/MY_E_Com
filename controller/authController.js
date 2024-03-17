import { hashpassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name && !email && !password && !phone && !address) {
      return res.send({ error: `${name} is required` });
    }
    // check user
    const existinguser = await userModel.findOne({ email });

    // existing user
    if (existinguser) {
      return res.status(200).send({
        success: true,
        message: "Already register please login",
      });
    }
    // register user

    const hashedPassword = await hashpassword(password);

    // save

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "user register successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};
