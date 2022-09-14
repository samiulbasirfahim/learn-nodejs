try {
  const name = "fahim"
  
  const serverError = new Error("There is a server side error");
  throw serverError;
} catch (error) {
  errorHandler(error)
}


function errorHandler ({name, message, stack}){
  console.log(name)
  console.log(message)
  // console.log(stack)

  

}


console.log(" \n \n \n code execute after error")
