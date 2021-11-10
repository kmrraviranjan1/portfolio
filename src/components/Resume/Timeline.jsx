import React from "react";
import { FaSchool } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
  return (
    <VerticalTimeline lineColor="blue">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(33, 150, 243)", maxWidth: "70vw" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="March 2021 - Present"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Full-Stack Web Development
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Masai School, Remote Coding Bootcamp
        </h4>
        <p>MERN Stack, Data-Structure, Collaboration, Soft-skills</p>
        <p>React, Redux, NodeJs, Express, MongoDB, Javascript, CSS3, HTML5</p>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2018 - Jan 2021"
        contentStyle={{ background: "rgb(33, 150, 243)", maxWidth: "70vw" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          Instructor, Agastya International Foundation
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Patna, Bihar</h4>
        <p>Active engagment with 700+ students</p>
        <p>Organising State, National level events and competitions</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(33, 150, 243)", maxWidth: "70vw" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2013 - 2017"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          B.E in Electronics and Telecommunication Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Chouksey Engineering College, Bilaspur, Chhattisgarh
        </h4>
        <p>Percentage: 73%</p>
        <p>
          {" "}
          Won 1st prize in circuit making competition at Junkyard - Techno-Tech
          3.0 Technical Fest, created light sensing automatic room light on-off
          system with help of sensors and pcb.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(33, 150, 243)", maxWidth: "70vw" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Higher Secondary School Education
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          St. Dominic Savios High School, Patna, Bihar
        </h4>
        <p>12th-percentage: 64%</p>
        <p>10th-percentage: 82%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
