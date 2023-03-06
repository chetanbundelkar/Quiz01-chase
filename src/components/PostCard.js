import { Image, theme } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsHeart, BsShare, BsSave } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import ProgressBar from './ProgressBar';

const PostCard = () => {
  return (
    <div className="flex flex-col h-auto p-2 space-y-2 border border-gray-400 rounded-md">
      <div className="flex items-center justify-between p-1 ">
        <span className="flex items-center">
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <span className="ml-1">Aman pandey</span>
          <span className="ml-1 text-xs">2mins</span>
        </span>
        <span>Attempt</span>
      </div>
      <div className="flex justify-center h-auto p-2 text-sm border border-gray-400 rounded-md flex-col">
        <span>
          Which of the following diagrams indicates the best relation between
          Travelers, Train and Bus ?
        </span>
        <img
          className=""
          width={'100%'}
          src="https://www.indiabix.com/_files/images/verbal-reasoning/venn-diagram/4-19-2-2.png"
          alt=""
        />
      </div>
      <div className="flex flex-col w-full h-auto p-1 space-y-2">
        <span
          className="w-full h-10 p-1 border border-gray-400 rounded-md hover:bg-gray-400 "
          // onClick={() => !selectedAnswer && hendleClick('Op1')}
        >
          <span className="pl-3">1</span>
          <ProgressBar done={'80'} />
        </span>
        <span
          className="w-full h-10 p-1 border border-gray-400 rounded-md hover:bg-gray-400 "
          // onClick={() => !selectedAnswer && hendleClick('Op1')}
        >
          <span className="pl-3">2</span>
          <ProgressBar done={'70'} />
        </span>
        <span
          className="w-full h-10 p-1 border border-gray-400 rounded-md hover:bg-gray-400 "
          // onClick={() => !selectedAnswer && hendleClick('Op1')}
        >
          <span className="pl-3">10</span>
          <ProgressBar done={'50'} />
        </span>
        <span
          className="w-full h-10 p-1 border border-gray-400 rounded-md hover:bg-gray-400 "
          // onClick={() => !selectedAnswer && hendleClick('Op1')}
        >
          <span className="pl-3">6</span>
          <ProgressBar done={'30'} />
        </span>
      </div>

      <div className="flex w-full h-24 p-1 space-x-1">
        <span className="flex w-full h-full border border-gray-400 rounded-md justify-center items-center  hover:bg-gray-400 flex-col">
          <img
            src="https://www.indiabix.com/_files/images/verbal-reasoning/venn-diagram/4-19-1-c8.png"
            alt=""
            className={'w-[100px] h-[80px]'}
          />
          <ProgressBar done={'30'} />
        </span>
        <span className="flex w-full h-full border border-gray-400 rounded-md justify-center items-center  hover:bg-gray-400 flex-col">
          <img
            src="https://www.indiabix.com/_files/images/verbal-reasoning/venn-diagram/4-19-1-c2.png"
            alt=""
            className={'w-[100px] h-[80px]'}
          />
          <ProgressBar done={'80'} />
        </span>
        <span className="flex w-full h-full border border-gray-400 rounded-md justify-center items-center  hover:bg-gray-400 flex-col">
          <img
            src="https://www.indiabix.com/_files/images/verbal-reasoning/venn-diagram/4-19-1-c5.png"
            alt=""
            className={'w-[100px] h-[80px]'}
          />
          <ProgressBar done={'70'} />
        </span>
        <span className="flex w-full h-full border border-gray-400 rounded-md justify-center items-center  hover:bg-gray-400 flex-col">
          <img
            src="https://www.indiabix.com/_files/images/verbal-reasoning/venn-diagram/4-19-1-c18.png"
            alt=""
            className={'w-[100px] h-[80px]'}
          />
          <ProgressBar done={'50'} />
        </span>
      </div>
      <div className="flex justify-between p-1 ">
        <span className="flex justify-between w-1/4 text-2xl">
          <BsHeart />
          <FaRegComment />
          <BsShare />
        </span>
        <span className="flex justify-end w-full text-2xl">
          <BsSave />
        </span>
      </div>
    </div>
  );
};

export default PostCard;
