// express payment_method_route
import { Router } from "express";
const payment_method_route = Router();

import { metodoDePago } from "../controllers";
const { read, crear} = metodoDePago;

payment_method_route.use((req, res, next) => {
  console.log("Tiempo: ", Date.now());
  next();
});


payment_method_route.post("/crear", (req, res) => {
    try {
        const{numeroT, cvv, fechaEx, titular, telefono} = req.body;
        crear(numeroT, cvv, fechaEx, titular, telefono);
        res.status(201).json({message: "created"})
    } catch (error) {
        res.status(400).json({message:"error"});
    }
});


payment_method_route.get("/id", (req, res) => {
  try {
    const{numeroT} = req.body;
    const pay = read(numeroT);
    res.status(201).json({message: "found", pay})
    console.log(pay);
  } catch (error) {
    res.status(400).json({message: "error"});
  }
});

module.exports = payment_method_route;