import DefaultLayout from './layouts/Default';
import TVList from './pages/TVList';
import TVDetails from './pages/TVDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <DefaultLayout>
      <TVList></TVList>
    </DefaultLayout>
  },
  {
    path: '/tv/:id',
    main: () => <DefaultLayout>
      <TVDetails></TVDetails>
    </DefaultLayout>
  }
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {
  return (
    <Router>
      <Switch>
        {getRoutes()}
      </Switch>
    </Router>
  );
}

export default App;
