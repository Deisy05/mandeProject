// express payroll_route
import { Router } from "express";
const payroll_route = Router();

// controllers
import { factura} from "../controllers";
const { create, eliminate, read } = factura;

payroll_route.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  });

  //create payroll
payroll_route.post("/crear", async (req, res) => {
    try {
      const {
        price, time, description, id_worker, rating, phone, id_labor
      } = req.body;
      const pay = await create(
        price, time, description, id_worker, rating, phone, id_labor
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
  payroll_route.get("/read", async(req, res)=>{
    try {
        const{id} = req.body;
        read(id);
        res.status(200).json({message: "Labor found"})
    } catch (error) {
        res.status(400).json({ message: "Wrong arguments" });
    }
  });

  module.exports = payroll_route;