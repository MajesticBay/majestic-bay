function Line(props) {
    // let color = {props}
    return (
        // <div className={"line " + props.color ? "line" + props.color : ""}>
        // <div className={props.color ? "line" + props.color : "" + " line"}>
        // <div className={"line " + "line" + props.color}>
        <div className={"line line" + props.color}>
            <span className="line__text">AR Design</span>
            <span className="line__text"><span className="line__text--bold">React</span> Native</span>
            <span className="line__text">Efficient Code</span>
            <span className="line__text">Backend</span>
            <span className="line__text"><span className="line__text--bold">App</span>Design</span>
            <span className="line__text"><span className="line__text--bold">Web</span>Design</span>
            <span className="line__text"><span className="line__text--bold">UX</span> Research</span>
        </div>
    )
}

export default Line;