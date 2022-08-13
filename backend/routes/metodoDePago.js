// express payment_method_route
import { Router } from "express";
const payment_method_route = Router();

import { payment_method } from "../controllers";
const { read, create} = payment_method;

payment_method_route.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

//create a payment_method
//que lu mande el phone junto con los otros datos

payment_method_route.post("/create", (req, res) => {
    try {
        const{card_number, cvv, expiration_date, name_titular, phone} = req.body;
        create(card_number, cvv, expiration_date, name_titular, phone);
        res.status(201).json({message: "Payment successfully created"})
    } catch (error) {
        res.status(400).json({message:"An error has occurred"});
    }
});

// find a payment_method by phone number-client
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