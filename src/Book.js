import React from 'react'

// Book component as a arrow function
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props
  // adding event using attribute, eventHandler
  const clickEventHandler = (e) => {
    console.log(e)
    console.log(e.target)
    return alert('Welcome to my book store')
  }
  const clickAuthor = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book' onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h5>{author}</h5>
      <button type='button' onClick={clickEventHandler}> Alert </button>
      <button type='button' onClick={() => clickAuthor(author)}> Author </button>
    </article>
  )
}

export default Book
