
import { Router } from "express";
const client_route = Router();
const bcrypt = require("bcrypt");


import { cliente } from "../controllers";
const { validar, crear, eliminar, actualizar, read } = cliente;

client_route.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});


client_route.post("/singin", async (req, res) => {
  console.log("registro de usuario");
  try {
    const {telefono, documento,  nombre, apellido, nombreUsuario, direccion, email, contraseña, imgperfil, img} = req.body;
    const user = await crear(telefono, documento,  nombre, apellido, nombreUsuario, direccion, email, contraseña, imgperfil, img
        );
      console.log(user);
      if (user) {
        res.status(201).json({ message: "Se ha registrado el usuario", user }); 
      }

  } catch {
    res.status(400).json({ message: "verifique los datos" });
  }
});


client_route.get("/singup", (req, res) => {
  try {
    const {nombreUsuario} = req.body;
    const user = validar(nombreUsuario)
    if(usuario){
    res.status(200).json({ message: "Logged succesfully", user })
  }
    res.status(400).json({ message: "Invalid credentials" });
  } catch {
    res.status(400).json({ message: "datos incorrectos" });
  }
});

ts
client_route.delete("/eliminar", (req, res) => {
  
  try {
    const { telefono } = req.body;
    eliminar(telefono);
  } catch {
    res.status(400).json({ message: "datos incorrectos" });
  }
});


client_route.get("/read", (req, res)=>{
  try {
    const{telefono} = req?.params;
    read(telefono);
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
});


client_route.put("/actualizar", (req, res)=>{
  try {
    const{email, username, phone}=req.body;
    const user = actualizar(email, username, phone);
    console.log(user);
    if (user) {
      res.status(200).json({ message: "client successfully upgraded", user });
    }
  } catch (error) {
    res.status(400).json({ message: "Wrong arguments" });
  }
});

module.exports = client_route;