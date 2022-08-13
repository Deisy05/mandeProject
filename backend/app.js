import express from "express";
import routes from "./routes";

const { client_route, worker_route, labor_route, payroll_route, payment_method_route, workerLabor_route } = routes;

const app = express();
const port = 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded());

app.use("/client", client_route);
app.use("/worker", worker_route);
app.use("/labor", labor_route);
app.use("/payment_method", payment_method_route);
app.use("/payroll", payroll_route);
app.use("/workerLabor", workerLabor_route);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
