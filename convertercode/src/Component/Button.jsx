import React from 'react'

function Button({value,handleClick,isLoading}) {
  return (
    <div className='btnDiv'>
      <button onClick={handleClick} disabled={isLoading}>
      {isLoading ? 'Loading...' : value}
    </button>
    </div>
  )
}

export default Button