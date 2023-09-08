
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';

import Home from './components/home/Home';
import Profile from './components/profile/Profile';

function App(){

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index path='home' element={<Home />} />
        </Route>
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