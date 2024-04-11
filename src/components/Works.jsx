import React from 'react'
import { Tilt } from "react-tilt"; 
import { motion } from "framer-motion"

import { styles } from '../styles'
import { github } from '../assets'
import SectionWrapper from '../hoc/SectionWrapper'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}  
    //Como queremos que aparezca 1 x 1 multiplicamos cada card x el index
    > 
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full content-between"
      >
        <div className='h-1/2'>
          <div className='relative w-full h-[230px] '>
            <img 
              src={image} 
              alt={name}
              className='w-full h-full object-cover rounded-2xl' 
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursot-pointer'
              >
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px] '> {name} </h3>
            <p className='mt-2 text-secondary text-[14px] '> {description} </p>
          </div>
        </div>


        <div className='h-1/2 mb-4 flex flex-wrap content-end gap-2'>
          {tags.map((tag) =>(
            <p 
            key={tag.name} 
            className={`text-[14px] ${tag.color}`}
            > 
              #{tag.name}
            </p>
          ))}
        </div>
        
      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
       <motion.div variants={textVariant}
      //Nos va a animar las tags p
      >
         <p className= {styles.sectionSubText} >My works</p>
        <h2 className= {styles.sectionHeadText} >Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}//No tiene direccion ni tipo pero tiene un diley de 0.1 y uha duracion de 1
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] ' //leading:  fixed line-height
        >
          Following projects showcases my skills and experience through
          examples of my work. Each project is briefly described with
          links to code repositories
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 '>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}  />
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(Works, "");