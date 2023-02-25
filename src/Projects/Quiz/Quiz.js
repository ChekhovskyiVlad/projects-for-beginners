import { useState } from 'react';
import './Quiz.style.scss';

const questions = [
  {
    title: 'React - it`s ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'Component - it`s ... ',
    variants: ['application', 'part of an application or page', 'what I don`t know what is'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'It`s just HTML',
      'It`s a function',
      'This is the same HTML but with JS code running',
    ],
    correct: 2,
  },
];

export const Result = ({correct}) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correct} answers out of {questions.length}</h2>
      <a href='/quiz'>
      <button>Try again</button>
      </a>
    </div>
  );
}

export const Game = ({step, question, onClickVariant})=> {
    /* Math.round - округление*/
    const percentage = Math.round((step / questions.length * 100))

    console.log(percentage)
  return (
    <>
    <div className='game'>

      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1 className='title'>{question.title}</h1>
      <ul>
        {
            question.variants.map((el, index) => <li key={el} onClick={() => onClickVariant(index)} >{el}</li>)
        }
      </ul>
    </div>
    </>
  );
}

export const Quiz = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect ] = useState(0);
    const question = questions[step];

    const onClickVariant =  (index) => {
        setStep(step + 1);
        if(index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    console.log(question)
  return (
    <div className="quiz">
    {
      step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : <Result correct={correct} />
    }
    </div>
  );
}
