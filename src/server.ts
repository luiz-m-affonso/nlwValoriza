import express from "express";

// @types/express
const app = express();


app.get("/test", (request, response) => {
  // Request => Informações que estão entrando na API
  // Response => Informações que estão saindo da API
  return response.send("Olá NLW Together GET")
});

// Insomnia
app.post("/test-post", (request, response) => {
  return response.send("Olá NLW Together POST")
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"))