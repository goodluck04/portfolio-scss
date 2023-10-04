import React from 'react'
import data from '../assets/data.json'

const Timeline = () => {
  return (
    <div id='timeline'>
        <div className='timelineBox'>
            {
                data.projects.map((item, index) =>(
                    <TimelineItem
                        heading={item.skills}
                        // text={item.date}
                        index={index}
                        key={item.title}    
                     />
                ))
            }
        </div>
    </div>
  )
};


const TimelineItem = ({heading, text, index}) => (
    <div
        className={`timelineItem ${
            index % 2 === 0 ? "leftTimeline" : "rightTimeline"
        }`}
    >
        <div>
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    </div>
);


export default Timeline