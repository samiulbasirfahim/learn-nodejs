import fs from "fs"
import { unlink } from "fs"
import http from "http"

const app = {}

app.handleServer = (req, res) => {
	if (req.method === "GET") {
		const filename = req.headers.filename
		fs.readFile(filename, "utf8", (err, data) => {
			if (err) {
				res.write("Something went wrong")
				res.end()
			} else {
				res.write(data)
				res.end()
			}
		})
	} else if (req.method === "POST") {
		const filename = req.headers.filename
		if (!filename) {
			res.write("Filename is required")
			res.end()
		} else {
			let text = ""
			req.on("data", (data) => {
				text += data
			})
			req.on("end", () => {
				if (fs.existsSync(filename)) {
					res.write("File already exists: " + filename)
					res.write("\n Please change the filename")
					res.end()
				} else {
					fs.writeFile(filename, text, (err) => {
						if (err) {
							res.write("Something went wrong")
							res.write("Error: " + err)
							res.end()
						} else {
							res.write(filename + "write successfully")
							res.end()
						}
					})
				}
			})
		}
	} else if (req.method === "DELETE") {
		try {
			const filename = req.headers.filename
			unlink(filename, (err) => {
				if (err) {
					res.write("Something went wrong")
					res.write("\nmaybe file not found")
					res.end()
				} else {
					res.write("File deleted: " + filename)
					res.end()
				}
			})
		} catch (err) {
			res.write("Something went wrong")
			res.end()
		}
	}
}

app.config = {
	port: 3001,
}
app.server = http.createServer(app.handleServer)

app.server.listen(app.config.port, () => {
	console.log(`Listening on port ${app.config.port}`)
})
