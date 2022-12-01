import { useContext, useState} from "react"
import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"
import FeedbackContext from "../context/FeedbackContext"

function Feedbackitem({item }) {
  const {deleteFeedback} = useContext(FeedbackContext);
  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick = {()=> deleteFeedback(item.id)}className="close">
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default Feedbackitem