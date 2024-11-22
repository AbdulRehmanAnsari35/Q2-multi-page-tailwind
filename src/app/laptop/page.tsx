import React from 'react'
import Image from 'next/image';

const laptop = () => {

  const lpdata= [
    { id: 1, name: 'Macbook', price: 800, description: 'APPLE Macbook M4', image:'/card01.png'},
    { id: 2, name: 'Lenevo', price: 400, description: 'Lenevo thinkpad i5 12th gen', image:'/card02.png'},
    { id: 3, name: 'Chrome book', price: 300, description: 'chrome book intel celeron 11th gen', image:'/card03.png'},
    { id: 4, name: 'HP Elitebook', price: 1800, description: 'hp Elitebook intel Xeon dual core', image:'/card04.png'},
    { id: 5, name: 'DELL Insprion', price: 6500, description: 'DELL Insprion i7 8th gen 2GB GPU', image:'/card05.png'},
    { id: 6, name: 'MSI Alienware', price: 9500, description: 'MSI gaming i912th gen 8GB gpu', image:'/card06.png'},
  ]
  return (
    
    <div className='laptop grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
      {lpdata.map((laptop) =>(
       <div key={laptop.id} className='lp-card bg-white p-5 rounded-md shadow-md text-center'>
        <Image
            src={laptop.image}
            alt={laptop.name}
            width={400} // Specify the width
            height={300} // Specify the height
            className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        <h3 className='mt-4 text-2xl font-bold'>{laptop.name}</h3>
        <p className='text-gray-500'>{laptop.description}</p>
        <div className='price text-blue-500 text-xl font-semibold mt-2'>${laptop.price}</div>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-950'>Add to cart</button>
       </div> 
      ))}
      </div>  
    
  )
}

export default laptop