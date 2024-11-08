import React, { useState } from "react";
import "./Work.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import WorkList from "./WorkList";

const Work = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="work container section" id="work">
            <div className="max-container">
                <div className="work__container">
                    <h3 className="section__title">Experience</h3>
                    <Tabs
                        className="tabs"
                        selectedIndex={tabIndex}
                        onSelect={(index) => setTabIndex(index)}
                        selectedTabClassName={"is-active"}
                        selectedTabPanelClassName={"is-active"}>
                        <TabList className="tab__list">
                           {WorkList.map((experience) => (
                               <Tab className="tab" key={`company-${experience.id}`}>
                                  <Button>{experience.company}</Button>
                               </Tab>
                            ))}
                        </TabList>
                        {WorkList.map((experience) => {
                            const { id, company, yearsActive, title, link, image, information } = experience;
                            return (
                                <TabPanel className="tab__panel" key={`panel-${id}`}>
                                    <h2 className="tab__panel-title">
                                        {title} @ {company}
                                    </h2>
                                    <p className="tab__panel-subtitle">{yearsActive}</p>
                                    {/* Render the image */}
                                    <img src={image} alt={`${title} at ${company}`} className="experience-image" />
                                    <ul className="tab__panel-list">
                                        {information.map((info, index) => (
                                            <li key={`info-${index}`}>{info}</li>
                                        ))}
                                    </ul>
                                    <div className="view-more">
                                        <a href={link} target="_blank" className="link" rel="noopener noreferrer">View More</a>
                                    </div>
                                </TabPanel>
                            );
                        })}
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Work;

//////////////////////////////// Work Experience //////////////////////////////////////

