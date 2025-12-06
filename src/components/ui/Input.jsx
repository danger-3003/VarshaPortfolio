import React from 'react'

function Input({ id, name, type, onChange, value, required, placeholder }) {
  return (
    <>
      <div className='flex items-start justify-start flex-col gap-2 w-full my-1'>
        <label htmlFor={id} className='text-sm md:text-base font-medium'>{name}<span className='text-red-400'>{required && "*"}</span></label>
        <input
          id={id}
          type={type}
          onChange={onChange}
          value={value}
          required={required}
          placeholder={placeholder}
          className='border-b border-slate-600 dark:border-slate-300 bg-transparent outline-none text-slate-600 dark:text-slate-300 text-sm md:max-w-60 lg:max-w-80 w-full md:w-80 pb-1'
        />
      </div>
    </>
  )
}

export default Input