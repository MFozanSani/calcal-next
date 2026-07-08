'use server'

import {prisma} from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function saveMacroLog(formData){
    try{
        const weight = parseFloat(formData.weight)
        const height = parseFloat(formData.height)
        const age = parseInt(formData.age)
        const protein = parseFloat(formData.protein)
        const carbs = parseFloat(formData.carbs)
        const fats = parseFloat(formData.fats)

        const newLog = await prisma.macroLog.create({
            data:{
                weight,
                height,
                age,
                sex:formData.sex,
                activityLevel:formData.activityLevel,
                fitnessGoal:formData.fitnessGoal,
                protein,
                carbs,
                fats
            }
        })
        revalidatePath("/")
        return {success: true, data:newLog}
    }
    catch(error){
        console.error("Failed to save data to Postgres:", error)
        return { success: false, error: "Database insertion failed "}
    }
}