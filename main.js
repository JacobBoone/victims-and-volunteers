// // VICTIMS

var victimsMessage = prompt("How many victims do you wish to enter?")
		var nameArray = []
		var phoneArray = []
		var streetArray = []

	
	for (var i = 0; i < victimsMessage; i++) {
			nameArray.push(prompt("Enter Name"))
			phoneArray.push(prompt("Enter Phone Number"))
			streetArray.push(prompt("Enter Street Address"))
}

		

// // Volunteers  ----------------------


var volMessage = prompt("How many volunteers do you wish to enter?")
		var nameVolArray = []
		var phoneVolArray = []
		var streetVolArray = []

	
	for (var i = 0; i < volMessage; i++) {
			nameVolArray.push(prompt("Enter Name"))
			phoneVolArray.push(prompt("Enter Phone Number"))
			streetVolArray.push(prompt("Enter Street Address"))
}


	alert("Number of victims are " + victimsMessage + ". " +"Number of volunteers are " + volMessage + ". " + "Victim 1 info is " + nameArray[0] + "," + phoneArray[0] + "," + streetArray[0] + ".")



	//  Bonus 1



	

var enterAgain = true

while (enterAgain) {
		var nameVolArray = []
		var phoneVolArray = []
		var streetVolArray = []


			nameVolArray.push(prompt("Enter Name"))
			phoneVolArray.push(prompt("Enter Phone Number"))
			streetVolArray.push(prompt("Enter Street Address"))

			enterAgain = confirm("Would you like to enter another Volunteer?")
			console.log(nameVolArray)
			console.log(phoneVolArray)
			console.log(streetVolArray)

}






























