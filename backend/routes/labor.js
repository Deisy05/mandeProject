// express labor_route
import { Router } from "express";
const labor_route = Router();

import { labor } from "../controllers";
const { create, eliminate, update, read } = labor;

labor_route.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

//create a labor
labor_route.post("/create", (req, res) => {
  try {
    //console.log(req);
    console.log("Body", req.body);
    const{name} = req.body;
    const labor = create(name);
    res.status(200).json({message: "Created labor", labor});
  } catch (error) {
    res.status(400).json({message: "Wrong arguments"})
  }
});

// find a labor by his id
labor_route.get("/id", (req, res) => {
  try {
    const{id} = req.body;
    read(id);
    res.status(200).json({message: "found labor"});
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
});

labor_route.put("/update", (req, res) => {
  try {
    const{name, id} = req.body;
    update(name,id);
    res.status(200).json({message:"Updated labor"})
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
});

labor_route.delete("/delete", (req, res) => {
  try {
    const{id} = req.body;
    eliminate(id);
    res.status(200).json({message: "Labor eliminated"})
  } catch (error) {
    res.status(400).json({message: "Wrong arguments"})
  }
});

module.exports = labor_route;
