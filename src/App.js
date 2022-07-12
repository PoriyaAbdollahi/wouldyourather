import { useEffect, useState } from "react";
import CardHolder from "./components/CardHolder";
import Footer from "./components/Footer";
import Header from "./components/Header";
import loadingPATH from './animation/loading.json';
import Lottie from 'react-lottie';
function App() {

  const [questions, setQuestions] = useState([])

  const chatAnimationConfig = {
    loop: true,
    autoplay: true,
    animationData: loadingPATH,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  
  useEffect(() => {
    fetchQuestions()
  }, []);

  const fetchQuestions = async() => {
    const response = await fetch("https://wyrback.vercel.app") 
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
            </div> : <Lottie
              height="200px"
              width="200px"
              options={chatAnimationConfig}
            />  
        }
        <Footer/>
      </div>
    </div>
  );
}

export default App;
