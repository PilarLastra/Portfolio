import React from 'react'
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from './canvas';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';

//template_4lti62k
//service_t0zb7me
//b09pMmVSdj9nrK-eT

const Contact = () => {
  const fromRef = useRef();
  const [ form, setFrom ] = useState({
    name: "",
    email:"",
    message:"",
  })
const [ loading, setLoading ] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;

  setFrom({ ...form, [name]: value })
}

const handleSubmit = (e) => {
  e.preventDefault() //Si no el navegador se recarga
  setLoading(true);

  emailjs.send(
    "service_t0zb7me",
    "template_4lti62k", 
      {
        from_name: form.name,
        to_name: "Pilar Lastra",
        from_email: form.email,
        to_email: "pilarlastra0@gmail.com",
        message: form.message,
      },
      "b09pMmVSdj9nrK-eT"
   )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back yo you as soon as possible.");

      setFrom({
        name: "",
        email: "",
        message: "",
      })
    }, (error) => {
      setLoading(false);

      console.log(error);

      alert("Something went wrong.")
    })

}



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    //overflow-hidden sirve para recortar cualquier contenido dentro de un elemento
    //flex-col-reverse sirve para colocar elementos en la posicion opuesta
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl ' //flex-[] permite que el elemento crezca y se reduzca ignorando su tamaño inicial
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText} >Get in Touch</h3>

        <form 
          ref={fromRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input 
                type="text"
                name= "name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' //outlined-none border-none sirven para sacar los bordes predeterminados de CSS 
              />
          </label>
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input 
                type="email"
                name= "email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' //outlined-none border-none sirven para sacar los bordes predeterminados de CSS 
              />
          </label>
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows="7" 
                name= "message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you whant to say?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' //outlined-none border-none sirven para sacar los bordes predeterminados de CSS 
              />
          </label>
          <div className='flex justify-end'>
            <button type='submite' className='bg-tertiary py-3 px-8 w-fit outline-none text-white font-bold shadow-md shadow-primary rounded-xl'>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        
        </form>

      </motion.div>

      <motion.div
       variants={slideIn("right", "tween", 0.2, 1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ' // flex va a ser 1 pq el form y la tierra toman lugar en el mismo espacio
      >
        <EarthCanvas/>
      </motion.div>

      </div>
  )
}

export default SectionWrapper(Contact, "contact")