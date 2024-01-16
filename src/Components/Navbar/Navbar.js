
import React from 'react'
function Navbar() {
  return (
    <div>
        <div className="navbar flex lg:flex fixed z-10 bg-black opacity-85 px-2  lg:px-[250px]">
            
            <div className="flex flex-row justify-between gap-[100vh] ">

            <a href='/' className="w-[250px] font-bold  ">
              <img
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704543228/vkahrznyuobgcnmnltq9.png"
                alt="Dotpot iT Logo"
              />
            </a>

          <a href="https://dotpotit.com/" className=" btn-outline inline-block px-4 py-2 rounded-xl border-2 border-transparent text-black font-bold bg-gradient-to-r from-slate-600 to-blue-400 transform hover:rotate-y-3 hover:rotate-x-3 flex-row items-center">
          
           <span className='block'>Visit our Website </span> 
          </a>
          
  </div>
</div>
    </div>
  )
}

export default Navbar