import { Router } from "express";
const payroll_route = Router();


import { factura} from "../controllers";
const { crear, eliminar, read } = factura;

payroll_route.use((req, res, next) => {
    console.log("Tiempo: ", Date.now());
    next();
  });

payroll_route.post("/crear", async (req, res) => {
    try {
      const {
        precio, tiempo, descripcion, id_trabajador, rating, telefono, id_labor
      } = req.body;
      const pagos = await crear(
        precio, tiempo, descripcion, id_trabajador, rating, telefono, id_labor
      );
      console.log(pagos);
      if (pagos) {
        res.status(201).json({ message: "Hecho!", pagos });
      }
    } catch {
      res.status(400).json({ message: "Datos erroneos" });
    }
  });

  payroll_route.get("/read", async(req, res)=>{
    try {
        const{id} = req.body;
        read(id);
        res.status(200).json({message: "encontrado!"})
    } catch (error) {
        res.status(400).json({ message: "revisa los datos" });
    }
  });

  module.exports = payroll_route;