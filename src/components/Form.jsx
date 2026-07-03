export default function Form({ weight, setWeight, height, setHeight, age, setAge, sex, setSex, activitylevel, setActivitylevel, fitnessgoal, setFitnessgoal }) {
    return (<>
        <form action="" className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 p-1 md:p-5 ">
            <div className="flex flex-col">

                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mt-4">Enter your weight:</label>
                <input type="number" name="weight" id="weight" placeholder="eg. 70" value={weight} min={1} onChange={(e) => setWeight(e.target.value)} className="mt-1 block w-full md:w-60 p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                {weight && <p className="mt-2 text-sm text-gray-500">You entered: {weight} kg</p>}
                <label htmlFor="height" className="block text-sm font-medium text-gray-700 mt-4">Enter your height:</label>
                <input type="number" name="height" id="height" placeholder="eg. 170" value={height} min={1} onChange={(e) => setHeight(e.target.value)} className="mt-1 block w-full md:w-60 p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                {height && <p className="mt-2 text-sm text-gray-500">You entered: {height} cm</p>}
                {/* <h3>BMI:</h3> */}
                {/* {weight && height && <p> {weight} / ({height} / 100)² = {(weight / Math.pow(height / 100, 2)).toFixed(2)} </p>} */}
            </div>
            <div className="flex flex-col">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mt-4">Enter your age:</label>
                <input type="number" name="age" id="age" placeholder="eg. 25" value={age} min={0} onChange={(e) => setAge(e.target.value)} className="mt-1 block w-full md:w-60 p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                {age && <p className="mt-2 text-sm text-gray-500">You entered: {age} year(s)</p>}
                <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mt-4">Select your sex:</label>
                <select name="sex" id="sex" value={sex} onChange={(e) => setSex(e.target.value)} className="mt-1 block w-full md:w-60 p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                    <option value="" disabled hidden>Select gender...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {sex && <p className="mt-2 text-sm text-gray-500">You selected: {sex}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="activitylevel" className="block text-sm font-medium text-gray-700 mt-4">Select your activity level:</label>
                <select name="activitylevel" id="activitylevel" value={activitylevel} onChange={(e) => setActivitylevel(e.target.value)} className="mt-1 block w-full md:w-60 p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                    <option value="" disabled hidden>Select activitylevel...</option>
                    <option value="Sedentary">Sedentary</option>
                    <option value="Light">Light</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Active">Active</option>
                    <option value="Very Active">Very Active</option>
                </select>
                {activitylevel && <p className="mt-2 text-sm text-gray-500">You selected: {activitylevel}</p>}
                <label htmlFor="fitnessgoal" className="block text-sm font-medium text-gray-700 mt-4">Select your fitness goal:</label>
                <select name="fitnessgoal" id="fitnessgoal" value={fitnessgoal} onChange={(e) => setFitnessgoal(e.target.value)} className="mt-1 block w-full md:w-60 p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                    <option value="" disabled hidden>Select fitnessgoal...</option>
                    <option value="Lose weight">Lose weight</option>
                    <option value="Maintain weight">Maintain weight</option>
                    <option value="Gain weight">Gain weight</option>
                </select>
                {fitnessgoal && <p className="mt-2 text-sm text-gray-500">You selected: {fitnessgoal}</p>}
            </div>
        </form>
    </>
    )
}