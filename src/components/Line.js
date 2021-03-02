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

export const Line = ({color}) => (
    <div className={"line " + (color ? `line${color}` : '')}>
        {items.map((item, i) => (
            <span className="line__text" key={i}>
                {item.boldText ? <span className="line__text--bold">{item.boldText}</span> : null}
                {item.plainText}
            </span>
        ))}
    </div>
)