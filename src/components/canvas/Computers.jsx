import React from 'react';
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; //un canvas es un espacio vacio para poner algo en el
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; //componentes que nos ayudaran a dibujar en el canvas -- useGLTF nos permite importar modelos 3D
import CanvasLoader from "../Loader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



const Computers = ({ isMobile }) => {

  const glftLoader = new GLTFLoader();
  const computer = useGLTF("./desktop_pc/scene.gltf")
 

  return (
  //cuando se trabaja con modelos 3D no se arranca con un DIV se arranca con un mesh y una luz para que se pueda ver el modelo
   <mesh>
    <hemisphereLight intensity={0.15} groundColor="black"/>
    <pointLight intensity={1}/> 
    <spotLight 
    position={[-20, 50, 10]} 
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}
    />
    <primitive 
    object={computer.scene} 
    scale={isMobile ? 0.6 : 0.8} 
    position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} 
    rotation={[-0.01, -0.2, -0.1]}
    //no se podra ver nuestro modelo hasta que no lo cargemos en nuestro react 3 fiber canvas
    />
   </mesh>
    
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);


  //Este use effect se encarga de cambiar isMobile 
  useEffect(() => {

    //Agrega un listener para cambiar de tamaño de la pantalla
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //Setea el valor inicial de isMobile
    setIsMobile(mediaQuery.matches); 
    
    //Define una funcion callback para manejar los cambios de mediaQuery
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    //agrega la funcion callback como un listener para los cambios en mediaQuery
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //Remueve el listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
    
  }, [])

  return(
    <Canvas 
    frameloop='demand' 
    shadows 
    camera={{position:[20, 3, 5], fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}
      //sespense viene de react y nos permite tener un loader mientras nuestro modelo esta cargando
      //El fallback se muestra mientras se carga el modelo (en este caso)
      >
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        //min y max polar angle nos van a permitir rotar el modelado desde un angulo en especifico
        />
        <Computers />
      </Suspense>

      <Preload all/>
    </Canvas>
  )

}

export default ComputersCanvas