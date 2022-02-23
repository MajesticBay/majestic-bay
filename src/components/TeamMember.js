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
            <About aboutText={showAboutText} onMouseEnter={() => setShowAboutText(!showAboutText)}>
                <span className="green">From {name}: </span>
                {about}
            </About>
            <QuoteAbout aboutText={showAboutText} onMouseLeave={() => setShowAboutText(!showAboutText)}>
                { quoteAbout }
            </QuoteAbout>
            <a className="member__contact" href="http://localhost:3000/">contact {name}</a>
        </div>
    )
}