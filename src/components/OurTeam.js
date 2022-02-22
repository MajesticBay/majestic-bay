import { TeamMember } from "./TeamMember";
import mike from '../images/mike.png';

export const OurTeam = () => {
    let peopleData = [
        {
            name: "Mike",
            position: "APP / UX / AR & Product Designer",
            about: "For more than 7 years I have been helping brands develop their business through design",
            quoteAbout: "Mike — is the best designer on both sides of the ocean (smiley face)",
            img: mike
        },
        {
            name: "Sergey",
            position: "Fullstack Developer",
            about: "I love breaking the rules and putting them back together in my way to create attractive, innovative designs. I also love creating beautiful and user-friendly sites, creating the perfect balance of form and function.",
            quoteAbout: "Developer with a human soul.",
            img: mike
        },
        {
            name: "Heorhii",
            position: "Front+Back End/DB/Cloud/DevOps/ML",
            about: "There are no unsolvable tasks in this world. If there is at least one - we will find the magic to make it solvable. I adore building any kind of architecture - from tiny one-page applications to enormous scalable online services. I like & ready to develop and move your recourse to the cloud right away. I teach kids how to install Linux.",
            quoteAbout: "Joe - that guy from your side of the ocean who knows how to build and deliver better.",
            img: mike
        },
        {
            name: "Liliya",
            position: "Fullstack Developer",
            about: "Your success always inspires me.",
            quoteAbout: "When you find an idea that you just can't stop thinking about, that's probably a good one to pursue. Some of the world's most remarkable ideas have started with just a nagging feeling. I am the one who does the actual implementation of the existing idea.",
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
