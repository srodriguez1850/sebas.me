import Header from "@/components/Header"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Unity, useUnityContext } from "react-unity-webgl"

export const Route = createFileRoute("/tetris")({
    component: Tetris,
})

// Module configuration array
const MODULES = [
    {
        label: "Rotation",
        href: "https://harddrop.com/wiki/Category:Rotation_Systems",
        description:
            "Determines how pieces rotate in the presence/absence of walls. Older rotation systems (e.g., NES) won't allow a piece to rotate if there's no space.",
        valueKey: "rotationValue",
        setValueKey: "setRotationValue",
        options: [
            { value: "SRS", label: "SRS" },
            { value: "ARS", label: "ARS" },
        ],
    },
    {
        label: "DAS",
        href: "https://harddrop.com/wiki/DAS",
        description:
            "Stands for Delayed Auto Shift or autorepeat. This is the rate at which the piece will move repeatedly as long as a direction is held.",
        valueKey: "dasValue",
        setValueKey: "setDasValue",
        options: [
            { value: "60", label: "60 Hz" },
            { value: "20", label: "20 Hz" },
            { value: "10", label: "10 Hz" },
        ],
    },
    {
        label: "Gravity",
        href: "https://harddrop.com/wiki/Drop",
        description:
            "Determines how fast a piece drops, expressed in Gs (lines/frame). Gravity will vary (increase or decrease) during the progress of the game according to the system.",
        valueKey: "gravityValue",
        setValueKey: "setGravityValue",
        options: [
            { value: "TGM3", label: "TGM3" },
            { value: "TGM", label: "TGM" },
        ],
    },
    {
        label: "Delays",
        href: "https://harddrop.com/wiki/Tetris_The_Grand_Master_3_Terror-Instinct#Speed_Timings_2",
        description:
            "Delay timings for when pieces lock into place, lines are cleared, a new piece appears (ARE), or when DAS kicks in. Delays are reduced as the game progresses to increase challenge.",
        valueKey: "delaysValue",
        setValueKey: "setDelaysValue",
        options: [
            { value: "TGM3", label: "TGM3" },
            { value: "TGM", label: "TGM" },
            { value: "NES", label: "NES" },
        ],
    },
    {
        label: "Randomizer",
        href: "https://simon.lc/the-history-of-tetris-randomizers",
        description:
            "Determines how upcoming pieces are randomized. Modern randomizer systems are more predictable and prevent droughts.",
        valueKey: "randomizerValue",
        setValueKey: "setRandomizerValue",
        options: [
            { value: "BAG", label: "Bag" },
            { value: "FOUR", label: "1 history" },
            { value: "ONE", label: "4 history" },
            { value: "POOL", label: "Pool" },
            { value: "PSEUDO", label: "Pseudorandom" },
        ],
    },
]

function Tetris () {
    const squareSize = 500

    const { unityProvider, isLoaded, loadingProgression, sendMessage } =
        useUnityContext({
            loaderUrl: "pages/tetris/build/tetris.loader.js",
            dataUrl: "pages/tetris/build/tetris.data.unityweb",
            frameworkUrl: "pages/tetris/build/tetris.framework.js.unityweb",
            codeUrl: "pages/tetris/build/tetris.wasm.unityweb",
        })
    const loadingPercentage = Math.round(loadingProgression * 100)

    // State hooks for each module
    const [rotationValue, setRotationValue] = useState("SRS")
    const [dasValue, setDasValue] = useState("60")
    const [gravityValue, setGravityValue] = useState("TGM3")
    const [delaysValue, setDelaysValue] = useState("TGM3")
    const [randomizerValue, setRandomizerValue] = useState("BAG")

    // Map state and setters for dynamic access
    const stateMap = {
        rotationValue,
        dasValue,
        gravityValue,
        delaysValue,
        randomizerValue,
    }
    const setStateMap = {
        setRotationValue,
        setDasValue,
        setGravityValue,
        setDelaysValue,
        setRandomizerValue,
    }

    const applyEngineParametersAndRestart = () => {
        sendMessage(
            "Manager",
            "ApplyEngineParametersAndRestart",
            `${rotationValue},${dasValue},${gravityValue},${delaysValue},${randomizerValue}`,
        )
    }

    return (
        <>
            <div id='wrapper'>
                <Header />
                <div id='main'>
                    <div className='inner'>
                        <h1>Modular Tetris</h1>

                        <div className='align-center'>
                            <div className='unity-canvas'>
                                {isLoaded === false && (
                                    // We'll conditionally render the loading overlay if the Unity
                                    // Application is not loaded.
                                    <div className='loading-overlay'>
                                        <p>
                                            Loading Modular Tetris...{" "}
                                            {loadingPercentage}%
                                        </p>
                                    </div>
                                )}
                                <Unity
                                    unityProvider={unityProvider}
                                    style={{
                                        width: squareSize,
                                        height: squareSize,
                                    }}
                                />
                            </div>
                        </div>

                        <br />

                        <h2 className='align-center'>Modules</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>Module</th>
                                    <th>Description</th>
                                    <th>Selection</th>
                                </tr>
                            </thead>
                            <tbody>
                                {MODULES.map(mod => (
                                    <tr key={mod.label}>
                                        <td>
                                            <a
                                                href={mod.href}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                {mod.label}
                                            </a>
                                        </td>
                                        <td>{mod.description}</td>
                                        <td>
                                            <select
                                                value={
                                                    stateMap[
                                                        mod.valueKey as keyof typeof stateMap
                                                    ]
                                                }
                                                onChange={e =>
                                                    setStateMap[
                                                        mod.setValueKey as keyof typeof setStateMap
                                                    ](e.target.value)
                                                }
                                            >
                                                {mod.options.map(opt => (
                                                    <option
                                                        key={opt.value}
                                                        value={opt.value}
                                                    >
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='align-center'>
                            <input
                                type='button'
                                value='Apply'
                                onClick={applyEngineParametersAndRestart}
                                className='primary'
                            />
                        </div>

                        <hr />

                        <h2 className='align-center'>Overview</h2>
                        <p className='align-center'>
                            An exercise to build a WebGL version of Tetris that
                            allows mix and matching mechanics from different
                            Tetris iterations.
                            <br />
                            The development of Tetris across the years has led
                            to the refinement of game mechanics that have turned
                            into the Tetris we know and love today.
                        </p>

                        <hr />

                        <div className='align-center'>
                            <a href='/' className='button'>
                                Back
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
