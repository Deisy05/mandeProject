import { Router } from "express";
const pay_route = Router();

import { factura} from "../controllers";
const { create, eliminate, read } = factura;

pay_route.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  });

pay_route.post("/crear", async (req, res) => {
    try {
      const {
        id, price, time, description, id_worker, raiting, phone, id_labor
      } = req.body;
      const pay = await create(
        id, price, time, description, id_worker, raiting, phone, id_labor
      );
      console.log(pay);
      if (pay) {
        res.status(201).json({ message: "Succcessful registred payroll", pay });
      }
    } catch {
      res.status(400).json({ message: "Wrong arguments" });
    }
  });

  //read payroll
  pay_route.get("/read", async(req, res)=>{
    try {
        const{id} = req.body;
        read(id);
        res.status(200).json({message: "Labor found"})
    } catch (error) {
        res.status(400).json({ message: "Wrong arguments" });
    }
  });

  module.exports = pay_route;