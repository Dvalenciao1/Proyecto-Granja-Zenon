const HumedadModel = require("./model");

const GetData = () => {
	return new Promise((resolve, reject) => {
		try {
			const result = HumedadModel.find();
			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

const CreateData = (body) => {
	return new Promise((resolve, reject) => {
		try {
			const result = HumedadModel.create({
				humedad: body.humedad,
				fecha: body.fecha,
			});
			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = { GetData, CreateData };
