import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header, Footer } from "./site/Layout";
import Home from "./site/Home";
import SignalRibbon from "./site/SignalRibbon";
const HelmCaseStudy = lazy(() => import("./site/HelmCaseStudy"));
export default function App() {
  const caseStudy = /^\/work\/helm\/?$/.test(window.location.pathname);
  return (
    <>
      <Analytics />
      <SignalRibbon />
      <Header caseStudy={caseStudy} />
      <main id="main" className="page-shell" tabIndex="-1">
        <Suspense
          fallback={
            <p className="page-loading" role="status">
              Opening the case study…
            </p>
          }
        >
          {caseStudy ? <HelmCaseStudy /> : <Home />}
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
