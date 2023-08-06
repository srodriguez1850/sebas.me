import React, { useState } from "react";
import Header from '../components/header'
import { Unity, useUnityContext } from "react-unity-webgl";

const Tetris = () => {

  const squareSize = 500

  const { unityProvider, isLoaded, loadingProgression, sendMessage } = useUnityContext({
    loaderUrl: "pages/tetris/build/tetris.loader.js",
    dataUrl: "pages/tetris/build/tetris.data.unityweb",
    frameworkUrl: "pages/tetris/build/tetris.framework.js.unityweb",
    codeUrl: "pages/tetris/build/tetris.wasm.unityweb",
  });
  const loadingPercentage = Math.round(loadingProgression * 100);

  const [rotationValue, setRotationValue] = useState('SRS')
  const [dasValue, setDasValue] = useState('60')
  const [gravityValue, setGravityValue] = useState('TGM3')
  const [delaysValue, setDelaysValue] = useState('TGM3')
  const [randomizerValue, setRandomizerValue] = useState('BAG')

  const applyEngineParametersAndRestart = () => {
    sendMessage("Manager", "ApplyEngineParametersAndRestart", `${rotationValue},${dasValue},${gravityValue},${delaysValue},${randomizerValue}`)
  };

  return (<>
    <div id="wrapper">
    <Header />
    <div id="main">
    <div className="inner">
    <h1>Modular Tetris</h1>

    <div className="align-center">
    <div className="unity-canvas">
    {isLoaded === false && (
                // We'll conditionally render the loading overlay if the Unity
                // Application is not loaded.
      <div className="loading-overlay">
      <p>Loading Modular Tetris... {loadingPercentage}%</p>
      </div>
      )}
    <Unity unityProvider={unityProvider} style={{ width: squareSize, height: squareSize }} />
    </div>
    </div>

    <br />

    <h2 className="align-center">Modules</h2>

    <table>
    <thead>
    <tr>
    <th>Module</th>
    <th>Description</th>
    <th>Selection</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><a href="https://harddrop.com/wiki/Category:Rotation_Systems" target="_blank" rel="noreferrer">Rotation</a></td>
    <td>Determines how pieces rotate in the presence/absence of walls. Older rotation systems (e.g., NES) won't allow a piece to rotate if there's no space.</td>
    <td>
    <select value={rotationValue} onChange={(e) => setRotationValue(e.target.value)}>
    <option value="SRS">SRS</option>
    <option value="ARS">ARS</option>
    </select>
    </td>
    </tr>
    <tr>
    <td><a href="https://harddrop.com/wiki/DAS" target="_blank" rel="noreferrer">DAS</a></td>
    <td>Stands for <em>Delayed Auto Shift</em> or <em>autorepeat</em>. This is the rate at which the piece will move repeatedly as long as a direction is held.</td>
    <td>
    <select value={dasValue} onChange={(e) => setDasValue(e.target.value)}>
    <option value="60">60 Hz</option>
    <option value="20">20 Hz</option>
    <option value="10">10 Hz</option>
    </select>
    </td>
    </tr>
    <tr>
    <td><a href="https://harddrop.com/wiki/Drop" target="_blank" rel="noreferrer">Gravity</a></td>
    <td>Determines how fast a piece drops, expressed in Gs (lines/frame). Gravity will vary (increase or decrease) during the progress of the game according to the system.</td>
    <td>
    <select value={gravityValue} onChange={(e) => setGravityValue(e.target.value)}>
    <option value="TGM3">TGM3</option>
    <option value="TGM">TGM</option>
    </select>
    </td>
    </tr>
    <tr>
    <td><a href="https://harddrop.com/wiki/Tetris_The_Grand_Master_3_Terror-Instinct#Speed_Timings_2" target="_blank" rel="noreferrer">Delays</a></td>
    <td>Delay timings for when pieces lock into place, lines are cleared, a new piece appears (<em>ARE</em>), or when DAS kicks in. Delays are reduced as the game progresses to increase challenge.</td>
    <td>
    <select value={delaysValue} onChange={(e) => setDelaysValue(e.target.value)}>
    <option value="TGM3">TGM3</option>
    <option value="TGM">TGM</option>
    <option value="NES">NES</option>
    </select>
    </td>
    </tr>
    <tr>
    <td><a href="https://simon.lc/the-history-of-tetris-randomizers" target="_blank" rel="noreferrer">Randomizer</a></td>
    <td>Determines how upcoming pieces are randomized. Modern randomizer systems are more predictable and prevent droughts.</td>
    <td>
    <select value={randomizerValue} onChange={(e) => setRandomizerValue(e.target.value)}>
    <option value="BAG">Bag</option>
    <option value="FOUR">1 history</option>
    <option value="ONE">4 history</option>
    <option value="POOL">Pool</option>
    <option value="PSEUDO">Pseudorandom</option>
    </select>
    </td>
    </tr>
    </tbody>
    </table>

    <div className="align-center">
    <input type="button" value="Apply" onClick={applyEngineParametersAndRestart} class="primary" />
    </div>

    <hr />

    <h2 class="align-center">Overview</h2>
    <p class="align-center">
    An exercise to build a WebGL version of Tetris that allows mix and matching mechanics from different Tetris iterations.
    <br />
    The development of Tetris across the years has led to the refinement of game mechanics that have turned into the Tetris we know and love today.
    </p>

    <hr />

    <div class="align-center">
    <a href="/" class="button">Back</a>
    </div>
    </div>
    </div>
    </div>
    </>
    );
};

export default Tetris;