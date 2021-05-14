import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import AOS from 'aos'
import "aos/dist/aos.css"

import AllBlogs from './pages/blog/blogs'
import Home from './pages/home/home'
import Navbar from './components/common/nav';
import SingleBlog from './pages/blog/singleBlog';
import AllCategories from './pages/blog/categories';
import SingleCategory from './pages/blog/singleCategory';
import AllProjects from './pages/portfolio/projects';
import SingleProject from './pages/portfolio/singleProject';
import Footer from './components/common/footer';
import Courses from './pages/tutor/courses';
import About from './pages/others/about';
import Contact from './pages/others/contact';
import NotFound from './pages/others/notFound';

function App() {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Router>
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blogs">
            <AllBlogs />
          </Route>
          <Route exact path="/blogs/:slug">
            <SingleBlog />
          </Route>
          <Route exact path="/categories">
            <AllCategories />
          </Route>
          <Route exact path="/categories/:slug">
            <SingleCategory />
          </Route>
          <Route exact path="/projects">
            <AllProjects />
          </Route>
          <Route exact path="/projects/:slug">
            <SingleProject />
          </Route>
          <Route exact path='/courses'>
            <Courses />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
