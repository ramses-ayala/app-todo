import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';

import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';

function App(){

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />

        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>

        <Route 
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path='*' element={<p>Page not found :(</p>}/>
      </Routes>
    </Router>
  );
}

export default App;