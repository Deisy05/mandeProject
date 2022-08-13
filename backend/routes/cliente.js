// express client_router
import { Router } from "express";
const client_route = Router();
const bcrypt = require("bcrypt");


// controllers
import { client } from "../controllers";
const { authentication, create, eliminate, update, read } = client;

client_route.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});


//Create Client
client_route.post("/singin", async (req, res) => {
  console.log("signin endpoint");
  try {
    const {phone, document,  name, lastname, username, address, email, password, profile_image, image} = req.body;
    const user = await create(
        phone, document,  name, lastname, username, address, email, password, profile_image, image
        );
      console.log(user);
      if (user) {
        res.status(201).json({ message: "Succcessful registred client", user }); 
      }

  } catch {
    res.status(400).json({ message: "Wrong arguments" });
  }
});


// log into application
client_route.get("/singup", (req, res) => {
  try {
    const {username} = req.body;
    const user = authentication(username)
    if(user){
    res.status(200).json({ message: "Logged succesfully", user })
  }
    res.status(400).json({ message: "Invalid credentials" });
  } catch {
    res.status(400).json({ message: "Wrong arguments" });
  }
});

//delete client
client_route.delete("/delete", (req, res) => {
  // log into application
  try {
    const { phone } = req.body;
    eliminate(phone);
  } catch {
    res.status(400).json({ message: "Wrong arguments" });
  }
});

//read client
client_route.get("/read", (req, res)=>{
  try {
    const{phone} = req?.params;
    read(phone);
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
});


//update client
client_route.put("/update", (req, res)=>{
  try {
    const{email, username, phone}=req.body;
    const user = update(email, username, phone);
    console.log(user);
    if (user) {
      res.status(200).json({ message: "client successfully upgraded", user });
    }
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
});

module.exports = client_route;