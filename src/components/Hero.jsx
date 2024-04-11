import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from './canvas';

//relative = se usa para posicionar un elemento siguiendo el flujo natural del documento
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>Hero
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} 
      //inset = se usa para setear la posicion horizontal o vertical de un posicion element
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f05225]'>
            <div className="w-1 mx-auto sm:h-80 h-40 bg-gradient-to-b from-orange-100" />
          </div>
        </div>

        <div>
            <h1 className={`${styles.heroHeadText}`} >Hi I'm <span className='text-orange-100'>Pilar</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}
            //block = se usa para controlar el posicionamiento del texto, pondra el elemento en su propia linea 
            >
              I'm a Frontend  <br className='sm:block hidden'/> developer
            </p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center self-end'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
            animate={{
              y: [0, 24, 0] //Se va a mover 24 pixeles para arriba y para abajo
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

           
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero