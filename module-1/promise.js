/* Promise javascript */

const data = new Promise((resolve, reject) => {
	const isErr = ""
	if (!isErr) {
		setTimeout(() => {
			return resolve("Success")
		}, [500])
	} else if (isErr) {
		setTimeout(() => {
			return reject("Something wrong")
		}, [500])
	}
})

const numberCheck = (num) => {
	return new Promise((resolve, reject) => {
		resolve("Number , no error " + num)
	})
}

const param = [1, 2, 3, 4, 5, 6]
let response = []
 

param.forEach(() => {
	response.push(data)
})

let responseOfNumberCheker = []

for (let i = 0; i < 100; i++) {
	responseOfNumberCheker.push(numberCheck(i))
}  

Promise.all(response).then((res) => console.log(res))
Promise.all(responseOfNumberCheker)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))

const asyncPromise = new Promise((resolve, reject) => {
	resolve("success")
})


const asyncFuncForPromise = async () => {
	const response = await asyncPromise
	console.log(response)
}

asyncFuncForPromise()
