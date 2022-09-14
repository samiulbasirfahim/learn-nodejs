import fs from "fs"

const readFileStream = fs.createReadStream("data.txt")

readFileStream.on("data", function (data) {
	console.log(data)
})

readFileStream.on("open", function () {
	console.log("open text streming...")
})

// i can pause and resume streaming
readFileStream.pause()
readFileStream.resume()
