'use client'
import { useState } from 'react'
import Form from '@/components/Form'
import Results from '@/components/Results'
import calculateBMI from '@/utils/fitnessMath'
export default function Home() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const BMI = calculateBMI(weight,height)
  return (
    <div className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-bold">Welcome to Calcal</h1>
      <p className="text-lg">Your all-in-one calculator for everyday needs.</p>
      <Form weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} />
      {/* <p>{BMI}</p> */}
      <Results BMI={BMI} />
    </div>
  );
}
