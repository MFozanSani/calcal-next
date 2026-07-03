export default function Form({weight,setWeight,height,setHeight}){
return(<>
    <form action="">
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mt-4">Enter your weight:</label>
        <input type="number" name="weight" id="weight" value={weight} min={1} onChange={(e) => setWeight(e.target.value)} className="mt-1 block w-60 p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        {weight && <p className="mt-2 text-sm text-gray-500">You entered: {weight} kg</p>}
        <label htmlFor="height" className="block text-sm font-medium text-gray-700 mt-4">Enter your height:</label>
        <input type="number" name="height" id="height" value={height} min={1} onChange={(e) =>setHeight(e.target.value)} className="mt-1 block w-60 p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        {height && <p className="mt-2 text-sm text-gray-500">You entered: {height} cm</p>}
        {/* <h3>BMI:</h3> */}
        {/* {weight && height && <p> {weight} / ({height} / 100)² = {(weight / Math.pow(height / 100, 2)).toFixed(2)} </p>} */}
    </form>
    </>
    )
}