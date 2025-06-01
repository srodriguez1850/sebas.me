import data from "../data.json"
import ProjectSquare from "./ProjectSquare"

export default function Projects () {
    return (
        <section className='tiles'>
            {data.projects.map(entry => {
                return (
                    <ProjectSquare
                        key={entry.title}
                        title={entry.title}
                        description={entry.description}
                        url={entry.url}
                        img={entry.img}
                        openInNewTab={entry.newtab}
                    />
                )
            })}
        </section>
    )
}
