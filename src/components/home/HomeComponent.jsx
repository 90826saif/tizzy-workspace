import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "./home-banner/HomeBanner";
import ChooseBusiness from "./choose-business/ChooseBusiness";
import TeamNeed from "./team-need/TeamNeed";
import WorkBetter from "./work-better/WorkBetter";
import Testimonial from "./testimonial/Testimonial";
import Faqs from "./faqs/Faqs";

const HomeComponent = () => {
  return (
    <Layout>
      <HomeBanner />
      <ChooseBusiness />
      <TeamNeed />
      <WorkBetter />
      <Testimonial />
      <Faqs />
    </Layout>
  );
};

export default HomeComponent;
