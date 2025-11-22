import React from 'react'
import Title from './Title'
import {services} from '../assets/assets'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"


const Services = () => {
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    transition={{ staggerChildren: 0.2}}
    viewport={{ once: true }} 
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
    pt-30 text-gray-700 dark:text-white'>
        <Title title='Our AI & Data Services' 
        desc='We provide a suite of AI-powered services to help your business transform data into actionable insights.'/>

        <div className='flex flex-col md:grid grid-cols-2'>
          {services.map((service, index)=> (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
    </motion.div>
  )
}

export default Services
