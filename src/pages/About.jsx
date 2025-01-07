import React from "react";
import {
  PageTitle,
  TeamSection,
  Subscribe,
  StatsSection,
  TestimonialsSection,
  VideoSection,
} from "../components/layout";
function About() {
  return (
    <div>
      <PageTitle classes="py-[200px] mb-20" />
      <TeamSection />
      <StatsSection />
      <VideoSection />
      <TestimonialsSection />
      <Subscribe />
    </div>
  );
}

export default About;
