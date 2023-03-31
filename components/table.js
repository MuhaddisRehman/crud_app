import {BiEdit, BiTrash, BiTrashAlt} from 'react-icons/bi'
import Image from "next/image"
import {getEmployees} from '../lib/helper'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'

const Table = () => {
    const state = useSelector((state)=>state)
    console.log("🚀 ~ file: table.js:8 ~ Table ~ state:", state)
    const {isLoading, error, data}= useQuery('employee', getEmployees)
    console.log("🚀 ~ file: table.js:8 ~ Table ~ data:",data)
    if(isLoading)return <div>Employee Loading...</div>;
    if(error)return <div>Got  {error} while loading Employees.</div>;
  
    return (
        <table className="min-w-full table-auto">
            <thead>
                    <tr className="bg-gray-800">
                        <th className="px-16 py-2">
                            <span className="text-gray-200">
                                Name
                            </span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">
                                Email
                            </span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">
                                Salary
                            </span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">
                                Birthday
                            </span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">
                                Status
                            </span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">
                                Actions
                            </span>
                        </th>

                    </tr>
            </thead>
            <tbody className="bg-gray-200">
                {data && data?.employees.map((obj, i) => {
                    return <TableRow {...obj} key={i} />;
                })}
                </tbody>
                        </table>
                    )
                }
const TableRow = ({id, name, avatar, email, salary, date, status})=>{
    const birthDate = new Date(date)
    return <tr className="bg-gray-50 text-center">
    <td className="px-16 py-2 flex flex-row items-center">
        <Image
            src={avatar||"#"}
            className="rounded-full object-cover"
            alt="Avatar"
            width={"25"}
            height={"25"}
        />
        
        <span className="text-center ml-2 font-semibold">
           {name}
        </span>
    </td>
    <td className="px-16 py-2">
        <span>
            {email}
        </span>
    </td>
    <td className="px-16 py-2">
        <span>
            {salary}
        </span>
    </td> 
    <td className="px-16 py-2">
        <span>
            {birthDate.toDateString()}
        </span>
    </td>
    <td className="px-16 py-2">
            <button className="cursor">
                <span className={`${status=="Active"?"bg-green-500":"bg-red-500"} text-white rounded-full px-5 py-1`}>
                    {status}
                </span>
            </button>
    </td>
    <td className="px-16 py-2 flex justify-around items-center gap-5">
            <button className="cursor">
                <BiEdit size={25} color={"rgb(34, 197, 94)"}/>
            </button>
            <button className="cursor"><BiTrash size={25} color={"rgb(244, 63, 94)"}/></button>
    </td>

</tr>

}
export default Table