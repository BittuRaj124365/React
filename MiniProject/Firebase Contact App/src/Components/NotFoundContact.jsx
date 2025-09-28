import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='flex text-white items-center justify-center gap-3 m-auto h-[80vh] '>
        <img src="/src/assets/contact.png" alt="img" />
        <h3 className='font-semibold text-white'>No contact found</h3>
    </div>
    
  )
}

export default NotFoundContact