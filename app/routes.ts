import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { Films } from './components/Films';
import { Sources } from './components/Sources';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'quiz', Component: Quiz },
      { path: 'films', Component: Films },
      { path: 'sources', Component: Sources },
    ],
  },
]);
