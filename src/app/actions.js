'use server'

import {prisma} from '@/lib/db'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'


export async function saveMacroLog(formData){

    const session = await getServerSession(authOptions)
    if(!session || !session.user.id){
        return {success:false, error: "You must be logged in to save logs."}
    }
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
                fats,

                userId: session.user.id
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

export async function registerUser(formData) {
    try{

        const {email, password, name } = formData
        if(!email || !password) return {succes:false, error:"Email and password are required"}
        const existingUser = await prisma.user.findUnique({
            where:{email: email.toLowerCase() }
        })
        if (existingUser) {
            return {succes:false, error: "User already exists."}
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await prisma.user.create({
            data:{
                email: email.toLowerCase(),
                password: hashedPassword,
                name: name || null,
            },
        })
        return {succes:true, message: "User successfuly added."};
    }catch(error){
        console.error("Registration error details", error);
        return{succes:false, error: "Critical error during registration"};
    }
}