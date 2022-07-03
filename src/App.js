import { useEffect, useState } from "react";
import CardHolder from "./components/CardHolder";
import Header from "./components/Header";


function App() {

  const [questions, setQuestions] = useState([])

  
  useEffect(() => {
    fetchQuestions()
   
  }, []);

  const fetchQuestions = async() => {
    const response = await fetch("http://localhost:3000/questions") 
    const data = await response.json()
    console.log(data)
    setQuestions(data)
    
  }
  
  return (
    <div className="w-screen h-screen  flex justify-center    " >
      <div className="max-w-lg w-full md:max-w-3xl">
        <Header />
        {
          questions.length>0 ?
            <div className="">
              <CardHolder questions={questions}/>
            </div>:""
        
        }
      </div>
    </div>
  );
}

export default App;
