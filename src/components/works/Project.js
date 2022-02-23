export const Project = ({project: {img, header, description}}) => {
    return (
        <div className="project">
            <img src={img} alt="project" />
            <p className="project__header">{header}</p>
            <p className="project__description">{description}</p>
        </div>
    )
}