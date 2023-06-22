import * as React from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Division from "@/components/Division";
import Member from "@/components/Member";
import Achievement from "@/components/Achievement";
import Footer from "@/components/Footer";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle="Barunastra" />

      <main>
        <Navbar />
        <LandingPage />
        <About />
        <Division />
        <Member />
        <Achievement />
        <Footer />
      </main>
    </Layout>
  );
}
