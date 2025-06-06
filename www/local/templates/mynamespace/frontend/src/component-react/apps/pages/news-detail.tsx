import { useEffect, useState } from 'react';
import { useNewsStyles } from './news.styles';
import { NewsItem } from './types';

const NewsDetail = ({ id }: { id: string|number }) => {
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const classes = useNewsStyles();

  useEffect(() => {
    const loadNewsDetail = async () => {
      try {
        const response = await fetch(`/local/ajax/get_news_detail.php?id=${id}`);
        const result = await response.json();
        if (result.success) {
          setNewsItem(result.data);
        }
      } catch (error) {
        console.error('Error loading news detail:', error);
      }
    };
no
    loadNewsDetail();
  }, [id]);

  if (!newsItem) return <div className={classes.loading}>Загрузка...</div>;

  return (
    <div className={'classes.newsDetailContainer'}>
      <h1 className={'classes.newsDetailTitle'}>{newsItem.NAME}</h1>
      {newsItem.PREVIEW_PICTURE && (
        <img
          src={newsItem.PREVIEW_PICTURE}
          alt={newsItem.NAME}
          className={'classes.newsDetailImage'}
        />
      )}
      <div
        className={'classes.newsDetailText'}
        dangerouslySetInnerHTML={{ __html: newsItem.DETAIL_TEXT || '' }}
      />
    </div>
  );
};

export default NewsDetail;