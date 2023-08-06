import React from 'react'

function Select({handleLangChange}) {
    let languages = ["Javascript","Java","Python","C++","C", "C#","Go","Ruby"]
  return (
    <div>
      <select className='lang-selector' onChange={handleLangChange} >
        <option value="">Select a language</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select