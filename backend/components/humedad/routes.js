const { Router } = require("express");
const { GetData, CreateData } = require("./controller");

const router = Router();

router.get("/", (req, res) => {
	GetData().then((data) => {
		res.send(data)
	});
});

router.post("/", (req, res) => {
	const { humedad, fecha } = req.body;
	const body = { humedad, fecha };
	CreateData(body).then((data) => {
		res.send(data);
	});
});

module.exports = router;
