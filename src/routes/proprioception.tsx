import Header from "@/components/Header"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/proprioception")({
    component: Proprioception,
})

function Proprioception () {
    return (
        <div id='wrapper'>
            <Header />
            <div id='main'>
                <div className='inner'>
                    <h1>VR Proprioception Experiment</h1>

                    <div className='align-center'>
                        <span className='image page'>
                            <img
                                src='../pages/proprioception/proprioception-summary.gif'
                                alt='Experimental flow of the VR Proprioception Experiment'
                            />
                        </span>
                    </div>

                    <h2 className='align-center'>Overview</h2>
                    <p className='align-center'>
                        An experiment to gauge how effective people are at
                        grabbing objects outside of their field of view in VR.
                        We use{" "}
                        <a href='https://en.wikipedia.org/wiki/Proprioception'>
                            proprioception
                        </a>{" "}
                        daily to interact with objects outside our vision, yet
                        it proves to be challenging in a virtual environment.
                        The lack of propriorception is one way our physical
                        abilities do not transpose in the virtual world.
                    </p>

                    <hr />

                    <h2>The Problem</h2>
                    <p>
                        Virtual Reality (VR) provides a wonderful escape to
                        simulated environments, but with the tradeoff of using
                        all our senses in VR. Research still has to address how
                        to effectively trick our sense of touch in VR
                        environments. Combine this with the restricted
                        peripheral vision when one dons a head-mounted display,
                        and it results in losing one's sense of{" "}
                        <em>proprioception</em>: being aware of the position and
                        movement of one's body.
                    </p>
                    <p>
                        In the real world, we often interact with objects
                        outside our field of view (FoV), a random example being
                        reaching for our phones when fixated on a TV show. Such
                        kinesthetic interactions are very challenging to execute
                        in VR. Imagine a VR shooter where at a specific point,
                        one has to fend off zombies while turning a wheel to
                        open a door. Often the task is divided into: shoot
                        zombies first, then open door; or vice versa.
                        Multitasked interactions with objects outside of our FoV
                        can be managed in reality, but become challenging in VR.
                    </p>

                    <h2>The Experiment</h2>
                    <p>
                        A quick experiment was designed to test how well do VR
                        users grab objects outside their FoV. For several
                        trials, objects are placed outside the FoV by forcing
                        the user to stare at an object in front of them. We then
                        have users reach for the object and bring it to their
                        FoV to complete the trial. We measured variables such as
                        the number of grab attempts per object and the time it
                        took to bring the object forward. We varied the
                        following conditions in the experiment:
                    </p>

                    <p>
                        <strong>Proprioception - Body vs. Environment:</strong>{" "}
                        Grabbing an object attached to one's body is different
                        than grabbing an object farther in the environment.
                        Games like <em>Arizona Sunshine</em> and{" "}
                        <em>Hot Dogs, Horseshoes &amp; Hand Grenades</em> are
                        examples of inventory systems that are attached to the
                        player's virtual body.
                        <br />
                        <strong>Feedback - Haptic vs. None:</strong> Haptic
                        feedback (i.e., controller vibration) still remains the
                        predominant mass-produced method of indicating an event.
                        Haptics play a strong role in recognizing a touch event
                        during the trials, hence we expect that the presence of
                        vibration allows for a higher amount of successful
                        grabs.
                        <br />
                        <strong>Training - Allowed vs. Disallowed:</strong>{" "}
                        Proprioception and muscle memory go hand in hand. If we
                        allow users to interact and try grabbing the object
                        outside of the FoV before the trial (i.e., training),
                        they'd build a limited amount of muscle memory that
                        would allow for more successful grabs compared to no
                        training at all.
                    </p>

                    <p>
                        The position of the objects is randomly selected from
                        either a location adjacent to the body (like a body
                        inventory) or farther behind the player as part of the
                        environment (like pulling a lever behind the avatar).
                        All possible locations are displayed in these 3 figures:
                    </p>

                    <div className='row'>
                        <div className='col-4'>
                            <span className='image fit'>
                                <img
                                    src='./pages/proprioception/targets-front.png'
                                    alt='Experiment targets viewed from the front'
                                />
                                <span>Front View</span>
                            </span>
                        </div>
                        <div className='col-4'>
                            <span className='image fit'>
                                <img
                                    src='../pages/proprioception/targets-top.png'
                                    alt='Experiment targets viewed from the top'
                                />
                                <span>Top View</span>
                            </span>
                        </div>
                        <div className='col-4'>
                            <span className='image fit'>
                                <img
                                    src='../pages/proprioception/targets-side.png'
                                    alt='Experiment targets viewed from the side'
                                />
                                <span>Side View</span>
                            </span>
                        </div>
                    </div>

                    <h2>The Outcome</h2>
                    <p>
                        This experiment was conducted under the University of
                        Illinois at Urbana-Champaign Class Assignment IRB policy
                        (TL;DR: "do the experiment, but you can't publish your
                        results").
                    </p>
                    <p>
                        There was plenty of conversation and feedback! A couple
                        of important points brought up:
                        <br />
                        1) Proprioception relative to one's body is much easier
                        to execute than proprioception relative to the
                        environment. Hence why it is easier for VR inventory
                        systems attached to the player's body to be used with
                        enough training and muscle memory. Everyone had a rough
                        time reaching for objects farther than their own bodies!
                        <br />
                        2) 360&deg; tracking is still needed for precise
                        tracking of objects behind us (these interactions are
                        seen often: backpacks, swords, levers behind us, etc.),
                        thus inside-out tracking systems face limitations when
                        controllers fall outside of the cameras' field of view.
                    </p>
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
