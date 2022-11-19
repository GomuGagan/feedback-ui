import Header from "./components/Header";
import FeedbackLists from "./components/FeedbackLists";
import { useState } from "react";
import feedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const deletFeedback = (id)=>{
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }

  }
  return (

    <>
    <Header />
    <div className="container">
      <FeedbackStats feedback= {feedback} />
      <FeedbackLists feedback = {feedback}
        handleDelete = {deletFeedback}
      />
    </div>
    </>
  );
}

export default App;
