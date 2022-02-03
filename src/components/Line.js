import Marquee from 'react-double-marquee';

const items = [
    {
        plainText: "AR Design"
    },
    {
        boldText: "React",
        plainText: "Native"
    },
    {
        plainText: "Efficient Code"
    },
    {
        plainText: "Backend"
    },
    {
        boldText: "App",
        plainText: "Design"
    },
    {
        boldText: "Web",
        plainText: "Design"
    },
    {
        boldText: "UX",
        plainText: "Research"
    }
]

export const Line = ({color, turnSpeed, direction}) => (
    <div className={"line " + (color ? `line${color}` : '')}>
        <Marquee 
          direction={direction}
          childMargin={0}
          delay={0}
          scrollWhen={"always"}
          speed={turnSpeed}>
            {items.map((item, i) => (
                <span className="line__text" key={i}>
                    {item.boldText ? <span className="line__text--bold">{item.boldText}</span> : null}
                    {item.plainText}
                </span>
            ))}
        </Marquee>
    </div>
)