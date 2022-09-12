const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		humedad: {
			type: Number,
			require: true,
		},
		fecha: {
			type: Date,
			require: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model("humedads", UserSchema);
