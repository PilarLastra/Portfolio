import React from 'react'
import { useState, useEfect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"



const Stars = () => {
  return (
    <div>Stars</div>
  )
}

const StarsCanvas = () => {

  return (
    <div className='w-full h-full absolute inset-0 z-[-1] '
    //z-[-1] hace que se muestra detras de los elementos
    > 
      
    </div>
  )
}

export default StarsCanvas