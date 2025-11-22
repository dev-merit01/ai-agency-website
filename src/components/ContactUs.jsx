import React, { useState } from 'react'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { motion } from "motion/react"

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b2680ef7-9d23-41d4-a892-fddcf788f865");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        setResult(data.success ? toast.success('Thank you for your Submission')
        : toast.error(data.message)); 
    } catch (error) {
        toast.error(error.message); 
    }
  };

  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 
    pt-30 text-gray-700 dark:text-white'>
      <Title 
        title='We’re Here to Help' 
        desc='Whether you have feedback, inquiries, or just want to say hello, feel free to reach out. 
        We’d love to hear from you.' 
      />

      <motion.form 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}

      
      onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
            <p className='mb-2 text-sm font-medium'>Your name</p>
            <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 focus-within:border-primary'>
                <FontAwesomeIcon icon={faUser} className='dark:text-white mr-2'/>
                <input 
                    type="text"
                    name='name' 
                    placeholder='Enter your name' 
                    className='w-full p-3 text-sm outline-none'
                    required
                />
            </div>
        </div>

        <div>
            <p className='mb-2 text-sm font-medium'>Your Email</p>
            <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 focus-within:border-primary'>
                <FontAwesomeIcon icon={faEnvelope} className='dark:text-white mr-2'/>
                <input 
                    type="text" 
                    name='email'
                    placeholder='Enter your email' 
                    className='w-full p-3 text-sm outline-none focus-within:border-primary'
                    required
                />
            </div>
        </div>

        <div className='sm:col-span-2 focus-within:border-primary'>
            <p className='mb-2 text-sm font-medium'>Message</p>
            <textarea
                rows={8}
                name='message'
                placeholder='Enter your message'
                className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 
                focus-within:border-primary'
                required
             />
        </div>

        <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3
         rounded-full cursor-pointer
         hover:scale-103 transition-all'>
            Submit 
        </button>

      </motion.form>
    </motion.div>
  )
}

export default ContactUs
