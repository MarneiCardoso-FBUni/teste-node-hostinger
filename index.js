import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => response.send("Hello World, Node na Hostinger!"));

app.listen(port, () => console.log("Ouvindo a porta " + port));
