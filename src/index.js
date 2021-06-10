import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { FavoritesContextProvider } from './store/FavoritesContext'
// import FavoriteContext from './store/FavoritesContext'

ReactDOM.render(
  <FavoritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesContextProvider>,
  document.getElementById('root')
);
