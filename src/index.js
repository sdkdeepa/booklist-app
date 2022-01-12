import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { data } from './books'
import Book from './Book'

function BookList () {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
