# Un semplice todo CRUD app

Questo essercizio può essere trovato su Github (https://github.com/patt39/todo/tree/main/client).

## Available Scripts and description

L'esercizio è stato fatto con node.js usando il framework Express sul lato back-end e React/Redux

Sul lato front-end. Ho creato due cartelle SERVER E CLIENT nelle qualle ho installato le dipendenze per il back e front end rispetivamente.

Per iniziare il progetto, si può utilisare sia ``` yarn ``` o ``` npm install ```

Le dipendenze installati sul back-end sono  ``` nodemon ```, ``` body-parser```, ``` cors```,  ``` sequelize```,  ``` sequelize-cli```, e ``` mysql2``` che uso per la compilazione, le requeste, la relazione con il front-end con le REST Apis, la geszione delle imports, la geszione della database & le migrazione e la database rispettivamente.

Invece sul lato front-end,  ``` react-router-dom```, ``` react-hook-form```, ``` immer```, ``` react-redux``` e ``` reactsrap``` che uso per la geszione delle redirezione, i trattamenti, la geszione delle drafts su redux, l'utiliso di redux, e lo bootstrapping rispettivamente.


## Alcuni commandi importanti
Per l'installazione di sequelize ``` npm install --save-dev sequelize-cli ```, ``` npx sequelize-cli init ``` per lo bootstrapping.

Per la creazione di un model  ``` npx sequelize-cli model:generate --name namemodel --attributes nametable1:string,nametable2:string ``` **[ Change namtable1 and nametable2 ]** 

Per la migrazione delle tabelle  ```npx sequelize-cli db:migrate```


## Configuration base de données

``` mysql -uroot -p``` inserire password ``` CREATE DATABASE ivemo;```

## Security Vulnerabilities

If you discover a security vulnerability within please send an e-mail to [dasgivemoi@gmail.com](mailto:dasgivemoi@gmail.com). All security vulnerabilities will be promptly addressed.