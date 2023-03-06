import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

const QuizCard = ({
  setTimeOut,
  setQuestionNumber,
  questionNumber,
  data,
  score,
  setScore,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [style, setStyle] = React.useState({});
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const hendleClick = a => {
    setSelectedAnswer(a);
    setShow(true);

    if (a === question.Ans) {
      setScore(p => p + 1);
      console.log('correct');
      alert('Correct Answer ');
      delay(1000, () => {
        if (data[questionNumber]) {
          setQuestionNumber(prev => prev + 1);
          setSelectedAnswer(null); 
          setShow(false);
        } else {
          alert('Test Complete ');
          console.log(`${score}/${questionNumber}`);
        }
      });
    } else {
      console.log('wrong');
      alert('Wrong Answer ');
      delay(2000, () => {
        if (data[questionNumber]) {
          setQuestionNumber(prev => prev + 1);
          setSelectedAnswer(null);
          setShow(false);
        } else {
          alert('Test Complete ');
          console.log(`${score}/${questionNumber}`);
        }
      });
    }
  };

  return (
    <>
    <div className="flex flex-col w-1/2 h-auto p-2 border border-gray-400 rounded-md ">
      <div className="flex flex-col justify-center h-auto p-2 pt-5 pb-5 text-sm border border-gray-400 rounded-md">
        <span> {question?.Ques}</span>
        {/* <img className='' src="https://www.indiabix.com/_files/images/verbal-reasoning/venn-diagram/4-19-2-2.png" alt="" /> */}
      </div>
      <div className="flex flex-col w-full h-auto p-1 space-y-2">
        <span
          className="w-full h-10 p-1 border border-gray-400 rounded-md hover:bg-gray-400 "
          onClick={() => !selectedAnswer && hendleClick('Op1')}
        >
          <span className="pl-3">{question?.Op1}</span>
          {/* {show && <ProgressBar done={'80'} />} */}
        </span>
        <span
          className="w-full h-10 p-1 border border-gray-400 rounded-md hover:bg-gray-400"
          onClick={() => !selectedAnswer && hendleClick('Op2')}
        >
          <span className="pl-3">{question?.Op2}</span>
          {/* {show && <ProgressBar done={'100'} />} */}
        </span>
        <span
          className="w-full h-10 p-1 border border-gray-400 rounded-md hover:bg-gray-400"
          onClick={() => !selectedAnswer && hendleClick('Op3')}
        >
          <span className="pl-3">{question?.Op3}</span>
          {/* {show && <ProgressBar done={'39'} />} */}
        </span>

        <span
          className="w-full h-10 p-1 border border-gray-400 rounded-md hover:bg-gray-400 "
          onClick={() => !selectedAnswer && hendleClick('Op4')}
        >
          <span className="pl-3">{question?.Op4}</span>
          {/* {show && <ProgressBar done={'30'} className="" />} */}
        </span>
      </div>
    </div>
    <div className="flex w-1/2 justify-between mt-5">
        <Button colorScheme="teal" variant="outline"
        onClick={() => !selectedAnswer && setQuestionNumber(prev => prev - 1)}>
          Prev
        </Button>
        <Button colorScheme="teal" variant="outline"
                onClick={() => !selectedAnswer && setQuestionNumber(prev => prev + 1)}>
          Next
        </Button>
      </div>
    </>
  );
};

export default QuizCard;
