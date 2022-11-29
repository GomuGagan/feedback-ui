import { motion, AnimatePresence} from "framer-motion"
import React from 'react'
import Feedbackitem from './FeedbackItem'


function FeedbackLists({feedback, handleDelete}) {
    if (!feedback || feedback.length === 0){
        return <p>No Feedback Yet!</p>
    }
  return (
    <div className='feedback-list'>
      <AnimatePresence >
      { feedback.map((item)=>(
        <motion.div
         key={item.id}
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit ={{opacity: 0}}
         >
          <Feedbackitem 
          key={item.id} 
          item={item}
          handleDelete = {handleDelete} />

        </motion.div>
        ))}
        
      </AnimatePresence>
    </div> 
  )
}

export default FeedbackLists