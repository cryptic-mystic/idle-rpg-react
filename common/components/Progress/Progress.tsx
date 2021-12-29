import React from 'react'

import style from './Progress.module.css'

const FULL_PERCENTAGE = 100
const Progress = ({
  percentage,
  bgClassName = 'bg-gray-300',
  innerClassName = 'bg-gray-700',
}: {
  percentage: number
  bgClassName?: string
  innerClassName?: string
}) => {
  const transformPercentage = FULL_PERCENTAGE - percentage
  return (
    <div className={`${style.loadingBar} w-full rounded-md ${bgClassName}`}>
      <div
        className={`${style.loadingBarInner} transform-gpu rounded-md ${innerClassName}`}
        style={{ transform: `translateX(-${transformPercentage}%)` }}
      ></div>
    </div>
  )
}

export default Progress