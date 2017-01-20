const greetInUSA = greetingCreator("Hello")
greetInUSA("Franco")

function greetingCreator(greeting) {
  var greeting = greeting
  return function(name){
    return greeting + ', ' + name
  }
}

//OR

function greetingCreator(greeting) {
  return function(name){
    return greeting + ', ' + name
  }
}
