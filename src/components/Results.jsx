export default function Results({ BMI, age, category, BMR, TDEE, calories, macros }) {
    return (
        <>
            <div className="grid grid-cols-4 mx-4 gap-4 py-5">
                <div className="flex flex-col">
                    {BMI && <p className="text-3xl flex">BMI: <b className="ml-auto">{BMI}</b></p>}
                    {category && <p className="text-3xl flex">Category: <b className="ml-auto">{category}</b></p>}
                    {age && <p className="text-3xl flex">Age: <b className="ml-auto">{age}</b></p>}
                    {BMR && <p className="text-3xl flex">BMR: <b className="ml-auto">{BMR}</b></p>}
                    {TDEE && <p className="text-3xl flex">TDEE: <b className="ml-auto">{TDEE}</b></p>}
                </div>
                <div className="flex flex-col"></div>
                <div className="flex flex-col">
                    {calories && <p className="text-3xl flex">Calories: <b className="ml-auto">{calories}</b></p>}
                    {calories && <p className="text-3xl flex">Protein: <b className="ml-auto">{macros.protein}</b></p>}
                    {calories && <p className="text-3xl flex">Carbs: <b className="ml-auto">{macros.carbs}</b></p>}
                    {calories && <p className="text-3xl flex">Fats: <b className="ml-auto">{macros.fats}</b></p>}
                </div>
            </div>
        </>
    )

}