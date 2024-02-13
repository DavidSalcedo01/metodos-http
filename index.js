const express = require('express');
const app = express();
const PORT = 3000;
let array = [];
app.use(express.json());


let cars =[
    {"model":123, "name":"vocho"},
    {"model":456, "name":"polo"}
];

app.get('/get', (req, res) => {
  res.json(cars);
});

app.post('/post', (req, res) => {
    const reqArray = req.body;
    cars.push(reqArray);
    res.send("Datos recibidos correctamente");
});

app.delete('/delete/:model', (req, res) => {
    const { model } = req.params;
    const deleteRow = cars.find(cars => cars.model == parseInt(model));
    if (deleteRow === -1) {
      res.send("dato no encontrado");
    } else {
      cars.splice(deleteRow, 1);
      res.send("Se elimino de manera correcta");
    }
  });

  app.patch('/patch/:model', (req, res) => {
    const { model } = req.params;
    const { name } = req.body;
    const patchRow = cars.find(car => car.model == parseInt(model));
    if (patchRow === -1) {
      res.send("dato no encontrado");
    } else {
      patchRow.name = name || patchRow.name;
      res.send("Se actualizo de manera correcta");
    }
  });

  app.get('/getModel/:model', (req, res) => {
    const { model } = req.params;
    const serch = cars.find(car => car.model == parseInt(model));
    if (serch === -1) {
      res.send("dato no encontrado");
    } else {
      res.json(serch);
    }
  });

app.listen(PORT, () => {
  console.log("Servidor Express en funcionamiento en http://localhost:3000");
});