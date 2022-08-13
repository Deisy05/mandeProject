// express worker_route
import { Router } from "express";
const worker_route = Router();

// authentication controller
import { worker } from "../controllers";
const { authentication, create, eliminate, update, read } = worker;

worker_route.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

worker_route.get("/singup", async(req, res) => {
  // log into application
 try {
    console.log(req.body)
    const { email, password} = req.body;
    await authentication(email, password)
    ? res.status(200).json({ message: "Logged succesfully"})
    : res.status(400).json({ message: "Invalid credentials" });
    console.log(req.body)
    //res.status(400).json({ message: "Invalid credentials" });
  } catch {
    res.status(400).json({ message: "Wrong arguments" });
  }
});


worker_route.post("/singin", async(req, res) => {
  // create new account
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


worker_route.put("/update", (req, res) => {
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

worker_route.delete("/eliminate", async(req, res) => {
  // delete a worker
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
