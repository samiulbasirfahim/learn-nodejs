const mongoose = require("mongoose")

const dbConnect = () => {
	try {
		mongoose
			.connect(process.env.mongodb_connection_string)
			.then(() => console.log("database connected"))
			.catch((err) => console.error(err.message))
	} catch (err) {
		console.log(err)
	}
}

module.exports = dbConnect
