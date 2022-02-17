// import { useState } from "react";
import { TeamMember } from "./TeamMember";
import mike from '../images/mike.png';

export const OurTeam = () => {
    // const [about, setAbout] = useState(true);
    let personData = {
        name: "Mike",
        position: "APP / UX / AR & Product Designer",
        about: "хаха",
        quoteAbout: "хохо",
        img: mike
    }

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
                <TeamMember person={personData} />
                <TeamMember person={personData} />
                <TeamMember person={personData} />
                <TeamMember person={personData}  />
            </div>
        </div>
    );
};
