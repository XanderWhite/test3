import React from 'react'

import { createRoot } from 'react-dom/client';
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
      root.render(<Home />);
    }
  });
}

export { App }