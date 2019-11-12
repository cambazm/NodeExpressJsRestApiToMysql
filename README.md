This is a sample Express-Node.js project designed to track [IBM Transformation Extender](https://www.ibm.com/ae-en/marketplace/data-transformation-software) map usage contains REST APIs to push data to (POST to /data), get all data (GET /data) and get report data (GET /report) from mysql database. Loosely based on [the code here](https://www.codementor.io/julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2).

[Scripts](https://github.com/cambazm/NodeExpressJsRestApiToMysql/blob/master/db.sql) to execute on MySQL. Inserts are sample data to get sample report data. [Modify database info file](https://github.com/cambazm/NodeExpressJsRestApiToMysql/blob/master/db.js)

At Mac you can install node.js with:  brew install node

Install dependencies: npm install

npm install -g npm

npm install express

npm install mysql

Start the application for local testing: node server.js

You can test via opening http://localhost:3000/data and http://localhost:3000/report You can stop the node.js server via ctrl+z. Sometimes 3000 port keeps blocked, you can release it via command: kill -9 $(lsof -t -i:3000)
