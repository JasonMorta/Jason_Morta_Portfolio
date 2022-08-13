import React from 'react';
import './blogPosts.css'
import list from '../../components/data/BlogList.jsx'
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { sharedState } from '../../App';

export default function BlogPosts() {

  let navigate = useNavigate();
  let state = useContext(sharedState);
  let [,,,,, setThisBlog] = state


  return (
  
    <div className='blog-posts-container'>
      <h1 className='main-heading'>BLOGS</h1>
      {list.map((item, index)=>(
        <div className={`div-cont blog post${index}`} key={index*item.id}>
          <div className='head-content'>
            <h1>{item.blog.heading}</h1>
            <i className='posted-date'>{item.created} </i>
            
          </div>
          <div className='desc'>
            <p>{item.blog.description.intro}<i onClick={
              function toBlog(){
                setThisBlog(item)
                  navigate('/Blog')  
              }
            }>Read more</i></p>
            
          </div>
        </div>
      ))}
      
    </div>
  )
}
