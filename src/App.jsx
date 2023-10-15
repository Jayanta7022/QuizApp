import { useState } from "react";
import "./App.css";
import QuestionAns from "./components/QuestionAns";

function App() {
  const money = [
    { id: 1, ammount: "$ 100" },
    { id: 2, ammount: "$ 200" },
    { id: 3, ammount: "$ 300" },
    { id: 4, ammount: "$ 500" },
    { id: 5, ammount: "$ 1000" },
    { id: 6, ammount: "$ 2000" },
    { id: 7, ammount: "$ 4000" },
    { id: 8, ammount: "$ 8000" },
    { id: 9, ammount: "$ 16000" },
    { id: 10, ammount: "$ 32000" },
    { id: 11, ammount: "$ 64000" },
    { id: 12, ammount: "$ 125000" },
    { id: 13, ammount: "$ 250000" },
    { id: 14, ammount: "$ 500000" },
    { id: 15, ammount: "$ 1000000" },
  ].reverse();

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const [questionNumber, setQuestionNumber] = useState(0);
  const [timeOut, setTimeOut] = useState(false);

  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <QuestionAns
            data={data}
            setTimeOut={setTimeOut}
            // questionNumber={questionNumber}
            // setQuestionNumber={setQuestionNumber}
          />
        </div>
      </div>
      <div className="piramid">
        <ul className="moneyList">
          {money.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
              key={m.id}
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyLisItemAmount"> {m.ammount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
