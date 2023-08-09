import React from "react";
import "./hojas-estilos/Compra.css";
import { motion } from "framer-motion";

function Compras() {
  return (
    <div className="container justify-items-center text-center align-items-center container-buy">
      <motion.h3
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{
          type: "linear",
          stiffness: 36,
          duration: 1.2,
        }}
        className=" text-buy text-center  text-capitalize"
      >
        Helados Disponibles
      </motion.h3>
    </div>
  );
}

export default Compras;
