import React from "react";
import { Link } from "react-router-dom";
import '../components/hojas-estilos/BasicPagination.css'
import { motion } from "framer-motion";
export default function BasicPagination({ element1 , element2 }) {
  return (
    <motion.div 
    initial={{x: -500}}
    animate= {{x : 0}} 

    transition={{
      type:'linear',
      stiffness:36,
      duration:.9


    }}
    className="container pt-3 d-flex justify-content-center align-items-center text-center ">
      <nav aria-label="...">
        <ul className="pagination">
          <li className={`page-item ${element1}`}>
            <Link className="page-link" to={"/"}>
              <span className="pagination-link">1</span>
            </Link>
          </li>
          <li className={`page-item ${element2}`} aria-current="page">
            <Link className="page-link" to={"/list-2"}>
              <span className="pagination-link">2</span>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
