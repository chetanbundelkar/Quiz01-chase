import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import QuizCard from '../components/QuizCard';
import { Button, ButtonGroup } from '@chakra-ui/react';

const Test = () => {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState('$ 0');
  const [score, setScore] = useState(0);

  const data = [
    {
      QuesId: 'Q3B4B8530',
      Ques: '1 A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?',
      QuesImg:
        'A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?',
      Op1: ' 45%',
      Op1Img: ' 45%',
      Op2: '45 5/11 %',
      Op2Img: '45 5/11 %',
      Op3: '546/11 %',
      Op3Img: ' 546/11 %',
      Op4: '55%',
      Op4Img: '55%',
      Ans: 'Op2',
      desc: '',
      ChapterId: 'Ch3C7298C2',
      SubjectId: 'Sub74DBD59A',
      TopicId: 'TopCD3F025D',
      CreatedBy: 'Chetan',
    },
    {
      QuesId: 'Q3B4B8530',
      Ques: '2 A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?',
      QuesImg:
        'A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?',
      Op1: ' 45%',
      Op1Img: ' 45%',
      Op2: '45 5/11 %',
      Op2Img: '45 5/11 %',
      Op3: '546/11 %',
      Op3Img: ' 546/11 %',
      Op4: '55%',
      Op4Img: '55%',
      Ans: 'Op2',
      desc: '',
      ChapterId: 'Ch3C7298C2',
      SubjectId: 'Sub74DBD59A',
      TopicId: 'TopCD3F025D',
      CreatedBy: 'Chetan',
    },
    {
      QuesId: 'Q3B4B8530',
      Ques: '3 A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?',
      QuesImg:
        'A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?',
      Op1: ' 45%',
      Op1Img: ' 45%',
      Op2: '45 5/11 %',
      Op2Img: '45 5/11 %',
      Op3: '546/11 %',
      Op3Img: ' 546/11 %',
      Op4: '55%',
      Op4Img: '55%',
      Ans: 'Op2',
      desc: '',
      ChapterId: 'Ch3C7298C2',
      SubjectId: 'Sub74DBD59A',
      TopicId: 'TopCD3F025D',
      CreatedBy: 'Chetan',
    },
  ];

  return (
    <div>
      <div className="">Score:- {score}</div>
      <QuizCard
        data={data}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        setTimeOut={setTimeOut}
        score={score}
        setScore={setScore}
      />

    </div>
  );
};

export default Test;
