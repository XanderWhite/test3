import React from 'react'

import { createRoot } from 'react-dom/client';
import NewsDetail from 'apps/pages/news-detail';
import NewsList from 'apps/pages/news-list';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// const App: React.FC = () => {
// 	return (
// 		<>
// 		{/* <Home/> */}
// 		</>
// 	)
// }

const App = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app');
    if (container) {
      const root = createRoot(container);
      root.render(
      <BrowserRouter>
        <Routes>
          <Route path='/news' element = {<NewsList/>}/>
          <Route path='/news/:id' element = {<NewsDetail/>}/>
        </Routes>
      </BrowserRouter>
      );
    }
  });
}

export { App }