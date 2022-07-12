import React from 'react'
import BuyMeCoffe from './BuyMeCoffe'
import Profile from './Profile'
import azarakhsh from "./../images/azarakhsh.jpg"
import poriyaabdollahi from "./../images/poriyaabdollahi.png"
const Footer = () => {
  return (
      <footer className="relative h-1/6  mx-10 md:h-1/2">
          <div style={{ bottom: "0", display: "block" }} className='absolute w-full  bg-Ayellow  p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
              <div className='flex w-full justify-between items-center flex-col md:flex-row md:items-stretch'>
                  <div className='flex '>
                      <Profile href="https://poriyaabdollahi.ir/" img={poriyaabdollahi} alt="وبسایت پوریا عبدالهی" />
                      <Profile href="https://azarakhshteam.ir/" img={azarakhsh} alt="وبسایت تیم آذرخش" />
                  </div> 
                  <BuyMeCoffe />

           </div>
              
          </div>
      </footer>
  )
}

export default Footer