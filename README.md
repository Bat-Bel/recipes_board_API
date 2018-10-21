# Recipes Project
**Get Repo**
```
$ git clone git@github.com:Bat-Bel/recipes_board_API.git
$ cd recipes_board_API
```

**DB name**

should be:
```
recipes_db
```

# installations

**Node version**
```
$ node -v
v10.8.0
```

Recomendation, Node Version Manager:
```
https://github.com/creationix/nvm
```

once installed: 
```
$ nvm install 10.8.0
```

**Postgresql:**

Recomendation, Postgress App :
```
https://postgresapp.com/
```

otherwise:
```
https://www.postgresql.org/
```

**Knex:**
```
$ npm i knex -g
```

**Install dependencies**
```
$ npm install
```

**Nodemon**
```
$ npm install nodemon -g
```

# Run project
**once DB created**

run knex migrations
```
$ knex migrate:latest
```

run knex seeds
```
$ knex seed:run
```

run project with nodemon
```
$ nodemon
```

or run project with npm
```
$ npm start
```
