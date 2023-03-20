import type { NextApiRequest, NextApiResponse } from 'next'
import Employee from '@/model/employee'
/* CONTROLLERS */
type Data = {
    name?:      string
    method?:    string
    error?:     string | unknown
    user?:      string
    employee?:  string
    employees?:  any[]
    data?:      any
    formData?:  any
    DELETED?: string| string[]
}

// GET: https://localhost:3000/api/users
export async function getEmployees(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    try {
        const filter = req.body
        let employees;
        if(filter){
            employees = await Employee.find(filter)
        }else{
            
            employees = await Employee.find()
        }
    
        if(!employees) return res.status(404).json({error:"Data not found"})
        res.status(200).json({employees})
    } catch (error) {
        res.status(404).json({error:"Error while fetching employee"})
    }
}

// GET: https://localhost:3000/api/users/emplyeeId
export async function getEmployee(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    try {
        const {employeeId} = req.query
        let employee;
        if(employeeId){
            employee = await Employee.findById(employeeId)
        }else{
            employee = await Employee.find()
        }
    
        if(!employee) return res.status(404).json({error:"Data not found"})
        res.status(200).json({employee})
    } catch (error) {
        res.status(404).json({error:"Error while fetching employee"})
    }
}

// POST: https://localhost:3000/api/users\
export async function postEmployee(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    try {
        const formData = req.body;
        //return res.status(200).json({formData})
        
        if(!formData) {
            return res.status(404).json({error:"Form Data not provided"})
        }
        Employee.create(formData)
                .then((data)=>{
                        return res.status(200).json({data})
                })
                .catch((err)=>{
                    return res.status(404).json({error:err})
                })
    } catch (error) {
        res.status(404).json({error:"Error while posting employee"})
    }
}

// PUT: https://localhost:3000/api/users/id
export async function putEmployee(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    try {
        const {userId} = req.query;
        const formData = req.body;
        
        if (userId && formData){
            await Employee.findByIdAndUpdate(userId, formData)
            res.status(200).json(formData)
        }
        res.status(404).json({error:"User not selected"})
    } catch (error) {
        res.status(404).json({error:error})
    }
}
// DELETE: https://localhost:3000/api/users/id
export async function deleteEmployee(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    try {
        const {userId} = req.query;
        
        
        if (userId ){
            await Employee.findByIdAndDelete(userId)
            res.status(200).json({DELETED: userId})
        }
        res.status(404).json({error:"User not selected"})
    } catch (error) {
        res.status(404).json({error:error})
    }
}