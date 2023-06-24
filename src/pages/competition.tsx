import * as React from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainCompetition from "@/components/MainCompetition";
import AboutCompetition from "@/components/AboutCompetition";
import ElectricalDiagram from "@/components/ElectricalDiagram";
import Robot from "@/components/Robot";
import RobotPreview from "@/components/RobotPreview";
import Timeline from "@/components/Timeline";
import NavbarCompe from "@/components/NavbarCompe";
import RobotInside from "@/components/RobotInside";
import GeneralArrange from "@/components/GeneralArrange";
import SideView from "@/components/SideView";

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
      <Seo templateTitle="Barunastra" siteName="| Competition" />

      <main>
        <NavbarCompe />
        <MainCompetition />
        <AboutCompetition />
        <Robot />
        <RobotPreview />
        <RobotInside />
        <GeneralArrange />
        <SideView />
        <ElectricalDiagram />
        <Timeline />
        <Footer />
      </main>
    </Layout>
  );
}
