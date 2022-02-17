import { useState } from 'react';
import styled from 'styled-components';
import mike from '../images/mike.png';

const About = styled.p`
    display: ${({ about }) => (about) ? "block" : "none"};
    margin-top: 1.4rem;
    margin-bottom: 3.5rem;
    font-size: 2.4rem;
    line-height: 29.05px;
    color: var(--color-white);
`;

const QuoteAbout = styled.p`
    display: ${({ about }) => (about) ? "none" : "block"};
    margin-top: 1.4rem;
    margin-bottom: 3.5rem;
    font-size: 2.4rem;
    line-height: 29.05px;
    color: var(--color-secondary);
`;

export const TeamMember = ({name}) => {
    const [about, setAbout] = useState(true);

    return (
        <div className="member">
            <div className="member__top">
                <img className="member__emoji" src={mike} alt="Mike emoji" />
                <h3 className="member__name">{name}</h3>
                <p className="member__title">APP / UX / AR & Product Designer</p>
            </div>
            {/* <p className="member__about"><span className="green">From Mike:</span>{'\u00A0'}For more than 7 years I have been helping brands develop their business through design.{'\u00A0'}<span className="italic">Visual support of the brand — my task.</span>{'\u00A0'}I like to work on projects from the start and use all my experience to do the job perfectly.</p> */}
            <About about={about} onMouseEnter={() => setAbout(!about)}>
                <span className="green">From Mike:</span>{'\u00A0'}For more than 7 years I have been helping brands develop their business through design.{'\u00A0'}<span className="italic">Visual support of the brand — my task.</span>
                {'\u00A0'}I like to work on projects from the start and use all my experience to do the job perfectly.
            </About>
            {/* <p className="member__quote-about">Mike — is the best designer on both sides of the ocean :)</p> */}
            <QuoteAbout about={about} onMouseLeave={() => setAbout(!about)}>
                Mike — is the best designer on both sides of the ocean (smiley face)
            </QuoteAbout>
            <a className="member__contact" href="http://localhost:3000/">contact Mike</a>
        </div>
    )
}