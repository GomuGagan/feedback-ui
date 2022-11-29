import { v4 as uuidv4 } from "uuid"
import Header from "./components/Header";
import FeedbackLists from "./components/FeedbackLists";
import { useState } from "react";
import feedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newFeedback) =>{
    newFeedback.id= uuidv4();
    setFeedback([newFeedback, ...feedback])

  }
  const deletFeedback = (id)=>{
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }

  }
  return (

    <>
    <Header />
    <div className="container">
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedback= {feedback} />
      <FeedbackLists feedback = {feedback}
        handleDelete = {deletFeedback}
      />
    </div>
    </>
  );
}

export default App;
