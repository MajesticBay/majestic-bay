export const Project = ({project: {img, name, description}}) => {
    return (
        <div className="project">
            <img src={img} alt="project" />
            <p className="project__header">{name}</p>
            <p className="project__description">{description}</p>
        </div>
    )
}