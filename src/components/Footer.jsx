import React from 'react'
import "./hojas-estilos/Footer.css";
import { motion } from 'framer-motion';
function Footer() {
  return (
    <div>
        <div
        className=' container-footer text-white container-fluid bg-primary mt-2'>
          <motion.p
           initial= {{x:-200}}
           animate = {{x:0}}
           transition={{
            type:'linear',
            stiffness:36,
            duration:1.2
      
      
          }} className='d-flex justify-content-center align-items-center'>
            <span>Made by Reinaldo Bellorin </span>
            
               
          </motion.p>
          <motion.div
           initial= {{x:-200}}
           animate = {{x:0}}
           transition={{
            type:'linear',
            stiffness:36,
            duration: 1.2
      
      
          }} className="copyright container-fluid text-center p-3" >
          © 2023 Copyright
    
          </motion.div>
          </div>
         
          
    </div>
  )
}

export default Footer