import React from 'react';
import './style.css';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  return (
    <>
      <a
        href='https://wa.me/6281281873417'
        className='whatsapp_float'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaWhatsapp className='whatsapp-icon' />
      </a>
    </>
  );
};

export default Whatsapp;
