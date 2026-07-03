'use client'

import { PieChart,Pie, ResponsiveContainer, Legend, Tooltip } from "recharts"

export default function MacroChart({macros}){
    const data = [
        {name: "Protein (30%)", value:macros?.protein, fill: '#3B82F6'},
        {name: "Carbs (40%)", value:macros?.carbs, fill: '#10B981'},
        {name: "Fats (30%)", value:macros?.fats, fill: '#F59E0B'}
    ];
    const hasData = (macros?.protein + macros?.carbs + macros?.fats)>0;
    if (!hasData) {
        // return
        return <p>Enter details to see macro breakdown chart.</p>
    }
    return(
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie 
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    >
                    </Pie>
                    <Tooltip formatter={(value) => `${value}g`} />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}