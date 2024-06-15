import * as React from 'react';
import bannerBG from '../assets/banner_bg.png'
import bannerCard from '../assets/banner_player.png'

export default function Banner() {
  return (
    <section className='w-full h-96 mt-1 relative mb-96'>
      <img className='opacity-50' src={bannerBG} alt="A man using a laptop" />
      <div className='flex items-center absolute top-48'>
        <div className='ml-4 w-1/2'>
          <div className='bg-sky-300 rounded-md p-2 w-36 text-center'>
            <h3 className='font-bold text-xl text-white'>FRONT END</h3>
          </div>
          <h4 className='mt-4 text-white text-2xl font-semibold'>Challenge React</h4>
          <p className='mt-2 font-thin w-3/4 text-white text-sm'>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás
            comprometerte en la resolución de un problema para poder aplicar todos
            los conocimientos adquiridos en la formación React.
          </p>
        </div>
        <div className='w-1/3 pt-24'>
          <img src={bannerCard} alt="A man and a text about programming" />
        </div>
      </div>
    </section>
  );
}
