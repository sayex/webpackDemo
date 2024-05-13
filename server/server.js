const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const db = require("./config/connection");
const path = require('path');

app.use(express.json());
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes)

app.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, '../client/dist/index.html'))
);

db.once("open", ()=>{
	app.listen(PORT, ()=>{
		console.log(`Server is running on port ${PORT}`);
	})
})