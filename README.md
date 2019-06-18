## Simple Messenger Bot in Nodejs

This project uses mongodb to persist the all the messsages.
To run this project, you must have mongodb running locally, then add your local mongodb url<br>
in the `constants.js` file under the variable name `DBURL`. The app runs on port `5000`

Clone the project using npm
```
 git clone https://github.com/lexyblazy/messanger-bot
 cd messanger-bot
 npm install && npm start

```

Use the following routes to retrieve messages
```
  localhost:5000/messages - retrieves all the messages in the database.
  localhost:5000/messages/:id - retrieves a single message which corresponds to the `id` parameter
```

