'use client'
import { useState } from 'react'
import Form from '@/components/Form'
import Results from '@/components/Results'
import {calculateBMI, categoryBMI, calculateBMR, calculateTDEE, caloriesTarget, calculateMacros} from '@/utils/fitnessMath'
export default function Home() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')
  const [activitylevel, setActivitylevel] = useState('')
  const [fitnessgoal, setFitnessgoal] = useState('')
  const BMI = calculateBMI(weight,height)
  const BMR = calculateBMR(weight,height,age,sex)
  const TDEE = calculateTDEE(BMR, activitylevel)
  const calories = caloriesTarget(TDEE, fitnessgoal)
  const category = categoryBMI(BMI)
  const macros = calculateMacros(calories)
  return (
    <div className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl text-center md:text-left font-bold">Welcome to Calcal</h1>
      <p className="text-lg text-center md:text-left">Your all-in-one calculator for everyday needs.</p>
      <Form weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} age={age} setAge={setAge} sex={sex} setSex={setSex} activitylevel={activitylevel} setActivitylevel={setActivitylevel} fitnessgoal={fitnessgoal} setFitnessgoal={setFitnessgoal} />
      {/* <p>{BMI}</p> */}
      <Results BMI={BMI} age={age} category={category} BMR={BMR} TDEE={TDEE} calories={calories} macros={macros} />
    </div>
  );
}
