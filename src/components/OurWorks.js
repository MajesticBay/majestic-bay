import savefit from "../images/save-fit.svg";
import leafsdeli from "../images/leafsdeli.svg"
import rpacenter from "../images/rpa.svg";
import rseven from "../images/r-seven.svg";
import designinvision from "../images/design-invision.svg";
import homebuzz from "../images/homebuzz.svg";

export const OurWorks = () => (
    <div className="our-works">
        <h1 className="header">our<br/>works</h1>
        <p className="header-description">We do many projects and every job we do is a pride for us and our customers</p>
        <div className="project">
            <img src={savefit} alt="save fit app"/>
            <p className="project__header">safe lit</p>
            <p className="project__description">Application, wich designed for people with spinal cord injuries, hernia or other problems that limit physical activity.</p>
        </div>
        <div className="project">
            <img src={leafsdeli} alt="leaf's deli website"/>
            <p className="project__header">leaf's deli</p>
            <p className="project__description">Web site and identity for the most enjoyable private café in the Seattle Industrial Zone.</p>
        </div>
        <div className="project">
            <img src={rpacenter} alt="rpa.center website"/>
            <p className="project__header">rpa.center</p>
            <p className="project__description">Web site for company that develops and implements robotics process automatization based solutions.</p>
        </div>
        <div className="project">
            <img src={rseven} alt="r-seven website"/>
            <p className="project__header">r-seven</p>
            <p className="project__description">Corporate identity and website for IT company developing a complex and highly loaded backend for government systems.</p>
        </div>
        <div className="project">
            <img src={designinvision} alt="design invision website"/>
            <p className="project__header">design invision</p>
            <p className="project__description">Logo, animation and design for designer’s YouTube channel about lifehacks from the design.</p>
        </div>
        <div className="project">
            <img src={homebuzz} alt="homebuzz website"/>
            <p className="project__header">homebuzz</p>
            <p className="project__description">Corporate style and template of an online store for a construction company or a spare parts store.</p>
        </div>
    </div>
)