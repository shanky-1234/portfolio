import React from "react";
import Heading from "./shared/Heading";

function CaseStudyOverview() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="section-wrapper ">
        <div className="flex flex-col md:flex-row md:justify-between ">
          <Heading num={"01"} heading={"OVERVIEW"} />
          <div className="flex-2">
            <div className="mb-2">
              <h5>
                Designing a Digital Presence for Himalayan Aviation
              </h5>
            </div>
            <div>
              <p className="text-text text-[16px] md:text-xl!">
                Mustang Heli needs was to established itself as a helicopter
                service built for the Himalayas and reaching the highest points
                in the world. <br />
                <br />
                The company needed a stronger digital presence that reflected
                its experience operating in the Himalayas and its ability to
                reach some of the world’s most challenging destinations. The
                existing brand experience required a more modern, credible, and
                visually compelling website that could communicate its services
                clearly while building trust among travelers, corporate clients,
                and emergency-service users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyOverview;
