import {useReducer} from 'react'
 
const Form = (e) => {
    const formReducer = (state, event)=>{
        return {   
            ...state,
            [event.target.name]:event.target.value,
 
        }
}
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)           
    }
    const [formData, setFormData] = useReducer(formReducer, {})
    return (
        <form action="" className="grid lg:grid-cols-2 w-4/6 gap-4"onSubmit={handleSubmit}>
            <div className="input-type">
                <input className="border w-full px-5 py-3 focus:outline-none rounded-md"onChange={setFormData}type="text" name="firstname" id="firstname" placeholder="FirstName" />
            </div>
            <div className="input-type">
                <input className="border w-full px-5 py-3 focus:outline-none rounded-md"onChange={setFormData}type="text" name="lastname" id="lastname" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input className="border w-full px-5 py-3 focus:outline-none rounded-md"onChange={setFormData}type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input-type">
                <input className="border w-full px-5 py-3 focus:outline-none rounded-md"onChange={setFormData}type="text" name="salary" id="salary" placeholder="salary" />
            </div>
            <div className="input-type">
                <input className="border  px-5 py-3 focus:outline-none rounded-md"onChange={setFormData}type="date" name="date" id="date" placeholder="Date" />
            </div>
            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input 
                        className="form-check-input appearrance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline:none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                        type="radio" 
                        name="status" 
                        value={"Active"}
                        id="radioDefault1" 
                        onChange={setFormData}
                        defaultChecked/>
                    <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input appearrance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline:none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                        type="radio" 
                        name="status" 
                        value={"Inactive"}
                        onChange={setFormData}
                        id="radioDefault2" />
                    <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
 
            </div>
                <button 
                    className="flex justify-center text-md text-white w-2/6 bg-green-500 px-4 py-2 rounded-md border hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
                 
                    >
                    Add
                </button>
        </form>
    )
}
 
export default Form