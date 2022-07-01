import { useEffect, useState } from "react";
import Card from "./components/Card";
import Circle from "./components/Circle";
import Header from "./components/Header";

import { numberToPrecentage }  from './miscellaneous/util'
// import { useSpring, animated } from 'react-spring'
function App() {
  
  const [counter , setConuter] = useState(0)
  const [questions , setQuestions] = useState([])
  
  useEffect(() => {
    fetchQuestions()
   
  }, []);

  const fetchQuestions = async() => {
    const response = await fetch("http://localhost:3000/questions") 
    const data = await response.json()
    console.log(data)
    setQuestions(data)
    
  }

  // const fetchQuestions =  () => {
  // axios()
  // }

  const [displayPercentage, setdisplayPercentage] = useState(false)
  
  return (
    <div className="w-screen h-screen  flex justify-center    " >
      <div className="max-w-lg w-full md:max-w-3xl">
        <Header />
        {
          questions.length>0 ?
            <div className="px-7  display flex w-full md:flex-row flex-col items-center">
              <Card
                color="green"
                option={questions[counter].option1}
                precentage={numberToPrecentage(questions[counter].vote1, questions[counter].vote2)[0]}
                displayPercentage={displayPercentage}
                setdisplayPercentage={setdisplayPercentage}
              />
              <Circle />
              <Card
                color="red"
                option={questions[counter].option2}
                precentage={numberToPrecentage(questions[counter].vote1, questions[counter].vote2)[1]}
                displayPercentage={displayPercentage}
                setdisplayPercentage={setdisplayPercentage}
              />
            </div>:""
        
        }
       

      </div>
    </div>
  );
}

export default App;
