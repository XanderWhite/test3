import { createUseStyles } from 'react-jss';

export const useNewsStyles = createUseStyles({
  newsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  newsItem: {
    position: 'relative',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#fff',

    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    },
  },
  newsImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    display: 'block',
  },
  newsContent: {
    padding: '15px',
  },
  newsTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.2rem',
    color: '#333',
  },
  newsPreview: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: '#666',
  },
  error: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: '#ff4d4f',
  },
  linkItem: {
    textDecoration: 'none',
  }
});



export const useNewsDetailStyles = createUseStyles({
  newsDetailContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  newsDetailTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.2rem',
    color: '#333',
  },
  newsDetailText: {
    color: '#666',
    maxWidth: '600px',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  newsDetailImage: {
    maxWidth: '400px',
    width: '100%',
    objectFit: 'contain'
  },
  newsDetailLink:{
    fontSize: '20px',
    backgroundColor: 'black',
    padding: '10px 20px',
    borderRadius: '30px',
    textDecoration:'none',
    color: '#fff',
    transition: '0.3s',
    '&:hover': {
        scale: '1.1',
       boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      transform: 'translateY(-5px)',

    }
  }
});