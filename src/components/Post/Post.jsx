import React from 'react'
import './post.css'

export default function Post() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => { }
  

  return (
    <div className='post-container'>
      <form type='submit' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Share your thoughts'
          onChange={handleChange}
          className='share-txt'
        ></input>
        <button>Share!</button>
      </form>
    </div>
  )
}
