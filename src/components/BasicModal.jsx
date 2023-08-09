import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import './hojas-estilos/BasicModal.css';
import swal from 'sweetalert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({texto, imagen , precio}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buy =() =>{
   swal({
    title:"Has comprado con exito tu helado",
    text: "Se añadirá a continuación al carrito de compras",
    icon : "success",
    button : "Acceptar",
    timer:3000
   }) 
  };
  return (
    <div>
    

        <Button onClick={handleOpen}>Leer más...</Button>
      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
          <h2 className='text-center'>
            {texto}
          </h2>
          <p className='text-center precio ' >
            {precio}$
          </p>
          <div className='img-contenedor'>
            <img className='img' src={imagen}/>
          </div>
          <div className='btn-contenedor'>
          <button onClick={buy} className=' boton-comprar'>Comprar</button>
          </div>
          
          
        </Box>
      </Modal>
    </div>
  );
}