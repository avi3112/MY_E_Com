import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { hashPassword } from "../helpers/authHelper.js";
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
        success: false,
        message: "Already register please login",
      });
    }
    // register user

    const hashedPassword = await hashPassword(password);

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

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        sucess: false,
        message: "invalid email or password",
      });
    }
    // check user

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email is not register ",
      });
    }
    //    console.log(password, user.password);
    const match1 = await bcrypt.compare(password, user.password);
    console.log(user.password.length);
    //    console.log(password, user.password);
    console.log(match1);
    if (match1) {
      return res.status(401).send({
        success: false,
        message: "invalid password ",
      });
    }

    // token

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      sucess: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//test controller

export const testController = async (req, res) => {
  res.send("protected routes");
};
