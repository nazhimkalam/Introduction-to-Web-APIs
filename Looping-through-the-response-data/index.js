let request = new XMLHttpRequest(); // creating XMLHttpRequest object

// the below url returns a json data of your github account
request.open('GET', 'https://api.github.com/users'); // "type of request" which is "GET" and the URL to get the API from.

request.onload = () => {
	let response = request.response; // returns the response string from the server
	let parsedData = JSON.parse(response); // since it is a string we have to convert it into JSON format
	console.log(parsedData);

    parsedData.forEach(element => {
        let dataToHtml = document.createElement('div');
		dataToHtml.innerHTML = element.id + '.) Username of your github account: ' + element.login + "<br/><br/>";
		document.body.appendChild(dataToHtml);
    });
};

// this onerror runs when the code returns or crashes into a problem
request.onerror = () => {
	console.log("There seems to be a problem")
}

request.send(); // sending the request
