import React from 'react'
import "./Tag.css"

const Tag = ({tagName, selectTag, selected}) => {

  const tagStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#dfb6b2"},
    React: {backgroundColor: "#ffd12c"},
    Python: {backgroundColor: "#4a5c6a"},
    default: {backgroundColor: "#f9f9f9"}
  }
  return (
    <button type='button' className='tag'
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick ={()=> selectTag(tagName)} >
      {tagName}
    </button>
)
}

export default Tag