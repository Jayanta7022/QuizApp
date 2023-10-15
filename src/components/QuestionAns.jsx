import { useEffect, useState } from "react";

function QuestionAns({ data, setTimeOut }) {
  const [question, setQuestion] = useState(null);
  let [ques, setques] = useState(0);
  useEffect(() => {
    setQuestion(data[ques]);
  }, [data, ques]);
  return (
    <div className="questionAns">
      <div className="question">{question?.question}</div>
      <div className="answerList">
        {question?.answers.map((a, index) => (
          <button
            key={index}
            value={a.text}
            className="ans"
            onClick={() => {
              if (a.correct) {
                setques((prev) => prev + 1);
                setQuestion(data[ques]);
                console.log(a.correct);
              }
            }}
          >
            {a.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionAns;
