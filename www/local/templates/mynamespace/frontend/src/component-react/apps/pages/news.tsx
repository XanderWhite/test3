import Button from 'components/button';
import Select from 'components/select';
import Title from 'components/title';
import useWindowDimensions from 'hooks/useWindowDimensions';
import React, { useEffect, useState } from 'react';
import { useDefaultSelect } from 'components/select/styles';
import ModalController from 'modules/modal/controller';
import Store from 'modules/modal/lib/Store';
import { Modal } from 'modules/modal';
import { useNewsStyles } from './news.styles';


// const News = () =>  {
// const news = window.newsData || [];
// console.log(">"+news.items+"<");
//   return (
//     <>
//     <h2>{news.title}</h2>
//     <div>
//       {news.items.map(item => (
//         <div key={item.ID}>
//           <h3>{item.NAME}</h3>
//           <p>{item.PREVIEW_TEXT}</p>
//         </div>
//       ))}
//     </div>
//     </>

//   );

//==================================================================================
// const News = () =>  {

// interface NewsItem {
//   ID: string;
//   NAME: string;
//   PREVIEW_TEXT: string;
//   PREVIEW_PICTURE: string | null;
//   DETAIL_PAGE_URL: string;
// }

//    const [news, setNews] = useState<NewsItem[]>([]);
//    const classes = useNewsStyles();


//     useEffect(() => {
//         const loadNews = async () => {
//           try {
//             const response = await fetch('/local/ajax/get_news.php');

//                 const result = await response.json();
//                 if (result.success) {
//                     setNews(result.data);
//                 }
//             } catch (error) {
//                 console.error('Error loading news:', error);
//             }
//         };

//         loadNews();
//     }, []);

//     return (
//             <div className={classes.newsContainer}>
//       {news.map(item => (
//         <div key={item.ID} className={classes.newsItem}>
//           <a
//             href={item.DETAIL_PAGE_URL}
//                      target="_blank"
//                      className={classes.linkItem}
//           >
//           <img
//             src={item.PREVIEW_PICTURE || '/default-news.jpg'}
//             alt={item.NAME}
//             className={classes.newsImage}
//           />
//           <div className={classes.newsContent}>
//             <h3 className={classes.newsTitle}>{item.NAME}</h3>
//             <p className={classes.newsPreview}>{item.PREVIEW_TEXT}</p>
//           </div>
//           </a>
//         </div>
//       ))}
//     </div>

//     );

// };

// export default News;

interface NewsItem {
  ID: string;
  NAME: string;
  PREVIEW_TEXT: string;
  PREVIEW_PICTURE: string | null;
  DETAIL_PAGE_URL: string;
  DETAIL_TEXT?: string; // Добавляем для детальной страницы
}

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

    loadNewsDetail();
  }, [id]);

  if (!newsItem) return <div className={classes.loading}>Загрузка...</div>;

  return (
    <div className={'classes.newsDetailContainer'}>
      123
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

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const classes = useNewsStyles();

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch('/local/ajax/get_news.php');
        const result = await response.json();
        if (result.success) {
          setNews(result.data);
        }
      } catch (error) {
        console.error('Error loading news:', error);
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
            target="_blank"
            className={classes.linkItem}
          >
            <img
              src={item.PREVIEW_PICTURE || '/default-news.jpg'}
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

const News = () => {

  const path = window.location.pathname;

  const isDetailPage = path.split('/')[1] == 'news';

  if (isDetailPage) {
    const id = path.split('/')[2];
    if (id) {
return (
       <>
<div>{id}</div>
<NewsDetail id={id}/>
  </>);
    }
  }

  return (
  <>
<div>{isDetailPage}</div>
<NewsList />;
  </>);
};

export default News;