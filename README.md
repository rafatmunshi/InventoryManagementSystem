***** Development******


MVP(Minimal Viable Product) Features

Action:

1. Inventory view for all users : one API for CRUD operation on inventory (IAM).
2. To manage the role API(IAM) : role management (authenticate (username and password(hash value check)) + claims)

Microservices does not have centralised database.

Initialise and Configure Our Project

1.  To initialise run the command in project folder 
        npm init

Install express and other dependencies

2.  Express is top framework of nodejs. Install using below command
        npm install express --save

3.  Body Parser is Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
        npm install body-parser --save

4.  Mongoose is the Object Document Mapper (ODM) for Node.js and it is written on the top of the Node.js native MongoDB driver.
        npm install mysql --save

5.  Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Use -dev flag to save in devDependencies and --save will save the dependencies in package.json file.
        npm install --save-dev nodemon

The "use strict" Directive

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.

