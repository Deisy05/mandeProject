// express worker_route
import { Router } from "express";
const worker_route = Router();

import { trabajador} from "../controllers";
const { authentication, create, eliminate, update, read } = trabajador;

worker_route.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

worker_route.get("/singup", async(req, res) => {
 try {
    console.log(req.body)
    const { email, password} = req.body;
    await authentication(email, password)
    ? res.status(200).json({ message: "Logged succesfully"})
    : res.status(400).json({ message: "Invalid credentials" });
    console.log(req.body)

  } catch {
    res.status(400).json({ message: "Wrong arguments" });
  }
});


worker_route.post("/singin", async(req, res) => {

  try {
    const{name, lastName, address, username, email, password, profile_image, availability} = req.body;
    console.log("Body",req.body);
    const user =  await create(name, lastName, address, username, email, password, profile_image, availability);
    console.log(user);
    if(user){
      res.status(201).join({message:"Succcessful registred worker", user});
    }
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
});


worker_route.put("/actualizar", (req, res) => {
  // upgrade an existing worker
  try {
    const{email, username, id}=req.body;
    const user = update(email, username, id);
    console.log(user);
    if(user){
      res.status(200).json({ message: "worker successfully upgraded", user });
    }
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
  
});

worker_route.delete("/eliminar", async(req, res) => {
 
  try {
    console.log(req.body)
    const{id} = req.body;
    const user = await eliminate(id);
    console.log(user);
    if(user){
      res.status(200).json({ message: "worker successfully eliminated", user });
    }
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
});

module.exports = worker_route;
