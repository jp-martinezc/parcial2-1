import React, { useEffect, useState } from "react";
import "./RoomsList.scss";
import { getHomeById } from "../../services/utils";
import {Card} from "../../components/card/Card";
import {FormattedMessage} from "react-intl"
import ReactDOM from "react-dom";
import * as d3 from "d3";
import PieClass from "../../pie/PieClass";
import PieHooks from "../../pie/PieHooks";
import PieSVG from "../../pie/PieSVG";
import AnimatedPieHooks from "../../pie/AnimatedPieHooks";
import AnimatedPieSVG from "../../pie/AnimatedPieSVG";
import PieChart from "./PieChart";


export const RoomsList = ({match}) => {

  const [rooms, setRooms] = useState([]);
  console.log("hacen llamado");

  function App()
  {
    
  }
  

  useEffect(() => {
    
    if (!navigator.onLine) {
      setRooms(JSON.parse(localStorage.getItem(match.params.id)).rooms);
      
    }
    else{
      getHomeById(String(match.params.id)).then((data) => {setRooms(data.rooms ); localStorage.setItem(match.params.id, JSON.stringify(data));}
      
      
      );
      
    }
    


   
  }, [match.params.id]);

const ayuda = getHomeById(String(match.params.id));
console.log(rooms)
  const data = [{ label: 'Hola perdon pero lo intente :(', value: 10 }, { label: 'Oranges', value: 20 }];

  const outerRadius = 120;
  const innerRadius = 30;
  
  return (
    
    
    <div className="container home">
      <h1>
      <FormattedMessage id="misCuartos"/>
      </h1>
      <div>
      <PieChart data={data} outerRadius={outerRadius} innerRadius={innerRadius}> </PieChart>
      </div>
      
        <div>    
       {rooms && rooms.map((room)=> 
        
        <Card info={room}></Card>
        )
        }
        </div>  

       
       
 
      
    </div>



    
  );
};

