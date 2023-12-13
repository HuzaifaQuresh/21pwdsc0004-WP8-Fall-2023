const express = require("express");
const app = express();

const PORT = 3000;   

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.get('/getRequest', (req, res) => {
    res.send("successful GET request.");
});

app.post("/postRequest", (req, res) => {
    res.send("successful POST request");
});

app.put("/putRequest", (req, res) => {
    res.send("successful PUT request");
});    
