This project sets up a Node server and uses Postman to check whether the server is receiving messages.

To start the server type "node server.js" in the terminal. The server runs on port 3000.

Launch Postman. Under GET type the URL "localhost:3000". When you hit Send it should display a small message in the body. Change GET to POST and update the URL with "localhost:3000/send". In Body change the data-type to Raw and choose "JSON (application/json)" from the drop-down menu. Type a small message, e.g. "test" : "hello", and hit Send.

Postman confirms that the message has been sent (with a status 200) and Node will then display the message on the terminal. If the server is not running, Postman will throw an error message saying it can't find the server.
