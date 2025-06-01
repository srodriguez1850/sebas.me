import data from "@/data.json"
import { Col, Container, Image, Row } from "react-bootstrap"

const entries = data.experience

export default function Experience () {
    return (
        <Container>
            <Row xs={1} sm={2} md={3}>
                {entries.map((entry, index) => (
                    <Col
                        key={index}
                        className='d-flex flex-column align-items-center'
                    >
                        <Image
                            src={entry.img}
                            alt={entry.alt}
                            style={{ maxWidth: "120px", maxHeight: "120px" }}
                            rounded
                            fluid
                        />
                        <p className='text-center'>
                            <b>{entry.company}</b>
                            <br />
                            {entry.title}
                            <br />
                            <i>{entry.year}</i>
                        </p>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
