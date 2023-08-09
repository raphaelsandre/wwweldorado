import React from 'react';

const Contato = () => {
  return (
    <div className='m-auto'>
      <form action='#'>
        <div className='mb-3 text-center'>
          <label htmlFor='email'>Fale conosco</label>
        </div>
        <div className='flex justify-center'>
          <input type='email' name='email' className='w-full h-10' id='email' />
        </div>
      </form>
    </div>
  );
};

export default Contato;
