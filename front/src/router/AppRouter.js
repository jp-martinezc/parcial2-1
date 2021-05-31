import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomesList } from "../pages/homes-list/HomesList";
import { RoomsList } from "../pages/Rooms/RoomsList";
import { Navbar } from "../components/nav/Navbar";
import { LOCALES } from "../i18n/locales";
import messages from "../i18n/messages";
import {Card} from "../components/card/Card";
import { useHistory, useParams } from 'react-router-dom'


import {FormattedMessage} from "react-intl"





export const AppRouter = () => {
  const [language, setLanguage] = useState(LOCALES.ENGLISH);


  

  return (
   
      <Router>
        <Navbar setLanguage={setLanguage}></Navbar>
        <Switch>
          <Route exact path="/">
            <HomesList />
          </Route>
          <Route  path="/homes/:id" component={RoomsList} />
          <Route  path="/homes">
            <HomesList />
            
          </Route>
          /*
          //
          */
            
            

         
        </Switch>
      </Router>
    
  );
};
