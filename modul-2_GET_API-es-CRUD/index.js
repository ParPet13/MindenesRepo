const express = require("express");
const app = express();

let users = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: "3",
    name: "Sam Johnson",
    email: "sam.johnson@example.com",
  },
];

app.use(express.json());

app.get("/api/users",(req,res) =>{
    res.json
})
app.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id === id);
  
    if (!user) {
      return res.status(404).json({ message: "Nem található ilyen user" });
    }
  
    res.json(user);
  });

  app.listen(3000, () => console.log("A szerver a 3000-es porton fut!"));