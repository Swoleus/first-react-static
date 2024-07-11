import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const randomDate = getRandomDate(new Date(2000, 0, 1), new Date(2024, 11, 30))



function getRandomDate(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date;
}

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, we are blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date={randomDate.toLocaleDateString()} title="GPT3 is the future, let's see where it can take us!"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date={randomDate.toLocaleDateString()} title="GPT3 is the future, let's see where it can take us!"/>
          <Article imgUrl={blog03} date={randomDate.toLocaleDateString()} title="GPT3 is the future, let's see where it can take us!"/>
          <Article imgUrl={blog04} date={randomDate.toLocaleDateString()} title="GPT3 is the future, let's see where it can take us!"/>
          <Article imgUrl={blog05} date={randomDate.toLocaleDateString()} title="GPT3 is the future, let's see where it can take us!"/>
        </div>
      </div>
    </div>
  )
}

// function getRandomDate(start, end) {
//   const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   return date;
// }

export default Blog
