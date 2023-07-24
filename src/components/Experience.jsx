import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';

const Experience = () => {

  const images = [
    {
        id: 1,
        src: html,
        text: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        src: css,
        text: "CSS",
        style: "shadow-blue-500",
    },
    {
        id: 3,
        src: reactImage,
        text: "REACT",
        style: "shadow-cyan-400",
    },
    {
        id: 4,
        src: tailwind,
        text: "TAILWIND",
        style: "shadow-sky-400",
    },
    {
        id: 5,
        src: javascript,
        text: "JAVASCRIPT",
        style: "shadow-yellow-300",
    },
    {
        id: 6,
        src: github,
        text: "GITHUB",
        style: "shadow-white",
    },
]  
  return (
    <div name='experience'  className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className='max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0' >
            {
                images.map(({ id, src, text, style }) => (

                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                    <img  src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4 capitalize'>{text}  </p>
                </div>
            
                )
                )
            }
            </div>
        </div>
    </div>
  )
}

export default Experience