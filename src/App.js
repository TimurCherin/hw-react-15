import { useState } from "react";
import { Options } from "./components/Options";
import { Feedback } from "./components/Feedback";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodFeedback = () => setGood(prev => prev + 1);
  const addNeutralFeedback = () => setNeutral(prev => prev + 1);
  const addBadFeedback = () => setBad(prev => prev + 1);

  return (
    <div className="App">
      <Options
        addGoodFeedback={addGoodFeedback}
        addNeutralFeedback={addNeutralFeedback}
        addBadFeedback={addBadFeedback}
      />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;