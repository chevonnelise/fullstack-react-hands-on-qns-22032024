import React, {useState} from 'react';

export default function Question() {

    const [answer, setAnswer] = useState("");

    const handleAnswerChange = (event) => {
      setAnswer(event.target.value);
    }


    return (
        <section id="qns1">
        <h1>Question 1: Which island is Mount Faber, Singapore, located on?</h1>
        <ul>
          <li>
            <input name="qns1answer" type="radio" value="A" checked={answer === "A"} onChange={handleAnswerChange}/><label>A. Palau Ubin</label>
          </li>
          <li>
            <input name="qns1answer" type="radio" value="B" checked={answer === "B"} onChange={handleAnswerChange}/><label>B. Palau Ujong</label>
          </li>
          <li>
            <input name="qns1answer" type="radio" value="C" checked={answer === "C"} onChange={handleAnswerChange}/><label>C. Palau Tekong</label>
          </li>
          <li>
            <input name="qns1answer" type="radio" value="D" checked={answer === "D"} onChange={handleAnswerChange}/><label>D. Saint John Island</label>
          </li>
        </ul>
      </section>
    )
}
