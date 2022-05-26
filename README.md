### SQL Pro

A dummy SQL  web application with following the features and USPs :
* User can select pre-written queries from a drop-down (having 6 options).
* User can easily write custom queries (using text field) after selecting custom query option from the drop-down.
* Query results are represented in a user-friendly & tabular way.
* Query results can be quickly downloaded in a single click.
* Web app is compatible with almost all screen sizes and thus proper responsive.
* All the queries will be applied to customer data - <a href="https://github.com/graphql-compose/graphql-compose-examples/blob/master/examples/northwind/data/csv/customers.csv">Link to data</a>
* All results are randomly generated (queries are not implemented in their real sense).
* To improve the application's load time, I have divided the whole application into various components, and due to this being able to efficiently render good chunks of data.

Application has been deployed to netlify - <a href="https://sql-pro.netlify.app/">Link</a>

### Dependencies

* JavaScript framework ReactJS is used.
* material-ui/core and material-ui/styles are used for stylings.

### Local Setup
```
cd sql-pro
npm install
npm start
```
Application will start on localhost:3000/
