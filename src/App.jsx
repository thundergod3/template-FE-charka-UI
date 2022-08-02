import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import * as routes from 'constants/routes';

import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/index.scss';

// Lazy Pages
const Homepage = lazy(() => import('./pages/homepage'));

const App = () => {
  return (
    <React.Suspense fallback={<></>}>
      {/* COMMON COMPONENT */}
      <ToastContainer />

      {/* ROUTES */}
      <Route exact path={routes.HOMEPAGE} component={Homepage} />
    </React.Suspense>
  );
};

export default App;
