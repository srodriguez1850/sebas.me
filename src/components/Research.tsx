import { Col, Image } from "react-bootstrap"

import PaperLink from "@/components/PaperLink"

export interface Paper {
    title: string
    doc: string
    category: string | null
}

interface Props {
    img: string
    title: string
    institution: string
    papers: Paper[]
    categorized: boolean
}

export default function Research ({
    img,
    title,
    institution,
    papers,
    categorized,
}: Props) {
    return (
        <>
            <Col className='paper'>
                <span className='image left'>
                    <Image src={`${img}`} alt='' rounded />
                </span>
                <h2 className='paper'>{title}</h2>
                <p className='blockquote-footer'>{institution}</p>
                <PaperLink categorized={categorized} papers={papers} />
            </Col>
        </>
    )
}
