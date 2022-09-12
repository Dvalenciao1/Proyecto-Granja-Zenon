require("dotenv").config();

module.exports = {
	server: {
		host: process.env.HOST,
		ports: process.env.PORT,
	},
	db: {
		url: process.env.DB_URL,
	},
};
