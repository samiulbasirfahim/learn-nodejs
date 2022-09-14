import http from "http"
import url from "url"

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true)
	const urlInfo = {
		query: parsedUrl.query,
		pathname: parsedUrl.pathname,
		host: parsedUrl.host,
		port: parsedUrl.port,
	}
	console.log(urlInfo)
	res.end("Request sent successfully")
})
server.listen(3001)
