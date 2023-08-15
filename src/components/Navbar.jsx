import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    
    <nav
    className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`} 
    //paddingX le aporta padding -- w-full = full width -- flex item-center = accede a la propiedad flex para q se centre
    //py-5 = padding y va a ser 5 -- fixed top-0 va a hacer q se quede arriba -- z-20 para hacerlo aparecer arriba de otros componentes
    >
      <div className="w-full flex justify-between item-center max-w-7xl mx-auto"
      //max-w-7xl indica que se quiere mucho whidth en la navBar -- mx-auto = centra un container
      >
        <Link
          to="/" //Este link va a apuntar a la parte de arriba de la pagina
          className='flex item-center gap-2'
          onClick={()=>{
            setActive(""); //setActive va a trakear en que parte de la pagina estamos
            window.scrollTo(0, 0); //Te lleva al inicio de la pagina
          }}
        > 
          <img src= {logo} alt="logo" className='w-14 h-14 object-contain'  
          //w-9 width=9 -- h-9 height=9
          // object-contains = Cambia el tamaño del contenido de un elemento para permanecer contenido dentro de su contenedor
          //sm:block hidden = en dispositivos pequeños el contenido especificado se escondera
          />
          <p className='text-white text-[14px] font-bold cursor-pointer flex items-center'>Pilar Lastra &nbsp; <span className='sm:block hidden'>| Junior &nbsp; Font-End</span></p> 
          
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'
        // list-none = para sacarle los puntos o numero q se ponen adelante de las listas x default
        >
          {navLinks.map((link) => (
            <li key= 
            {link.id} 
            className= {`${
              active === link.title
                ? "text-white"
                : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`} 
            onClick= {() => setActive(link.title)} //cambia la url enviandote a ese punto de la pagina
            >

              <a href={ `#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end item-center'
        //MOBILE MENU
        //flex-1 = permite que los elementos flex crezcan y se reduzcan segun sea necesario, ignorando su tamaño inicial
        >
          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          
          <div className={`${!toggle ? "hidden" : "flex"}
          p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
          z-10 rounded-xl 
          `}
          //Absolute = se usa para posicionar un elemento fuera de la estructura del documento
          //min-w = setea el tamaño minimo de un componente
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'
            // list-none = para sacarle los puntos o numero q se ponen adelante de las listas x default
            >
              {navLinks.map((link) => (
                <li key= 
                {link.id} 
                className= {`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`} 
                onClick= {() => {
                  setToggle(!toggle); //con esto se cierra automatico cuando se apreta alguno de los links
                  setActive(link.title); //cambia la url enviandote a ese punto de la pagina
                }} 
              
                >

                  <a href={ `#${link.id}`}> {link.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar