import { useEffect, useState } from 'react';
import { useNewsDetailStyles, useNewsStyles } from './news.styles';
import { NewsItem } from './types';
import { Link, useParams } from 'react-router-dom';

const NewsDetail = () => {

    const {id} = useParams();

  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const classes = useNewsDetailStyles();

  useEffect(() => {
    const loadNewsDetail = async () => {
      try {
        const response = await fetch(`/local/ajax/get_news_detail.php?id=${id}`,{
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});
        const result = await response.json();
        if (result.success) {
          setNewsItem(result.data);
        }
      } catch (error) {
        console.error('Error loading news detail:', error);
      }
    };

    loadNewsDetail();
  }, [id]);

  if (!newsItem) return <div>Загрузка...</div>;

  return (
    <div className={classes.newsDetailContainer}>
      <h1 className={classes.newsDetailTitle}>{newsItem.NAME}</h1>
      {newsItem.PREVIEW_PICTURE && (
        <img
          src={newsItem.PREVIEW_PICTURE}
          alt={newsItem.NAME}
          className={classes.newsDetailImage}
        />
      )}
      <div
        className={classes.newsDetailText}
        dangerouslySetInnerHTML={{ __html: newsItem.DETAIL_TEXT || '' }}
      />
    < Link to="/news" className={classes.newsDetailLink}>назад к новостям</Link>
    </div>

  );
};

export default NewsDetail;