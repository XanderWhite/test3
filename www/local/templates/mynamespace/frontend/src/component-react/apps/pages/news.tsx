import NewsDetail from './news-detail';
import NewsList from './news-list';


const News = () => {

	const path = window.location.pathname;

	const arr = path.split('/');

	if (arr[1] == 'news' && arr[2])
					return <NewsDetail id={arr[2]}/>

	return <NewsList />
};

export default News;