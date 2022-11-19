import React from 'react'
import Feedbackitem from './FeedbackItem'


function FeedbackLists({feedback, handleDelete}) {
    if (!feedback || feedback.length === 0){
        return <p>No Feedback Yet!</p>
    }
  return (
    <div className='feedback-list'>
      { feedback.map((item)=>(
            <Feedbackitem 
            key={item.id} 
            item={item}
            handleDelete = {handleDelete} />
        ))}
    </div> 
  )
}

export default FeedbackLists