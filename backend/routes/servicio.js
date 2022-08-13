// express workerLabor_route
import { Router } from "express";
const workerLabor_route = Router();

// controllers
import { factura} from "../controllers";
const { create, eliminate, read } = factura;

workerLabor_route.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  });

  //create payroll
workerLabor_route.post("/crear", async (req, res) => {
    try {
      const {
        id_labor, id_worker, description, price
      } = req.body;
      const pay = await create(
        id_labor, id_worker, description, price
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
  workerLabor_route.get("/read", async(req, res)=>{
    try {
        const{price} = req.body;
        read(price);
        res.status(200).json({message: "Labor found"})
    } catch (error) {
        res.status(400).json({ message: "Wrong arguments" });
    }
  });

  module.exports = workerLabor_route;