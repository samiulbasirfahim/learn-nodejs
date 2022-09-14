import events from "events"

const eventEmitter = new events.EventEmitter()

eventEmitter.on("click", function (data, secondData) {
	console.log(data)
	console.log(secondData)
})

console.log("first console log before click events")
setTimeout(function () {
	eventEmitter.emit(
		"click",
		"kire beta click korsi ter pas na",
		"4 ta click marsi beta"
	)
}, 3000)
