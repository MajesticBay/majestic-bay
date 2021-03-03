import mike from '../images/mike.png';

export const OurTeam = () => (
    <div className="our-team">
        <div className="our-team__header-container">
            <h1 className="header">our<br/>team</h1>
            <p className="header-description">We are excellent experts. We are excellent experts. We are excellent experts.</p>
        </div>
        <div className="our-team__members-container">
            <div className="member">
                <div className="member__top">
                    <img className="member__emoji" src={mike} alt="Mike emoji"/>
                    <h3 className="member__name">Mike</h3>
                    <p className="member__title">APP / UX / AR & Product Designer</p>
                </div>
                <p className="member__about"><span>From Mike:</span>For more than 7 years I have been helping brands develop their business through design. Visual support of the brand — my task. I like to work on projects from the start and use all my experience to do the job perfectly. </p>
                <a href="#">contact Mike</a>
            </div>
        </div>
    </div>
)