import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Services from "./components/services.js";
import Works from "./components/works.js";
import Teams from "./components/teams.js";
import Testimonials from "./components/testimonials.js";
import Pricing from "./components/pricing.js";
import Blog from "./components/blog.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Home />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
