import {useReducer} from 'react'
import {BiBrush, BiPlus} from 'react-icons/bi'
import Success from './success'
import Bug from './Bug'
const UpdateUserForm = (e) => {
    const formReducer = (state, event)=>{
        return {   
            ...state,
            [event.target.name]:event.target.value,

        }
}
    const handleSubmit = (e)=>{

        e.preventDefault();
        if(Object.keys(formData).length === 0){
            console.log("Don't have form data.")
        }else{
            console.log(formData)           
        }
    }
    const [formData, setFormData] = useReducer(formReducer, {})
    if(Object.keys(formData).length>0) return (<Success message="Added Success"></Success>)
    else return (
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
                    className="flex justify-center text-md text-white w-2/6 bg-yellow-500 px-4 py-2 rounded-md border hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500"
                
                    >
                    Update <span className='px-1'><BiBrush size={25}/></span>
                </button>
        </form>
    )
}
 
export default UpdateUserForm