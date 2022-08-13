// express payment_method_route
import { Router } from "express";
const payment_method_route = Router();

import { metodoDePago } from "../controllers";
const { read, crear} = metodoDePago;

payment_method_route.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});


payment_method_route.post("/crear", (req, res) => {
    try {
        const{card_number, cvv, expiration_date, name_titular, phone} = req.body;
        crear(card_number, cvv, expiration_date, name_titular, phone);
        res.status(201).json({message: "Payment successfully created"})
    } catch (error) {
        res.status(400).json({message:"An error has occurred"});
    }
});


payment_method_route.get("/id", (req, res) => {
  try {
    const{card_number} = req.body;
    const pay = read(card_number);
    res.status(201).json({message: "payment found", pay})
    console.log(pay);
  } catch (error) {
    res.status(400).json({message: "An error has occurred"});
  }
});

module.exports = payment_method_route;