//Higher order component
//La razon por la que es un higher order component es porque va a tener otro componente adentro
//Es un componente que instantaneamente va a devolver otra funcion
//Componente que va a envolver a todas las secciones 
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

//Como es un wraper va a recibir el componente original y el id para navegar o escrolear a una seccion especifica
const SectionWrapper = (Component, idName) => {
    return (props) => {
        const sectionWrapper = {

        };

        return (
            <motion.section
             variants={staggerContainer()} //Va a animar nuestra seccion
             initial= "hidden"
             whileInView= "show"
             viewport={{ once: true, amount: 0.25 }} //Se va a mostrar 1 vez y va a durar 0.25 segundos
             className= {`${styles.padding} max-w-7xl mx-auto relative z-0`}
         >
            <span className="hash-span" id={idName} > &nbsp; </span>
            
                <Component />
            </motion.section> 
        )
    }
  
}

export default SectionWrapper

