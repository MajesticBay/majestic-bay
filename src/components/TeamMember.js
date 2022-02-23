import { useState } from 'react';
import styled from 'styled-components';

const About = styled.p`
    display: ${({ aboutText }) => (aboutText) ? "block" : "none"};
    margin-top: 1.4rem;
    margin-bottom: 3.5rem;
    font-size: 2.4rem;
    line-height: 29.05px;
    color: var(--color-white);
`;

const QuoteAbout = styled.p`
    display: ${({ aboutText }) => (aboutText) ? "none" : "block"};
    margin-top: 1.4rem;
    margin-bottom: 3.5rem;
    font-size: 2.4rem;
    line-height: 29.05px;
    color: var(--color-secondary);
`;

export const TeamMember = ({person: {name, position, about, quoteAbout, img}}) => {
    const [showAboutText, setShowAboutText] = useState(true);

    return (
        <div className="member">
            <div className="member__top">
                <img className="member__emoji" src={img} alt="Team member emoji" />
                <h3 className="member__name">{name}</h3>
                <p className="member__title">{position}</p>
            </div>
            {/* <p className="member__about"><span className="green">From Mike:</span>{'\u00A0'}For more than 7 years I have been helping brands develop their business through design.{'\u00A0'}<span className="italic">Visual support of the brand — my task.</span>{'\u00A0'}I like to work on projects from the start and use all my experience to do the job perfectly.</p> */}
            <About aboutText={showAboutText} onMouseEnter={() => setShowAboutText(!showAboutText)}>
                <span className="green">From {name}:</span>
                {/* //////////////////////////////////////// */}
                {/* {'\u00A0'}For more than 7 years I have been helping brands develop their business through design.{'\u00A0'}<span className="italic">Visual support of the brand — my task.</span>
                {'\u00A0'}I like to work on projects from the start and use all my experience to do the job perfectly. */}
                {/* //////////////////////////////////////// */}
                {about}
            </About>
            {/* <p className="member__quote-about">Mike — is the best designer on both sides of the ocean :)</p> */}
            <QuoteAbout aboutText={showAboutText} onMouseLeave={() => setShowAboutText(!showAboutText)}>
                {/* Mike — is the best designer on both sides of the ocean (smiley face) */}
                { quoteAbout }
            </QuoteAbout>
            <a className="member__contact" href="http://localhost:3000/">contact {name}</a>
        </div>
    )
}