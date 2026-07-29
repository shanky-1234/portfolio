import { useEffect, useRef,useLayoutEffect} from "react";
import { Route, Routes, useLocation } from "react-router";

import gsap, { ScrollToPlugin, SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import { UseMenu } from "./context/MenuContext";

import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import GoBack from "./components/casestudy/GoBack";

import Home from "./pages/Home";
import MustangHeli from "./pages/MustangHeli/MustangHeli";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  SplitText
);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

function App() {
  const location = useLocation();
  const smootherRef = useRef(null);

  const { menu, setMenu } = UseMenu();

  const isHomePage = location.pathname === "/";
  const isCaseStudy = location.pathname.startsWith("/case-study");

  // Create ScrollSmoother only once
  useGSAP(() => {
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (!wrapper || !content) return;

    smootherRef.current = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    const handleLoad = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("load", handleLoad);

    document.fonts?.ready?.then(() => {
      ScrollTrigger.refresh(true);
    });

    return () => {
      window.removeEventListener("load", handleLoad);

      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);

  // Handle route changes
 useLayoutEffect(() => {
    return () => {
      smootherRef.current?.scrollTop(0);
      ScrollTrigger.clearScrollMemory("manual");
    };
}, [location.pathname]);

useEffect(() => {
    setMenu(false);
    let firstFrame, secondFrame;
    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
    };
}, [location.pathname, setMenu]);

  return (
    <>
      {/* Fixed elements remain outside ScrollSmoother */}
      <LoadingScreen key={location.key} />

      {isHomePage && <NavBar />}

      {isCaseStudy && <GoBack />}

      {isHomePage && menu && (
        <div
          onClick={() => setMenu(false)}
          className="
            fixed inset-0 z-20
            h-screen w-screen
            bg-secondary/50
          "
        />
      )}

      {/* Only one smooth wrapper in the application */}
      <div id="smooth-wrapper">
        <div id="smooth-content" className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/case-study/MustangHeli"
              element={<MustangHeli />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;