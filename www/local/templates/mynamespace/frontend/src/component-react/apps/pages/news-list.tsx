import { useEffect, useState } from 'react';
import { useNewsStyles } from './news.styles';
import { NewsItem } from './types';

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const classes = useNewsStyles();

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch('/local/ajax/get_news.php',{
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
        });

        const result = await response.json();
        if (result.success) {
          setNews(result.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    loadNews();
  }, []);

  return (
    <div className={classes.newsContainer}>
      {news.map(item => (
        <div key={item.ID} className={classes.newsItem}>
          <a
            href={item.DETAIL_PAGE_URL}
            className={classes.linkItem}
          >
            <img
              src={item.PREVIEW_PICTURE}
              alt={item.NAME}
              className={classes.newsImage}
            />
            <div className={classes.newsContent}>
              <h3 className={classes.newsTitle}>{item.NAME}</h3>
              <p className={classes.newsPreview}>{item.PREVIEW_TEXT}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
