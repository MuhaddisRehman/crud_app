import Form from '../components/form'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {FiUserPlus}from 'react-icons/fi'
import Table from '../components/table'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [visible, setVisible] = useState<boolean>(false)
  const handleForm = () => {
    setVisible(!visible)
  }
  return (
    <>
      <section>
        <Head>
          <title>CRUD Application</title>
          <meta name="description" content="Generated by Muhaddis Rehman" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='p-5'>
          <h1 className="text-xl md:text-5xl text-center font-bold py-10">
            Employee Management
          </h1>
          <div className="container mx-auto flex justify-between py-5 border-b">
            <div className="left flex gap-3">
              <button 
                className='flex bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-500 '
                onClick={handleForm}
                >
                Add Employ 
                <span className='px-1'>
                  <FiUserPlus size={23}/>
                </span>
              </button>

            </div>

          </div>
              {/* Collapsable Form */}
              
                {visible? <Form></Form>:<></>}
              
              {/* table */}
              <div className="container mx-auto">
                <Table></Table>
              </div>
        </main>
      </section>
    </>
  )
}
