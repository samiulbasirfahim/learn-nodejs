/* first argument */
module.exports.firstFuncion = () => console.log("firstFuncion")

/* second argument */
const secondFuncion = () => console.log("secondFuncion")
module.exports.secondFuncion = secondFuncion

/* third argument */
const thirdFuncion = () => console.log("thirdFuncion")
module.exports = {
	thirdFuncion,
	secondFuncion,
}

/* fourth argument */
module.exports = thirdFuncion
