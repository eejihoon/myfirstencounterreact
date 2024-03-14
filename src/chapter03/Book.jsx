import React from 'react'

export default function Book(props) {
  return (
    <div>
        <h1>{`이 책의 이름은 ${props.name}`}</h1>
        <h1>{`이 책은 총 ${props.numOfPage}`}</h1>
    </div>
  )
}
