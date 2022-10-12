import React, { useContext } from 'react'
import NewsContext from '../context/news/NewsContext'
import NewsItem from './NewsItem'

const News = () => {
  const contextNews = useContext(NewsContext);
  const {news} = contextNews;
  return (
    <div className='container my-3 w-75'>
      <h1 className='text-center my-3'>Welcome to News House</h1>
      <div className='d-flex flex-wrap justify-content-around'>
        {
          news.map((e,i) => {
            return <NewsItem key={i} news={e}/>
          })
        }
      </div>
    </div>
  )
}

export default News
