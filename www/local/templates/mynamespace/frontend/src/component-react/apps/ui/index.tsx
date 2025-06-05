import React from 'react'

import { createRoot } from 'react-dom/client';
import News from 'apps/pages/news';
import Home from 'apps/pages/home';

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
      root.render(<News />);
    }
  });
}

export { App }

// const App = () => {
//   document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('app');
//     if (container) {
//       const root = createRoot(container);
//       root.render(
//        <Router>
//       <Routes>
//         <Route path="/news" element={<News />} />
//       </Routes>
//     </Router>);
//     }
//   });
// }

// export { App }