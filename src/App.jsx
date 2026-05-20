import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (

    <div className="w-full overflow-x-hidden">

      <MainLayout>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* PROJECTS */}
          <Route
            path="/projects"
            element={<Projects />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* 404 PAGE */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </MainLayout>

    </div>
  );
}

export default App;