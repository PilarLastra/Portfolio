import React from 'react';
import { Tilt } from "react-tilt"; 
import { motion } from "framer-motion";
import   SectionWrapper   from '../hoc/SectionWrapper';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ( {index, title, icon} ) => {

  return(
    <Tilt className="xs:w-[250px] w-full"> 
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      //el diley es 0.5 pero se va a multiplicar por cada index haciendo que si el primero empieza en 0 el segundo va a ser 0.5 veces 1 y asi cn cada uno
      className='w-full bg-gradient-to-b from-orange-100 to-yellow-500 p-[1px] rounded-[20px] shadow-card'
      >
      
        <div
        // Opciones de tilt
          options={{
            max:45, // max tilt rotation (degrees)
            scale:1, // 2 = 200%, 1.5 = 150%, etc..
            speed:450 // Speed of the enter/exit transition
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          //min-h es la altura minima de la card -- justify-evenly justifica los elementos a lo largo del eje principal,  misma cantidad de espacio alrededor de cada elemento
        >
          <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'
            // object-contain Cambie el tamaño del contenido de un elemento para permanecer ajustado dentro de su contenedor usando
          />
          <h3 className='text-white text-[20px] font-bold text-center '> {title} </h3>
          
        </div>
       
      </motion.div>
    
    </Tilt>

  )

}

const About = () => {
  return (
   <>
    <motion.div variants={ textVariant("0") }>
        <p className= {styles.sectionSubText} >Introduction</p>
        <h2 className= {styles.sectionHeadText} >Overview.</h2>
    </motion.div>

    <motion.p
      variants={ fadeIn("", "", 0.1, 1) }
      //fadeIn acepta 4 parametros direccion, tipo, delay, duracion
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I consider myself proactive and organizes person, 
      i like working with teammates and i always seek to 
      make a creative solution to the problems that come
      my way. I like new experiences and
      challenges and i am also motivated to
      grow professionally and improve my
      knowledge constantly.
      
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
    </div>
   </>
  )
}
//Se puede envolver el export default About en el Section Wrapper
export default SectionWrapper(About, "about")