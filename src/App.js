import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';

import CourseDashboard from './components/CourseDashboard';
import Dashboard from './components/Dashboard';
import CreateCategory from './components/CreateCategory';
import Navbar from './components/Navigation/Navbar';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import EditCategory from './components/EditCategory';
import UpdateCourse from './components/UpdateCourse';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import CreateCourse from './components/CreateCourse';
import Assignment from './components/Assignment'

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Router>
            <Navbar />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/addcategory' component={CreateCategory} />
            <Route exact path='/editcategory/:id' component={EditCategory} />
            <Route exact path="/courses" component={CourseDashboard} />
            <Route exact path="/createCourse" component={CreateCourse} />
            <Route exact path="/updateCourse/:id" component={UpdateCourse} />
            <Route exact path="/assignments" component={Assignment} />
          </Router>
        </div>
      </Provider>
      <ToastContainer
        autoClose={1500}
        position="top-right"
        hideProgressBar
        theme="light"
      />
    </>
  );
}

export default App;
