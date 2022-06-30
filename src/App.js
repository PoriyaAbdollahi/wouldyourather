import Card from "./components/Card";

function App() {
  return (
    <div className="w-screen h-screen  flex justify-center    " >
      <div className="max-w-lg w-full md:max-w-3xl">

        <div className='py-2 text-xl   my-10 mx-10 '>
           <h1 className='text-center bg-Ayellow p-5 rounded-lg md:text-2xl '>کدوم رو ترجیح میدی؟</h1>
        </div>
        
        <div className="px-7  display flex w-full md:flex-row flex-col items-center">
        <Card color="Agreen" option={"نامرعی بشه"} precentage={"25%"}/>
          <div className=" w-20 h-24 flex justify-center items-center mx-5">
            <span className="bg-Abrown w-20 h-20 rounded-full flex justify-center text-white items-center">یا</span>
          </div>
          <Card color="Aorange" option={"نامرعی بشه"} precentage={"75%"} />
        </div>

      </div>
    </div>
  );
}

export default App;
// FFEE63