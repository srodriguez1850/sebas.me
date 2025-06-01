interface Props {
    title: string
    description: string
    url: string | null
    img: string
    openInNewTab: boolean
}

export default function ProjectSquare ({
    title,
    description,
    url,
    img,
    openInNewTab,
}: Props) {
    return (
        <article className='style0'>
            <span className='image'>
                <img src={`${img}`} alt=''></img>
            </span>
            <a
                target={`${openInNewTab ? "_blank" : "_self"}`}
                rel='noreferrer'
                href={url ?? undefined}
            >
                <div className='spacing'></div>
                <h2
                    className='content'
                    dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
                <div className='content'>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    ></p>
                </div>
            </a>
        </article>
    )
}
