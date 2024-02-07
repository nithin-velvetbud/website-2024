'use client'
import React, { useState } from 'react';


const Card = ({ title, description, image }) => {
  return (
    <div className='card_container w-300 hover:cursor-pointer md:h-[600px] h-[100px]' >
      <div className='custom_card h-[400px] md:h-[600px] group flex flex-col justify-start items-start gap-4 rounded-3xl border-2 p-2 bg-red-200 md:p-0' >
        <div className=''>
          <img src={image} alt='img' className='rounded-lg object-cover w-fill' />
        </div>
        <div className='text-left text-2xl md:text-3xl font-semibold pl-2 pr-2'>{title}</div>
        <div className='text-base md:text-xl text-justify overflow-y-scroll pl-2 pr-2' >{description}</div>
      </div>
    </div>

  );
}

export default Card;


