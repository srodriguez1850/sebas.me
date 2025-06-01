const lastUpdated = __LAST_UPDATED__ ?? "Not sure..."

export default function Footer () {
    return (
        <footer id='footer'>
            <div className='inner'>
                <ul className='copyright'>
                    <li>&copy; Sebastian S. Rodriguez. All rights reserved.</li>
                    <li>
                        Design:{" "}
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://html5up.net'
                        >
                            HTML5 UP
                        </a>
                    </li>
                    <li>Last Updated: {lastUpdated}</li>
                </ul>
            </div>
        </footer>
    )
}
