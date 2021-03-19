#Setup instructions
-- Introduce a merge conflict
- Setup the DB tables and test data
- - Run the dbsetup script `./db/db_setup.sql
- - See line 4 in the `./api/routes/testdata.js` route file and update the path to your credential files. 
DB credentials JSON file should include:
```
{
    "host": "localhost",
    "user": "<Your MySql username>",
    "password": "<Your MySql password>",
    "database": "full_stack_db"
}
```

- Setup the api
- - From the repo directory `cd api`
- - Run `npm install`

- Setup the React client app
- - From the repo directory `cd client`
- - Run `npm install`

- Starting the api server
- - From the repo directory `cd api`
- - Run `npm start`


- Starting the React client app
- - From the repo directory `cd client`
- - Run `npm start`
