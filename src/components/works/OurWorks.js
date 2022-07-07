import savefit from "../../images/save-fit.svg";
import leafsdeli from "../../images/leafsdeli.svg";
import rpacenter from "../../images/rpa.svg";
import rseven from "../../images/r-seven.svg";
import designinvision from "../../images/design-invision.svg";
import homebuzz from "../../images/homebuzz.svg";
import { Project } from "./Project";

const projectsData = [
  {
    name: "safe lit",
    description: "Application, wich designed for people with spinal cord injuries, hernia or other problems that limit physical activity.",
    img: savefit,
  },
  {
    name: "leaf's deli",
    description: "Web site and identity for the most enjoyable private café in the Seattle Industrial Zone.",
    img: leafsdeli,
  },
  {
    name: "rpa.center",
    description: "Web site for company that develops and implements robotics process automatization based solutions.",
    img: rpacenter,
  },
  {
    name: "r-seven",
    description: "Corporate identity and website for IT company developing a complex and highly loaded backend for government systems.",
    img: rseven,
  },
  {
    name: "design invision",
    description: "Logo, animation and design for designer’s YouTube channel about lifehacks from the design.",
    img: designinvision,
  },
  {
    name: "homebuzz",
    description: "Corporate style and template of an online store for a construction company or a spare parts store.",
    img: homebuzz,
  }
]

const projects = projectsData.map((project) => (
  <Project project={project} />
))

export const OurWorks = () => (
  <div className="our-works">
    <h1 className="header">
      our
      <br />
      works
    </h1>
    <p className="header-description">
      Every project we do is a pride for us and our customers.
    </p>
    { projects }
  </div>
);
