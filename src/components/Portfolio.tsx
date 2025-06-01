import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import Research from "@/components/Research"
import { Row } from "react-bootstrap"

import data from "@/data.json"

const ICON_DATA = [
    {
        href: "./docs/cv.pdf",
        img: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cv-cv-resume-flatart-icons-outline-flatarticons.png",
        alt: "Download CV",
        title: "CV",
    },
    {
        href: "./docs/resume.pdf",
        img: "https://img.icons8.com/ios/96/000000/resume.png",
        alt: "Download Resume",
        title: "Resume",
    },
    {
        href: "https://www.linkedin.com/in/srodriguez1850/",
        img: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
        alt: "LinkedIn Profile",
        title: "LinkedIn",
    },
    {
        href: "https://github.com/srodriguez1850",
        img: "https://img.icons8.com/material-outlined/192/000000/github.png",
        alt: "GitHub Profile",
        title: "GitHub",
    },
    {
        href: "https://scholar.google.com/citations?user=RdD2ZP8AAAAJ",
        img: "https://img.icons8.com/material-outlined/96/000000/google-scholar.png",
        alt: "Google Scholar Profile",
        title: "Google Scholar",
    },
]

function generateIcons () {
    return ICON_DATA.map(icon => (
        <li key={icon.title}>
            <a
                className='icon'
                target='_blank'
                rel='noreferrer'
                href={icon.href}
            >
                <img
                    src={icon.img}
                    alt={icon.alt}
                    width='32'
                    height='32'
                    title={icon.title}
                />
            </a>
        </li>
    ))
}

export default function Portfolio () {
    const papers = data.research

    return (
        <div id='wrapper'>
            <Header />

            <div id='main'>
                <div className='inner'>
                    <header>
                        <h2>Hello! My friends call me Sebas (SEH-bahs).</h2>

                        <p>
                            I'm a software/research engineer with an interest in
                            VR/XR, machine learning, and human-computer
                            interaction. I consider myself an eternal student
                            and love solving ambiguous problems that require
                            creativity, meticulous planning, and relentless (but
                            wise) execution through quality engineering.
                            <br />
                            In a previous life, I completed my doctorate in
                            Computer Science at the{" "}
                            <a
                                href='https://cs.illinois.edu/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                University of Illinois at Urbana-Champaign
                            </a>{" "}
                            advised by{" "}
                            <a
                                href='https://cs.illinois.edu/about/people/faculty/kirlik'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Prof. Alex Kirlik
                            </a>
                            , and before, completed a bachelor's in Computer
                            Engineering at{" "}
                            <a
                                href='https://www.mccormick.northwestern.edu/electrical-computer/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Northwestern University
                            </a>
                            .
                        </p>
                        <p>
                            Some neat things I've worked on:
                            <br />
                            <ul>
                                <li>
                                    Developed data models and reporting tools to
                                    help new features in{" "}
                                    <a
                                        href='https://engineering.fb.com/category/data-infrastructure/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Meta
                                    </a>
                                    's products be responsible with sensitive
                                    user data,
                                </li>
                                <li>
                                    Built a plethora of web, desktop, VR, and AR
                                    experiences to research human-AI trust for
                                    my doctoral studies at{" "}
                                    <a
                                        href='https://cs.illinois.edu/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        UIUC
                                    </a>
                                    ,
                                </li>
                                <li>
                                    Open sourced a Unity SDK for researchers who
                                    needed networked VR/AR experiments for
                                    socially distanced participants (thanks
                                    COVID) with{" "}
                                    <a
                                        href='https://www.microsoft.com/en-us/research/publication/remotelab/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Microsoft
                                    </a>
                                    ,
                                </li>
                                <li>
                                    Integrated reinforcement learning models
                                    into AI behavior for high-fidelity military
                                    simulations at the{" "}
                                    <a
                                        href='https://www.arl.army.mil/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        U.S. Army Research Laboratory
                                    </a>
                                    ,
                                </li>
                                <li>
                                    Programmed low-level embedded systems for a
                                    prototype of an electronic conference badge
                                    at{" "}
                                    <a
                                        href='https://ccl.northwestern.edu/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Northwestern CCL
                                    </a>
                                    ,
                                </li>
                                <li>
                                    Implemtented data processing algorithms to
                                    estimate availability for electric smart
                                    grids at{" "}
                                    <a
                                        href='https://sgdril.eecs.wsu.edu'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        WSU SGDRIL
                                    </a>
                                    .
                                </li>
                            </ul>
                        </p>
                        <p>
                            After work hours, find me dancing at the local Latin
                            scene, cooking new Peruvian recipes, prototyping
                            some of my fever dreams in Unity, and catching up
                            with my (extremely long) backlog of videogames.
                        </p>
                        <p>
                            Always happy to chat about anything; feel free to
                            send me an email:{" "}
                            <b>ss.rodriguez1850 [at] gmail [dot] com</b>
                        </p>

                        <ul className='icons'>{generateIcons()}</ul>
                    </header>

                    <hr />

                    <h1>Experience</h1>
                    <Experience />

                    <hr />

                    <h1>Projects</h1>
                    <Projects />

                    <hr />

                    <h1>Research</h1>
                    <Row xs={1}>
                        {papers.map(entry => {
                            return (
                                <Research
                                    key={entry.title}
                                    img={entry.img}
                                    title={entry.title}
                                    institution={entry.institution}
                                    papers={entry.papers}
                                    categorized={entry.categorized}
                                />
                            )
                        })}
                    </Row>
                </div>
            </div>

            <Footer />
        </div>
    )
}
