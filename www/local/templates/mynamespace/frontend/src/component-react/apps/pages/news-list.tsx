import { useEffect, useState } from 'react';
import { useNewsStyles } from './news.styles';
import { NewsItem } from './types';
import { useLocation } from 'react-router-dom';
import Search from 'components/search/search';

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const classes = useNewsStyles();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filter = searchParams.get('filter') || '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/local/ajax/get_news.php?filter=${filter}`, {
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
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, [filter]);

  return (
    <>
      <Search />
      <div className={classes.newsContainer}>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : news.length === 0 && filter ? (
          <div>Поиск не дал результатов</div>
        ) : (
          news.map(item => (
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
          ))
        )}
      </div>
    </>
  );
};

export default NewsList;