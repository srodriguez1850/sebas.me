import Header from "@/components/Header"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/badminton")({
    component: Badminton,
})

function Badminton () {
    return (
        <div id='wrapper'>
            <Header />
            <div id='main'>
                <div className='inner'>
                    <h1>Badminton</h1>

                    <div className='align-center'>
                        <span className='image page'>
                            <img
                                src='../images/portfolio/badminton.png'
                                alt='Screenshot of Fitbit Badminton application'
                            />
                        </span>
                    </div>

                    <div className='align-center'>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://gallery.fitbit.com/details/f4ffed41-6f96-4007-83d8-4bdcbb400a83'
                            className='button primary'
                        >
                            Download
                        </a>
                    </div>

                    <br />

                    <h2 className='align-center'>Overview</h2>
                    <p className='align-center'>
                        This is a simple Fitbit application that keeps track of
                        the score of a badminton game. Features include
                        indicating the serving player and side, handling deuces,
                        and the 30-point maximum.
                    </p>
                    <p className='align-center'>
                        Questions, comments, concerns? Feel free to drop an
                        email at{" "}
                        <a href='mailto:ss.rodriguez1850@gmail.com'>
                            ss.rodriguez1850@gmail.com
                        </a>
                        .
                    </p>

                    <hr />

                    <h2>Frequently Asked Questions</h2>

                    <p>
                        <b>How do I start/continue a game?</b>
                        <br />
                        The game is ready to start or continue when no side is
                        highlighted blue. Tap on a side to set that side as the
                        server (it will be highlighted), any subsequent taps
                        will add one point to the tapped side.
                    </p>
                    <p>
                        <b>How do I restart a game?</b>
                        <br />
                        Hold down the red reset button until the scores are
                        reset to 0. Tap a side to set a server and start
                        playing.
                    </p>
                    <p>
                        <b>How do change the serving player?</b>
                        <br />
                        Hold down the side to serve until it is highlighted.
                    </p>

                    <hr />

                    <h2>Changelog</h2>
                    <h3>1.1.3</h3>
                    <ul>
                        <li>
                            FEAT: Score is now saved between application loads
                            and unloads.
                        </li>
                        <li>
                            FEAT: Settings option to toggle screen timeout (be
                            mindful of screen burn-in).
                        </li>
                    </ul>
                    <h3>1.1.2</h3>
                    <ul>
                        <li>FIX: Minor optimizations.</li>
                    </ul>
                    <h3>1.1.1</h3>
                    <ul>
                        <li>FIX: Minor bugfixes.</li>
                    </ul>
                    <h3>1.1.0</h3>
                    <ul>
                        <li>
                            FEAT: The serving player can now be changed without
                            affecting the score.
                        </li>
                        <li>FIX: Minor bugfixes.</li>
                    </ul>
                    <h3>1.0.0</h3>
                    <ul>
                        <li>Initial release.</li>
                    </ul>
                </div>
                <div className='align-center'>
                    <a href='/' className='button'>
                        Back
                    </a>
                </div>
            </div>
        </div>
    )
}
