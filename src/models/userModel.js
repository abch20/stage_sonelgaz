import db from "../db.js";
import bcrypt from 'bcrypt';


const getUsers =  async() => await  db("users").select("*");

const getUserById = async (id) => await db("users").where({ id }).first();

const getUserByEmail = async (email) => await  db("users").where({ email }).first();

const createUser =  async (user) => {
    const hashedPassword =  await bcrypt.hash(user.password, 10);
    const newUser = { ...user, password: hashedPassword };
    console.log(newUser);
    return  db("users").insert(newUser).returning("*");
};

const deleteUser = async (id) => await db("users").where({ id }).del();



export { getUsers, getUserById, getUserByEmail, createUser, deleteUser };