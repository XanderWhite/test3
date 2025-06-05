// import { useLocation, useParams } from 'react-router-dom';

// const NewsDetail = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const newsItem = location.state?.newsItem;

//   // Или загрузить данные по ID:
//   // useEffect(() => { fetch(`/local/ajax/get_news_detail.php?id=${id}`)... }, [id]);

//   return (
//     <div>
//       {newsItem ? (
//         <>
//           <h1>{newsItem.NAME}</h1>
//           <img src={newsItem.PREVIEW_PICTURE} alt={newsItem.NAME} />
//           <div dangerouslySetInnerHTML={{ __html: newsItem.DETAIL_TEXT }} />
//         </>
//       ) : (
//         <p>Новость не найдена</p>
//       )}
//     </div>
//   );
// };