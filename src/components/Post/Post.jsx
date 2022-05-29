import React from 'react'
import './post.css'

export default function Post() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => { }
  

  return (
    <div className='post-container'>
      <form type='submit' onSubmit={handleSubmit} className='thoughts-container'>
        <textarea
          type='text'
          placeholder='Share your thoughts'
          onChange={handleChange}
          className='share-txt'
        ></textarea>
        <button className='share-btn'>Share!</button>
      </form>
    </div>
  )
}
