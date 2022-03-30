import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import { DivMountains, DivStars } from "./components/componentStyle/styles";

function App() { //// Definimos los valores por defecto por medio de useState
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef();
  
  const startTimer = () => {
    const finalDate = new Date('April 28,2022 00:00:00').getTime();
    
    interval.current = setInterval(() => {
      
      const currentDay = new Date().getTime();

      const distance = finalDate - currentDay;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        
      const minutes = Math.floor((distance % (1000 *60 * 60 )) / (1000 * 60));
      
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      
      if (distance < 0) {
        ///Detener el contador
        clearInterval(interval.current);
      } else {
        //Update el contador
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  
  useEffect(() => {
    startTimer();
    return () =>{
      clearInterval(interval.current); 
    };
  });  

  return (
    <DivStars>

      <DivMountains>
      <Countdown
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      </DivMountains>
    </DivStars>
  );
  
}

export default App

