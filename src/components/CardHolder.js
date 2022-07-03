import React, { useState } from 'react'
import Circle from './Circle'
import Cards from './Cards'

const CardHolder = ({ questions }) => {
    const [displayPercentage, setdisplayPercentage] = useState(false)
    const [counter, setConuter] = useState(0)
    const [currentCards, setCurrentCards] = useState([{
        option1:questions[0].option1,
        option2:questions[0].option2,
        vote1: questions[0].vote1,
        vote2: questions[0].vote2,
        deg1:"0",
        deg2:"0"
    }])


  return (
      <div className='px-7  display flex w-full md:flex-row flex-col items-center'>
          <Cards
               left={true}
               currentCards = {currentCards}
               setCurrentCards = {setCurrentCards}
               questions = {questions}
               displayPercentage = {displayPercentage}
               setdisplayPercentage = {setdisplayPercentage}
               setConuter = {setConuter}
               counter = {counter}
          />
          <Circle />
          <Cards
              left={false}
              currentCards={currentCards}
              setCurrentCards={setCurrentCards}
              questions={questions}
              displayPercentage={displayPercentage}
              setdisplayPercentage={setdisplayPercentage}
              setConuter={setConuter}
              counter={counter}
          />
              
        </div>
   
  )
}

export default CardHolder