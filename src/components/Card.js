import React from 'react'

const Card = props => {

  console.log(props)
  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
        <a href={props.html_url} target="_blank">{props.html_url}</a>
      </div>
    </div>
  )
}

export default Card
