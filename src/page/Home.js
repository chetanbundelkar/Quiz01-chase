import React from 'react'
import PostCard from '../components/PostCard'

const Home = () => {
  return (
    <div className='flex w-full h-auto '>
        <div className="flex flex-col w-full h-auto p-5 space-y-3 border border-r-2">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/> 
        </div>
        <div className="w-[50%]">right side bar</div>
    </div>
  )
}

export default Home