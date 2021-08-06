import './App.css';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage.page'));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        </Route>
        <Route path="/movies/:id">
          <Suspense fallback={<div>Loading...</div>}>
            <MoviePage />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
