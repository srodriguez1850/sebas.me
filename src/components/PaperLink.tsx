import type { Paper } from "@/components/Research"
import React from "react"

function byNoncategory (papers: Paper[]) {
    return (
        <>
            <p>
                {papers.map((entry, index) => {
                    if (entry.doc === "" || entry.doc === null) {
                        return (
                            <React.Fragment key={index}>
                                {entry.title}
                            </React.Fragment>
                        )
                    } else {
                        return (
                            <React.Fragment key={index}>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href={entry.doc}
                                >
                                    {entry.title}
                                </a>
                                {index < papers.length - 1 ? ", " : ""}
                            </React.Fragment>
                        )
                    }
                })}
            </p>
        </>
    )
}

function byCategory (papers: Paper[]) {
    const categories: {
        [category: string]: Array<{ title: string; doc: string }>
    } = {}
    for (let i = 0; i < papers.length; i++) {
        const paper = papers[i]
        if (paper.category === null)
            throw new Error("Categorized paper cannot have a null category.")

        if (!(paper.category in categories)) {
            categories[paper.category] = []
        }
        categories[paper.category].push({ title: paper.title, doc: paper.doc })
    }

    return (
        <>
            {Object.entries(categories).map(([key, value], index) => {
                return (
                    <React.Fragment key={index}>
                        <i>{key}</i>:{" "}
                        {value.map((entry, index2) => {
                            const title = entry.title
                            const link = entry.doc

                            if (link === "" || link === null) {
                                return (
                                    <React.Fragment key={index2}>
                                        {title}
                                    </React.Fragment>
                                )
                            } else {
                                return (
                                    <React.Fragment key={index2}>
                                        <a
                                            target='_blank'
                                            rel='noreferrer'
                                            href={link}
                                        >
                                            {title}
                                        </a>
                                        {index2 < value.length - 1 ? ", " : ""}
                                    </React.Fragment>
                                )
                            }
                        })}
                        <br />
                    </React.Fragment>
                )
            })}
        </>
    )
}

interface Props {
    categorized: boolean
    papers: Paper[]
}

export default function PaperLink ({ categorized, papers }: Props) {
    return <>{categorized ? byCategory(papers) : byNoncategory(papers)}</>
}
