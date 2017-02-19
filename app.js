let express = require("express"),
    app = express();

app.use((req, res, next) => {
    console.log("Time: %s", Date.now());
    req.timeStamp = Date.now();
    next();
});

app.get("/u/:id", (req, res, next) => {
    console.log("Req type: " + req.method);
    console.log("Param: " + req.params.id);
    res.send(req.params.id);
});

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.send("Hello world" + " " + req.timeStamp);
});



app.listen(3000, () => {
    console.log("OK!");
});