import React from 'react';

const NewsItem = (props) => {
    const {news} = props;
    return (
        <div className="card m-3 col-md-3">
            <img src={news.urlToImage==null?"https://image.cnbcfm.com/api/v1/image/107060925-1652458971966-2022-05-13T143116Z_1096964027_RC2E6U96V7N5_RTRMADP_3_USA-STOCKS.JPG?v=1665525807&w=1920&h=1080":news.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <a href={news.url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    )
}

export default NewsItem
