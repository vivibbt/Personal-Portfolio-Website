import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css"
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  return (
    <div className='experience'>
       <VerticalTimeline lineColor='rgb(165, 79, 79)'>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2017 - 2021' 
          iconStyle={{background: 'rgb(165, 79, 79)', color:'#fff'}}
          icon={<SchoolIcon />}>

            <h3 className='vertical-timeline-element-title'> Stuyvesant High School - New York, New York </h3>
            <p> Stuyvesant Diploma</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date='June 2021 - August 2021' 
          iconStyle={{background: 'rgb(246, 221, 81)', color:'#fff'}}
          icon={<WorkIcon />}>

            <h3 className='vertical-timeline-element-title'>  A+ Academy - Brooklyn, NY</h3>
            <p className="vertical-timeline-element-subtitle"> Teaching Assistant </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2021 - 2025' 
          iconStyle={{background: 'rgb(165, 79, 79)', color:'#fff'}}
          icon={<SchoolIcon />}>

            <h3 className='vertical-timeline-element-title'> Cornell University - Ithaca, New York </h3>
            <p> B.S. in Computer Science</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date='June 2022- September 2022' 
          iconStyle={{background: 'rgb(246, 221, 81)', color:'#fff'}}
          icon={<WorkIcon />}>

            <h3 className='vertical-timeline-element-title'> Lalela Innovations - Cape Town, South Africa </h3>
            <p className="vertical-timeline-element-subtitle"> Software Engineering Intern </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date='May 2023 - Present' 
          iconStyle={{background: 'rgb(246, 221, 81)', color:'#fff'}}
          icon={<WorkIcon />}>

            <h3 className='vertical-timeline-element-title'> American Energy Society </h3>
            <p className="vertical-timeline-element-subtitle"> Software Engineering Intern </p>
          </VerticalTimelineElement>
       </VerticalTimeline>
    </div>
   
  )
}