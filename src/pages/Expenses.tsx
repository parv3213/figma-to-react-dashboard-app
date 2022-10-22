import React, { useEffect, useState } from 'react'

import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts'

import person1 from '../assets/png/person1.png'
import person2 from '../assets/png/person2.png'
import person3 from '../assets/png/person3.png'
import addIcon from '../assets/png/addIcon.png'
import menuIcon from '../assets/png/menuIcon.png'
import boxes from '../assets/png/boxes.png'
import plant from '../assets/png/plant.png'

import { data, previousExpenses, spendCategories, todayExpenses } from '../constants'

const ExpenseDate = ({ date }: { date: string }) => {
  return (
    <div className="mb-4">
      <div className="w-[100%] flex justify-between items-center">
        <p className="text-[18px] leading-[30px]">{date}</p>
        <img src={menuIcon} alt="menuIcon" className="w-[25px] h-[5px]" />
      </div>
      <div
        className="w-[100%] mt-4"
        style={{
          border: '0.5px solid #DEDEDE',
        }}
      />
    </div>
  )
}

const ExpenseCard = ({
  key,
  name,
  date,
  content,
  price,
  icon,
  background,
}: {
  key: number
  name: string
  date: string
  content: string
  price: number
  icon: any
  background: string
}) => {
  return (
    <div key={key} className="flex justify-between items-start mb-8">
      <div className="flex">
        <div className={`w-[48px] h-[48px] rounded-full flex justify-center items-center mr-4`} style={{ background }}>
          <img src={icon} alt="icon" className="w-[16px] h-[16px] rounded-full" />
        </div>
        <div className="flex flex-col items-start justify-between">
          <p className="font-medium text-[16px] leading-[24px]">{name}</p>
          <p className="font-normal text-[14px] leading-[21px] text-[#404852]/[0.5] mix-blend-normal">
            {date} • {content}
          </p>
        </div>
      </div>
      <p className="font-semibold text-[16px] leading-[24px] text-right">- {price}</p>
    </div>
  )
}

const ExpenseItem = ({
  id,
  category,
  price,
  total,
}: {
  id: number
  category: string
  price: number
  total: number
}) => {
  return (
    <div key={id} className="mt-8 flex-col">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[13px] leading-[24px]">{category}</p>
        <p className="font-normal text-[13px] leading-[24px] text-right">{price}</p>
      </div>
      <div className="mt-2 w-full bg-[#ECEFF5] rounded-full h-[5px]">
        <div className="bg-[#31BA96] h-[5px] rounded-full" style={{ width: `${((100 * price) / total).toFixed()}%` }} />
      </div>
    </div>
  )
}

const Expenses = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let total = 0
    for (let i = 0; i < spendCategories.length; i++) {
      total += spendCategories[i].price
    }
    setTotal(total)
  }, [])

  return (
    <main className="absolute top-0 right-0 bottom-0 w-[75vw] bg-[#101010] flex justify-center items-center">
      <div className="flex justify-between bg-white rounded-[30px] h-[95%] w-[95%]">
        {/* Expenses */}
        <div className="flex-1 p-[5rem] w-[65%]">
          {/* Title & profiles */}
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-[40px] leading-[50px] mb-4">Expenses</h1>

            <div className="flex flex-row">
              <img
                src={person1}
                alt="person1"
                className="w-[31.4px] h-[31.4px] rounded-full relative z-[2] -right-[20%]"
              />
              <img
                src={person2}
                alt="person2"
                className="w-[31.4px] h-[31.4px] rounded-full relative z-[1] -right-[10%]"
              />
              <img src={person3} alt="person3" className="w-[31.4px] h-[31.4px] rounded-full relative z-[0] mr-4" />
              <img src={addIcon} alt="addIcon" className="w-[31.4px] h-[31.4px] rounded-full cursor-pointer" />
            </div>
          </div>

          <p className="font-normal text-[16px] leading-[24px] text-[#404852]/[0.5]">01 - 25 March, 2020</p>

          {/* Table */}
          <ResponsiveContainer width="100%" height="9%" className="my-[4rem]">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="rgba(21, 122, 255, .2)" onMouseOver={(data, index) => setActiveIndex(index)}>
                {data.map((entry, index) => (
                  <Cell
                    cursor="pointer"
                    fill={index === activeIndex ? 'rgb(21, 122, 255)' : 'rgba(21, 122, 255, .2)'}
                    key={index}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Today */}
          <ExpenseDate date="Today" />
          {todayExpenses.map((todayExpense) => {
            return (
              <ExpenseCard
                key={todayExpense.id}
                name={todayExpense.expense}
                date={todayExpense.time}
                content={todayExpense.location}
                price={todayExpense.price}
                icon={todayExpense.icon}
                background={todayExpense.iconBackgroundColor}
              />
            )
          })}

          {/* Previous Date */}
          <ExpenseDate date="Monday, 23 March 2020" />
          {previousExpenses.map((previousExpenses) => {
            return (
              <ExpenseCard
                key={previousExpenses.id}
                name={previousExpenses.expense}
                date={previousExpenses.time}
                content={previousExpenses.location}
                price={previousExpenses.price}
                icon={previousExpenses.icon}
                background={previousExpenses.iconBackgroundColor}
              />
            )
          })}
        </div>

        {/* Money- Right side */}
        <div className="h-[100%] p-[5rem] bg-[#F9FAFC]">
          <div className="h-[100%] flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="font-medium text-[20px] leading-[30px] ">Where your money go?</p>
              <div>
                {spendCategories.map((spendCategory) => {
                  return (
                    <ExpenseItem
                      id={spendCategory.id}
                      category={spendCategory.category}
                      price={spendCategory.price}
                      total={total}
                    />
                  )
                })}
              </div>
            </div>

            <div className="bg-[#EDF0F6] justify-center items-center pt-[6rem] pb-6 px-8 rounded-[15px]">
              <div className="relative">
                <img src={boxes} alt="box" className="absolute top-[-115px] left-0" />
                <img src={plant} alt="plant" className="absolute top-[-130px] -right-[28]" />
                <p className="font-semibold text-[16px] leading-[24px]">Save more money</p>
                <p className="font-normal text-[12px] leading-[21px] text-[#404852]/[0.5] mix-blend-normal my-4">
                  eiusmod tempor incididunt ut <br className="md:block hidden" /> labore et dolore magna aliqua.
                  <br className="md:block hidden" /> Ut enim ad minim.
                </p>
                <button className="font-semibold text-[13px] leading-[19.5px] w-[100%] bg-[#101010] h-[3rem] rounded-[8px] text-white">
                  VIEW TIPS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Expenses
