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

export const TeamMember = ({person}) => {
    const [aboutText, setAboutText] = useState(true);

    return (
        <div className="member">
            <div className="member__top">
                <img className="member__emoji" src={person.img} alt="Team member emoji" />
                <h3 className="member__name">{person.name}</h3>
                <p className="member__title">{person.position}</p>
            </div>
            {/* <p className="member__about"><span className="green">From Mike:</span>{'\u00A0'}For more than 7 years I have been helping brands develop their business through design.{'\u00A0'}<span className="italic">Visual support of the brand — my task.</span>{'\u00A0'}I like to work on projects from the start and use all my experience to do the job perfectly.</p> */}
            <About aboutText={aboutText} onMouseEnter={() => setAboutText(!aboutText)}>
                <span className="green">From {person.name}:</span>
                {/* //////////////////////////////////////// */}
                {/* {'\u00A0'}For more than 7 years I have been helping brands develop their business through design.{'\u00A0'}<span className="italic">Visual support of the brand — my task.</span>
                {'\u00A0'}I like to work on projects from the start and use all my experience to do the job perfectly. */}
                {/* //////////////////////////////////////// */}
                {person.about}
            </About>
            {/* <p className="member__quote-about">Mike — is the best designer on both sides of the ocean :)</p> */}
            <QuoteAbout aboutText={aboutText} onMouseLeave={() => setAboutText(!aboutText)}>
                {/* Mike — is the best designer on both sides of the ocean (smiley face) */}
                { person.quoteAbout }
            </QuoteAbout>
            <a className="member__contact" href="http://localhost:3000/">contact {person.name}</a>
        </div>
    )
}