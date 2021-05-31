import "./App.scss";
import React, { useState } from "react";
import { AppRouter } from "./router/AppRouter";
import {IntlProvider} from 'react-intl';
import messages from ".//i18n//messages";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";




function App() {
  const [idioma, setIdioma] = useState("es-co")
  function idiomaa() {
    if(idioma === "es-co")
    {
      setIdioma("en-us")
    }
    else{
      setIdioma("es-co")
    }
    console.log(idiomaa)
  }

  

  
 
  return (
    <>
    <button  onClick={idiomaa}
              type="button">
                language
             </button>
    <IntlProvider locale={idioma} messages={messages[idioma]}>
       
      <main>
      
        <AppRouter />
      
      </main>
      </IntlProvider>
      
    </>
  );
}

serviceWorkerRegistration.register();

export default App;
