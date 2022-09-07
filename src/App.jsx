import "./app.scss"
import Topbar from './components/topbar/Topbar'
import Intro from "./components/introbar/Intro";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";


function App() {
  return (
    <div className="app">
      <Topbar> </Topbar>
      <div className="sections">
        <Intro></Intro>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>





      </div>


    </div>
  );
}

export default App;
