import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view'


function About() {
  return (
    <div>
     
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
        Не только риэлтор, но и твой друг) 👋  
        </p>
        <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
        <br />Всем привет, меня зовут Валентин и я кто? Правильно, агент по недвижимости. Я конечно не 007, но при этом виртуозно решу твой жилищный вопрос будь то продажа или покупка недвижимости.
        <br />А теперь давай рассмотрим в чем и где я могу быть полезен именно тебе.

        </p>

      
      
      </div>
      
      
      <ScrollIntoView selector = "#tech">

        <div class='mx-auto p-20'>
          
           <FaChevronDown class= "animate-bounce mx-auto text-3xl text-blue-500"/> 
      
        </div>
       </ScrollIntoView>
    </div>
  )
}

export default About

