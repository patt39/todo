import React from "react";
import {Route, Switch} from 'react-router-dom';
import CreatEditTodo from "../components/CreatEditTodo";
import TodoIndex from "../components/TodoIndex";


const RouteUser = () => (

    <Switch>
          <Route exact path="/" component={TodoIndex}/>
          <Route exact path="/todo/new" component={CreatEditTodo}/>
          <Route exact path="/todo/:todo/edit" component={CreatEditTodo}/>
    </Switch>

);
export default RouteUser;
