import React, { useEffect, useState } from 'react'
import './feed.css'

export default function Feed() {
  const [Post, setPost] = useState([])

  let dummyData = [
    {
      name: "sam",
      words: "My back really hurts nowadays",
      date: "11/12/22"
    },
    {
      name: "josh",
      words: "I ate a dog, dont worry it was a hot dog",
      date: "11/12/22"
    },
    {
      name: "Carl",
      words: "I've been sitting waiting wishing",
      date: "11/12/22"
    },
    {
      name: "Lillie",
      words: "Pretty sure the color of the sun is yellow",
      date: "11/12/22"
    },
    {
      name: "Pringles",
      words: "nothing half full about this can",
      date: "11/12/22"
    },
    {
      name: "Pringles",
      words: "nothing half full about this can",
      date: "11/12/22"
    },
    {
      name: "Pringles",
      words: "nothing half full about this can",
      date: "11/12/22"
    },
    {
      name: "Pringles",
      words: "nothing half full about this can",
      date: "11/12/22"
    },
  ]
  useEffect(() => {
    setPost(dummyData)
  }, [setPost])
  
  return (
    <div className='post-big-container'>
      <div className='post-container'>
        {Post.map((post) => {
          return (
            <div className='person-post'>
              <p className='post-name'>{post.name}</p>
              <p className='post-words'>{post.words}</p>
              <p className='post-date'>{post.date}</p>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
