import http from "http"

const app = {}

app.port = 3001

app.server = http.createServer((req, res) => {
	if (req.method === "POST") {
		let body = ""
		req.on("data", (chunk) => (body += chunk))
		req.on("end", () => {
			if (body === "") {
				res.writeHead(404)
				return res.end("Body required")
			}
			body = JSON.parse(body)
			if (!body.name) {
				body.name = "error"
			}
			res.writeHead(404, { "Content-Type": "application/json" })
			return res.end(`Your server responded with ${body.name}`)
		})
	}
	if (req.method === "GET") {
		res.end(`Hello world from nodejs server.`)
	}
})

app.server.listen(app.port, () =>
	console.log("Server listening on port " + app.port)
)
