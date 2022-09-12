const mongoose = require("mongoose");

const dbConnect = () => {
	const db_uri = "mongodb+srv://Daniel:piter0980@cluster0.tsd8w6l.mongodb.net/?retryWrites=true&w=majority";
	mongoose.connect(
		db_uri,
		{
			useNewUrlParser: true,
			useUnifiedtopology: true,
		},
		(err, res) => {
			if (!err) {
				console.log("Conexion establecida con la base de datos");
			} else {
				console.log("Conexion rechazada con la base de datos");
			}
		}
	);
};

module.exports = dbConnect;
