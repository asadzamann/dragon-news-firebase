import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Newscard from '../../components/Newscard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    // console.log(data)

    useEffect(() => {
        if (id == "0") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCategoryNews(data);
            return;
        }
        else if (id == "1") {
            const filternedNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filternedNews)
        }
        else {
            const filteredNews = data.filter(news => news.category_id == id);
            console.log(filteredNews);
            setCategoryNews(filteredNews);
        }}, [data, id])
    


return (
    <div>
        <h1 className='font-bold'>Total <span className='text-red-500 font-bold'>{categoryNews.length}</span> news found</h1>
        <div className='grid grid-cols-1 gap-5'>
        {categoryNews.map((news) => <Newscard key={news.id} news={news}></Newscard>)}
        </div>
    </div>
);

};

export default CategoryNews;