import React from 'react'
import { generateRandomInteger, numberToPrecentage } from '../miscellaneous/util'
import Perc from './Perc'



const Cards = ({ currentCards, setCurrentCards, questions, displayPercentage, setdisplayPercentage, setConuter, counter,  left}) => {

  const onCardClickHandler = () => {

    if (displayPercentage) {

      setCurrentCards([...currentCards, {
        option1: questions[counter + 1].option1,
        option2: questions[counter + 1].option2,
        vote1: questions[counter + 1].vote1,
        vote2: questions[counter + 1].vote2,
        deg1: generateRandomInteger(15),
        deg2: generateRandomInteger(15)
      }])
      setConuter(counter + 1)
    }
    setdisplayPercentage(!displayPercentage)

  }



  return (
    <div className={` w-52 h-48 m-auto rounded-md afsaneh  justify-center  md:w-64 md:h-56 text-white  px-7  display flex  md:flex-row flex-col items-center cursor-pointer `} onClick={() => onCardClickHandler()}>
      {currentCards.map((item) => (
        <div
          key={left ? item.option1 : item.option2}
          style={{
            backgroundColor: left ? "#53BF9D" : "#F94C66",
            transform: `rotate(${left ? item.deg1 : item.deg2}deg) `
          }}
          className={"w-52 h-48 rounded-md flex flex-col justify-center items-center absolute drop-shadow-lg shadow-md md:text-3xl  "} >
          <h2 dir='rtl' className='p-4 text-center '>{left?item.option1:item.option2}</h2>
          <div title='درصد افرادی که رای دادند' className='text-2xl'>
            {displayPercentage ?
              <Perc
                perc={left ? numberToPrecentage(currentCards[currentCards.length - 1].vote1, currentCards[currentCards.length - 1].vote2)[0] : numberToPrecentage(currentCards[currentCards.length - 1].vote1, currentCards[currentCards.length - 1].vote2)[1] }
              />
              : ""}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards