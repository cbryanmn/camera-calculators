import React, { useState } from 'react';
import PinholeFLDiameterFStop from './PinholeFLDiameterFStop';
import './Pinhole.css';

function Pinhole() {
    const [mode, setMode] = useState('');
    const [calc, setCalc] = useState('');
    const [focalLength, setFocalLength] = useState('');
    const [pinholeDiameter, setPinholeDiameter] = useState('');
    const [lightIntensityLux, setLightIntensityLux] = useState('');
    const [ISO, setISO] = useState('');
    const [sensorDimension, setSensorDimension] = useState('');
    const [subjectWidth, setSubjectWidth] = useState('');
    const [startingDistance, setStartingDistance] = useState('');
    const [percentageOfFrame, setPercentageOfFrame] = useState('');
    const [exposureTime, setExposureTime] = useState('');
    const [exposureValue, setExposureValue] = useState('');
    const [result, setResult] = useState('');

    const calculatePinholeDiameter = (focalLength) => {
        const lambda = 550 * Math.pow(10, -9);
        return Math.sqrt(1.9 * focalLength * lambda);
    };

    function calculateExposureTime(pinholeDiameter, focalLength, lightIntensityLux, ISO) {
        const fNumber = focalLength / pinholeDiameter;
        const referenceLux = 10000;
        const lightFactor = referenceLux / lightIntensityLux;

        const baseExposureTime = 1 / (ISO / 100);
        const exposureTime = baseExposureTime * Math.pow(fNumber / 16, 2) * lightFactor;

        return exposureTime;
    };

    const calculateFieldOfView = (sensorDimension, focalLength) => {
        const arctanVariables = sensorDimension / (2 * focalLength);

        return 2 * Math.atan(arctanVariables);
    };

    const calculateDistFromSubj = (subjectWidth, startingDistance, percentageOfFrame, sensorDimension, focalLength) => {
        const framePercentage = percentageOfFrame / 100;
        const fieldOfView = 2 * Math.atan(sensorDimension / (2 * focalLength));
        const frameWidthAtDistance = 2 * startingDistance * Math.tan(fieldOfView / 2);
        const subjectWidthInFrame = frameWidthAtDistance * framePercentage;
        const requiredDistance = (subjectWidth * startingDistance) / subjectWidthInFrame;

        return requiredDistance;
    };

    const calculateFocalLength = (pinholeDiameter) => {
        const lambda = 550 * Math.pow(10, -9);
        const oneNineLambda = 1.9 * lambda;
        const pinholeOneNineLambda = pinholeDiameter / oneNineLambda;
        const effectivefocalLength = Math.pow(pinholeOneNineLambda, 2);

        return effectivefocalLength * 1000;
    };

    const calculateISO = (exposureTime, exposureValue, focalLength, pinholeDiameter) => {
        if (exposureTime <= 0 || focalLength <= 0 || pinholeDiameter <= 0) {
            return NaN;
        }

        const fStopValue = focalLength / pinholeDiameter;
        const ev100 = Math.log2(Math.pow(fStopValue, 2) / exposureTime);
        const exponent = exposureValue - ev100;

        if (exponent > 30) {
            return Infinity;
        }

        let ISO = 100 * Math.pow(2, exponent);
        return ISO;
    };

    const calculateExposureValue = (exposureTime, ISO, focalLength, pinholeDiameter) => {
        const fStopNumValue = focalLength / pinholeDiameter;
        return (Math.log2(Math.pow(fStopNumValue, 2) / exposureTime)) + Math.log2(ISO / 100);
    };

    const calculateSizeOfProjectedImage = (subjectWidth, focalLength, startingDistance) => {
        return subjectWidth * ((focalLength / 25.4) / startingDistance);
    };

    const handleCalculate = () => {
        let calculatedResult = '';
        if (mode === 'pd') {
            calculatedResult = `Optimal Pinhole Diameter: ${calculatePinholeDiameter(parseFloat(focalLength)).toFixed(2)} mm`;
        } else if (mode === 'et') {
            calculatedResult = `Optimal Exposure Time: ${calculateExposureTime(parseFloat(pinholeDiameter), parseFloat(focalLength), parseFloat(lightIntensityLux), parseFloat(ISO)).toFixed(4)} seconds`;
        } else if (mode === 'fov') {
            calculatedResult = `Field of View: ${calculateFieldOfView(parseFloat(sensorDimension), parseFloat(focalLength)).toFixed(2)} degrees`;
        } else if (mode === 'dfs') {
            calculatedResult = `Optimal Distance from Subject: ${calculateDistFromSubj(parseFloat(subjectWidth), parseFloat(startingDistance), parseFloat(percentageOfFrame), parseFloat(sensorDimension), parseFloat(focalLength)).toFixed(4)} inches`
        } else if (mode === 'fl') {
            calculatedResult = `Effective Focal Length: ${calculateFocalLength(parseFloat(pinholeDiameter)).toFixed(2)} mm`;
        } else if (mode === 'iso') {
            calculatedResult = `Optimal ISO: ${calculateISO(parseFloat(pinholeDiameter), parseFloat(focalLength), parseFloat(exposureTime), parseFloat(exposureValue)).toFixed(2)}`;
        } else if (mode === 'ev') {
            calculatedResult = `Exposure Value: ${calculateExposureValue(parseFloat(exposureTime), parseFloat(ISO), parseFloat(focalLength), parseFloat(pinholeDiameter)).toFixed(2)}`;
        } else if (mode === 'sps') {
            calculatedResult = `Size of Projected Image of Subject: ${calculateSizeOfProjectedImage(parseFloat(subjectWidth), parseFloat(focalLength), parseFloat(startingDistance)).toFixed(2)} inches`;
        }
        setResult(calculatedResult);
    };

    return (
        <div className="pinhole-calc-container">
            <h2 className="h2-top">Pinhole Camera</h2>
            <h2 className="h2-bottom">Pinhole Camera</h2>
            <p className="select">Select calculation type:</p>
            <div className="options-container-top">
                <label>
                    <input type="radio" value="pd" checked={mode === 'pd'} onChange={() => { setMode('pd'); setCalc('pd'); }} />
                    Pinhole Diameter
                </label>
                <label>
                    <input type="radio" value="et" checked={mode === 'et'} onChange={() => { setMode('et'); setCalc('et'); }} />
                    Exposure Time
                </label>
                <label>
                    <input type="radio" value="fov" checked={mode === 'fov'} onChange={() => { setMode('fov'); setCalc('fov'); }} />
                    Field of View
                </label>
                <label>
                    <input type="radio" value="dfs" checked={mode === 'dfs'} onChange={() => { setMode('dfs'); setCalc('dfs'); }} />
                    Optimal Distance from Subject
                </label>
            </div>
            <div className="options-container-bottom">
                <label>
                    <input type="radio" value="fl" checked={mode === 'fl'} onChange={() => { setMode('fl'); setCalc('fl'); }} />
                    Focal Length
                </label><br />
                <label>
                    <input type="radio" value="iso" checked={mode === 'iso'} onChange={() => { setMode('iso'); setCalc('iso'); }} />
                    ISO of Photosensitive Material
                </label>
                <label>
                    <input type="radio" value="ev" checked={mode === 'ev'} onChange={() => { setMode('ev'); setCalc('ev'); }} />
                    Exposure Value
                </label>
                <label>
                    <input type="radio" value="sps" checked={mode === 'sps'} onChange={() => { setMode('sps'); setCalc('sps'); }} />
                    Size of the Projected Subject
                </label>
            </div>
            {mode === 'pd' && calc === 'pd' && (
                <div className="entry-container">
                    <label>
                        <div className="entry-field">
                            <p className="pd">Enter focal length (mm):</p>
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                    </label>
                </div>
            )}
            {mode === 'et' && calc === 'et' && (
                <div className="entry-container">
                    <div className="entry-field">
                        <p>Enter focal length (mm):</p><br />
                        <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter pinhole diameter (mm):</p><br />
                        <input type="number" value={pinholeDiameter} onChange={(e) => setPinholeDiameter(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter light intensity (Lux):</p><br />
                        <input type="number" value={lightIntensityLux} onChange={(e) => setLightIntensityLux(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter ISO:</p><br />
                        <input type="number" value={ISO} onChange={(e) => setISO(e.target.value)} />
                    </div>
                </div>
            )}
            {mode === 'fov' && calc === 'fov' && (
                <div className="entry-container">
                    <div className="entry-field">
                        <p>Enter sensor dimension (mm):</p><br />
                        <input type="number" value={sensorDimension} onChange={(e) => setSensorDimension(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter focal length (mm):</p><br />
                        <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                    </div>
                </div>
            )}
            {mode === 'dfs' && calc === 'dfs' && (
                <div className="entry-container">
                    <div className="entry-field">
                        <p>Enter subject width (inches):</p><br />
                        <input type="number" value={subjectWidth} onChange={(e) => setSubjectWidth(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter starting distance from subject (inches):</p><br />
                        <input type="number" value={startingDistance} onChange={(e) => setStartingDistance(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter percentage of frame subject should occupy:</p><br />
                        <input type="number" value={percentageOfFrame} onChange={(e) => setPercentageOfFrame(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter sensor dimension (mm):</p><br />
                        <input type="number" value={sensorDimension} onChange={(e) => setSensorDimension(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter focal length (mm):</p><br />
                        <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                    </div>
                </div>
            )}
            {mode === 'fl' && calc === 'fl' && (
                <div className="entry-container">
                    <div className="entry-field">
                        <p>Enter pinhole diameter (mm):</p><br />
                        <input type="number" value={pinholeDiameter} onChange={(e) => setPinholeDiameter(e.target.value)} />
                    </div>
                </div>
            )}
            {mode === 'iso' && calc === 'iso' && (
                <div className="entry-container">
                    <div className="entry-field">
                        <p>Enter pinhole diameter (mm):</p><br />
                        <input type="number" value={pinholeDiameter} onChange={(e) => setPinholeDiameter(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter focal length (mm):</p><br />
                        <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter exposure time (seconds):</p><br />
                        <input type="number" value={exposureTime} onChange={(e) => setExposureTime(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter exposure value:</p><br />
                        <input type="number" value={exposureValue} onChange={(e) => setExposureValue(e.target.value)} />
                    </div>
                </div>
            )}
            {mode === 'ev' && calc === 'ev' && (
                <div className="entry-container">
                    <div className="entry-field">
                        <p>Enter exposure time (seconds):</p><br />
                        <input type="number" value={exposureTime} onChange={(e) => setExposureTime(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter ISO:</p><br />
                        <input type="number" value={ISO} onChange={(e) => setISO(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter focal length (mm):</p><br />
                        <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter pinhole diameter (mm):</p><br />
                        <input type="number" value={pinholeDiameter} onChange={(e) => setPinholeDiameter(e.target.value)} />
                    </div>
                </div>
            )}
            {mode === 'sps' && calc === 'sps' && (
                <div className="entry-container">
                    <div className="entry-field">
                        <p>Enter subject width (inches):</p><br />
                        <input type="number" value={subjectWidth} onChange={(e) => setSubjectWidth(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter focal length (mm):</p><br />
                        <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                    </div>
                    <div className="entry-field">
                        <p>Enter distance from subject (inches):</p><br />
                        <input type="number" value={startingDistance} onChange={(e) => setStartingDistance(e.target.value)} />
                    </div>
                </div>
            )}
            <div className="bottom-div" style={{ top: mode ? '540px' : '350px' }}>
                <button className="button" onClick={handleCalculate}>Calculate</button>
                <div className="result" style={{ display: result === '' ? 'none' : 'unset' }}>
                    <p className="result-label">Result:</p>
                    <p className="results">{result}</p>
                </div>
                <div className="chart-div" style={{ marginTop: result === '' ? '120px' : '30px' }}>
                    <PinholeFLDiameterFStop className="chart" />
                </div>
            </div>
        </div>
    )
}

export default Pinhole
