import React, { useState } from "react";
import "./Education.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "../work/Button";
import EducationList from "./EducationList";

const Education = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="education container section" id="education">
            <div className="max-container">
                <div className="education__container">
                    <h3 className="section__title">Education</h3>
                    <Tabs
                        className="tabs"
                        selectedIndex={tabIndex}
                        onSelect={(index) => setTabIndex(index)}
                        selectedTabClassName={"is-active"}
                        selectedTabPanelClassName={"is-active"}>
                        <TabList className="tab__list">
                            {EducationList.map((edu) => (
                                <Tab className="tab" key={`education-tab-${edu.id}`}>
                                    <Button>{edu.institution}</Button>
                                </Tab>
                            ))}
                        </TabList>
                        {EducationList.map((edu) => {
                            const { id, institution, degree, yearsAttended, link, image, details } = edu;
                            return (
                                <TabPanel className="tab__panel" key={`education-panel-${id}`}>
                                    <h2 className="tab__panel-title">
                                        {degree} @ {institution}
                                    </h2>
                                    <p className="tab__panel-subtitle">{yearsAttended}</p>
                                    {/* Render the image */}
                                    <img src={image} alt={`${degree} at ${institution}`} className="education-image" />
                                    <ul className="tab__panel-list">
                                        {details.map((detail, index) => (
                                            <li key={`education-detail-${id}-${index}`}>
                                                {detail}
                                            </li>
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

export default Education;

//////////////////////////////// Education //////////////////////////////////////

