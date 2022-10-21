import React from 'react'
import samantha from '../assets/png/samantha.png'

const Sidebar = () => {
  return (
    // TODO remove
    <aside className="absolute top-0 bottom-0 left-0 w-[25vh] flex flex-col justify-center items-center bg-black text-white">
      <div className="h-[100%] flex flex-col justify-around">
        {/* Profile */}
        <div className="flex flex-col">
          <div className="w-[72px] h-[72px] relative mt-8">
            <img src={samantha} alt="samantha" className="w-[72px] h-[72px] mb-4" />
            <p
              className={`absolute -top-[14px] -right-[14px] w-[29px] h-[29px] rounded-full bg-[#DC3434] flex justify-center items-center mt-2`}>
              4
            </p>
          </div>
          <span className="font-semibold text-[30px] leading-[35px] mt-4">Samantha</span>
          {/* TODO check */}
          <span className="font-normal text-[17px] leading-[27px] dim_text">samantha@email.com</span>
        </div>

        {/* Page Navigation */}
        <nav className="flex flex-col font-semibold text-[25px] leading-[35px] -mt-[8rem] mb-[3]">
          <ul>
            <li className="mt-8 dim_text">Dashboard</li>
            <li className="mt-8">Expenses</li>
            <li className="mt-8 dim_text">Wallets</li>
            <li className="mt-8 dim_text">Summary</li>
            <li className="mt-8 dim_text">Accounts</li>
            <li className="mt-8 dim_text">Settings</li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
