let request = new XMLHttpRequest(); // creating XMLHttpRequest object

// the below url returns a json data of your github account
request.open('GET', 'https://api.github.com/users/nazhimkalam'); // "type of request" which is "GET" and the URL to get the API from.

request.onload = () => {

	let response = request.response;            // returns the response string from the server
	let parsedData = JSON.parse(response);      // since it is a string we have to convert it into JSON format
	console.log(parsedData);


    // extracting the value of the key from the JSON object
	let githubUserName = parsedData.login;
	let availablePublicRepo = parsedData.public_repos;


    // adding the content into the html code
    var dataToHtmlBody = document.createElement('div');
	dataToHtmlBody.innerHTML =
		'Username of your github account: ' +
		githubUserName +
		'<br>The number of public repositories available currently = ' +
        availablePublicRepo;
        
        
	document.body.appendChild(dataToHtmlBody);
};

// this onerror runs when the code returns or crashes into a problem
request.onerror = () => {
	console.log("There seems to be a problem")
}

request.send(); // sending the request
