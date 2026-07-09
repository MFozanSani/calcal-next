'use client'
import { useState } from 'react'
import { saveMacroLog } from './actions'
import Form from '@/components/Form'
import Results from '@/components/Results'
import {calculateBMI, categoryBMI, calculateBMR, calculateTDEE, caloriesTarget, calculateMacros} from '@/utils/fitnessMath'
import ThemeToggle from '@/components/ThemeToggle'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
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
  const [isSaving, setIsSaving] = useState(false)
  const {data: session, status} = useSession();
  const handleSaveMacroLog = async ()=>{
    setIsSaving(true)
    const payLoad = {
      weight: weight,
      height: height,
      age: age,
      sex: sex,
      activityLevel: activitylevel,
      fitnessGoal: fitnessgoal,
      protein: macros.protein,
      carbs: macros.carbs,
      fats: macros.fats,
    }
    const result = await saveMacroLog(payLoad);
    setIsSaving(false)
    if (result.success) {
      alert("Added successfully.")
    }
    else{
      alert("Error while saving.")
    }

  }
  return (
    <div className="flex min-h-screen flex-col p-24">
      {/* <ThemeToggle /> */}
      <h1 className="text-3xl text-center md:text-left font-bold">Welcome to Calcal</h1>
      <p className="text-lg text-center md:text-left">Your all-in-one calculator for everyday needs.</p>
      <Form weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} age={age} setAge={setAge} sex={sex} setSex={setSex} activitylevel={activitylevel} setActivitylevel={setActivitylevel} fitnessgoal={fitnessgoal} setFitnessgoal={setFitnessgoal} />
      {status ==="authenticated" ?<button 
        onClick={handleSaveMacroLog}
        disabled={isSaving}
        className="mx-auto mt-6 w-full md:w-1/2 lg:w-1/4 p-3 bg-indigo-600 cursor-pointer text-white font-medium rounded-md hover:bg-indigo-700 disabled:bg-gray-400 transition"
      >
        {isSaving ? "Saving to Database..." : "Save Daily Log to History"}
      </button>
      :<Link 
        href="/register"
        className="mx-auto mt-6 w-full md:w-1/2 lg:w-1/4 text-center p-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 disabled:bg-gray-400 transition"
      >
        SignIn to save data
      </Link>}
      {/* <p>{BMI}</p> */}
      <Results BMI={BMI} age={age} category={category} BMR={BMR} TDEE={TDEE} calories={calories} macros={macros} />
    </div>
  );
}
