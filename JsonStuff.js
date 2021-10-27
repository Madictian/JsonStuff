let betterJSON =
	'{ "motherfuckers" : [' + 
	'{ "Fname": "Lukas", "Lname": "adler" },' +
	'{ "Fname": "lukae","Lname": "adler" },' +
	'{ "Fname": "andreas","Lname": "adler" },' +
	'{ "Fname": "mikkel","Lname": "adler" } ]}'

	  let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

let bestJSON = JSON.parse(text)


const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
	let thisone = JSON.parse(this.response)
	document.getElementById("tekst").innerHTML = thisone.motherfuckers[0].Fname + " " + thisone.motherfuckers[0].Lname;

}
xhttp.open('GET', "https://gist.githubusercontent.com/Madictian/3a3df6f12a51b6530f7945b49cd5429a/raw/0c88b0a09af118565af82f2dde07b306972876d8/fredrikJSON");
xhttp.send(); 