import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Candidate from './pages/Candidates/Candidate';
import Job from './pages/Job/Job';
import Notfound from './pages/NotFound/Notfound';
export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout/>,
      children: [
        { index: true, element: <Candidate/> },
        { path: 'job', element: <Job/> },
        { path: 'app', element: <Notfound/> },
        { path: 'message', element: <Notfound/> },
        { path: 'calendar', element: <Notfound/> },
        { path: 'referral', element: <Notfound/> },
        { path: 'career', element: <Notfound/> },
        { path: 'employee', element: <Notfound/> },
        { path: 'document', element: <Notfound/> },
        { path: 'report', element: <Notfound/> },
      ],
    },
  ]);
  

  return routes;
}
