// import { useState } from "react";
import { TeamMember } from "./TeamMember";
import mike from '../images/mike.png';

export const OurTeam = () => {
    // const [about, setAbout] = useState(true);
    let peopleData = [
        {
            name: "Mike",
            position: "APP / UX / AR & Product Designer",
            about: "хаха",
            quoteAbout: "хохо",
            img: mike
        },
        {
            name: "Sergey",
            position: "Fullstack Developer",
            about: "хаха",
            quoteAbout: "хохо",
            img: mike
        },
        {
            name: "Heorhii",
            position: "Fullstack Developer",
            about: "хаха",
            quoteAbout: "хохо",
            img: mike
        },
        {
            name: "Liliya",
            position: "Fullstack Developer",
            about: "хаха",
            quoteAbout: "хохо",
            img: mike
        }
    ]

    const teamMembers = peopleData.map((person) => (
        <TeamMember person={person} />
    ))

    return (
        <div className="our-team">
            <div className="our-team__header-container">
                <h1 className="header">
                    our
                    <br />
                    team
                </h1>
                <p className="header-description">
                    We are excellent experts. We are excellent experts. We are excellent
                    experts.
                </p>
            </div>
            <div className="our-team__members-container">
                { teamMembers }
            </div>
        </div>
    );
};
