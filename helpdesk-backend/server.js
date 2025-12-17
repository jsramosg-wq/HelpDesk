const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const ticketsRoutes = require("./routes/tickets");
app.use("/api/tickets", ticketsRoutes);

// Ruta test
app.get("/", (req, res) => {
  res.send("API HelpDesk funcionando ✅");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
