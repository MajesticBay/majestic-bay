import { TeamMember } from "./TeamMember";
import mike from '../../images/mike.png';

export const OurTeam = () => {
    const peopleData = [
        {
            name: "Mike",
            position: "APP / UX / AR & Product Designer",
            about: <span>For more than 7 years I have been helping brands develop their business through design. <span className="italic">Visual support of the brand — my task.</span> I like to work on projects from the start and use all my experience to do the job perfectly.</span>,
            quoteAbout: "Mike — is the best designer on both sides of the ocean (smiley face)",
            img: mike
        },
        {
            name: "Sergey",
            position: "Front+Back End",
            about: "I love breaking the rules and putting them back together in my way to create attractive, innovative designs. I also love creating beautiful and user-friendly sites, creating the perfect balance of form and function.",
            quoteAbout: "Sergey is a developer with a human soul.",
            img: mike
        },
        {
            name: "Heorhii",
            position: "Front+Back End / DB / Cloud / DevOps / ML",
            about: "There are no unsolvable tasks in this world. If there is at least one - we will find the magic to make it solvable. I adore building any kind of architecture - from tiny one-page applications to enormous scalable online services. I like & ready to develop and move your recourse to the cloud right away. I teach kids how to install Linux.",
            quoteAbout: "Joe - that guy from your side of the ocean who knows how to build and deliver better.",
            img: mike
        },
        {
            name: "Liliya",
            position: "Front+Back End",
            about: "When you find an idea that you just can't stop thinking about, that's probably a good one to pursue. Some of the world's most remarkable ideas have started with just a nagging feeling. I am the one who does the actual implementation of the existing idea.",
            quoteAbout: "Your success always inspires me.",
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
                    Our team is able to solve any complex problem, both frontend and backend.
                </p>
            </div>
            <div className="our-team__members-container">
                { teamMembers }
            </div>
        </div>
    );
};
