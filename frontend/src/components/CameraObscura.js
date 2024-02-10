import React, { useState } from 'react';
import PinholeFLDiameterFStop from './PinholeFLDiameterFStop';
import RefractiveIndices from './RefractiveIndices';
import LuxValues from './LuxValues';
import ExposureTimes from './ExposureTimes';
import './CameraObscura.css';

function CameraObscura() {
    const [lens, setLens] = useState('');
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');
    const [chartSelection, setChartSelection] = useState(null);
    const [chartTitle, setChartTitle] = useState('');
    const [focalLength, setFocalLength] = useState('');
    const [fStop, setFStop] = useState('');
    const [aperture, setAperture] = useState('');
    const [lightIntensity, setLightIntensity] = useState('');
    const [iso, setIso] = useState('');
    const [subjectWidth, setSubjectWidth] = useState('');
    const [fieldOfView, setFieldOfView] = useState('');
    const [mirrorToPjS, setMirrorToPjS] = useState('');
    const [startingDistance, setStartingDistance] = useState('');
    const [percentageOfFrame, setPercentageOfFrame] = useState('');
    const [curveDirection, setCurveDirection] = useState('');
    const [lensHeight, setLensHeight] = useState('');
    const [lensWidth, setLensWidth] = useState('');
    const [lensThickness, setLensThickness] = useState('');
    const [sensorDimension, setSensorDimension] = useState('');
    const [refractiveIndex, setRefractiveIndex] = useState('');
    const [luxValue, setLuxValue] = useState('');
    const [circleOfConfusion, setCircleOfConfusion] = useState('');
    const [focusedDistance, setFocusedDistance] = useState('');
    const [unfocusedDistance, setUnfocusedDistance] = useState('');
    const [exposureTime, setExposureTime] = useState('');
    const [glassWidth, setGlassWidth] = useState('');
    const [distanceGlassToHole, setDistanceGlassToHole] = useState('');
    const [meniscus, setMeniscus] = useState('');
    const [exposureValue, setExposureValue] = useState('');

    const calculatePinholeDiameter = (focalLength) => {
        const lambda = 550 * Math.pow(10, -9);

        return Math.sqrt(1.9 * focalLength * lambda);
    };

    const calculatePinholeExposureTime = (focalLength, lightIntensity, iso) => {
        const fNumber = focalLength / aperture;
        const referenceLux = 10000;
        const lightFactor = referenceLux / lightIntensity;
        const baseExposureTime = 1 / (iso / 100);

        return baseExposureTime * Math.pow(fNumber / 16, 2) * lightFactor;
    };

    const calculatePinholeSubjectPlacement = (percentageOfFrame, sensorDimension, startingDistance, subjectWidth) => {
        const framePercentage = percentageOfFrame / 100;
        const fieldOfView = 2 * Math.atan(sensorDimension / (2 * focalLength));
        const frameWidthAtDistance = 2 * startingDistance * Math.atan(fieldOfView / 2);
        const subjectWidthInFrame = frameWidthAtDistance * framePercentage;

        return (subjectWidth * startingDistance) / subjectWidthInFrame;
    };

    const calculatePinholeFocalLength = (aperture) => {
        const lambda = 550 * Math.pow(10, -9);
        const oneNineLambda = 1.9 * lambda;
        const pinholeOneNineLambda = aperture / oneNineLambda;
        const effectivefocalLength = Math.pow(pinholeOneNineLambda, 2);

        return effectivefocalLength * 1000;
    };

    const calculatePinholeIso = (focalLength, aperture, exposureTime, exposureValue) => {
        const fStopValue = focalLength / aperture;
        const ev100 = Math.log2(Math.pow(fStopValue, 2) / exposureTime);
        const exponent = exposureValue - ev100;

        return 100 * Math.pow(2, exponent);
    };

    const calculatePinholeExposureValue = (focalLength, aperture, exposureTime, iso) => {
        const fStopNumValue = focalLength / aperture;

        return (Math.log2(Math.pow(fStopNumValue, 2) / exposureTime)) + Math.log2(iso / 100);
    };

    const calculateApertureCg = (focalLength, glassWidth) => {
        return focalLength / (focalLength / glassWidth);
    };

    const calculateApertureW = (glassWidth, meniscus, distanceGlassToHole) => {
        const glassWidthMm = glassWidth * 10;
        const radius = glassWidthMm / 2;
        const theta = Math.acos((radius - meniscus) / radius);

        return glassWidthMm + 2 * Math.tan(theta) * distanceGlassToHole;
    };

    const calculateApertureMl = (focalLength, fStop) => {
        return focalLength / fStop;
    }

    const calculateFStop = (focalLength, aperture) => {
        return focalLength / aperture;
    };

    const calculateExposureTime = (focalLength, aperture, iso, lightIntensity) => {
        const lambda = 550 * Math.pow(10, -9);
        const fNumber = focalLength / aperture;
        const d = 1.22 * lambda * (fNumber / aperture);
        const fd = d / aperture;
        const a = Math.PI * Math.pow((aperture / 2), 2);
        const i = (100 / iso) * (1 / 100);
        const stopsDifferent = Math.log2(fNumber / 16);
        const stopsEffect = Math.pow(2, stopsDifferent);
        const t = fNumber * stopsDifferent * stopsEffect;
        const c = (a * lightIntensity * i) / (t / fd);

        return (a * lightIntensity * i) / c;
    };

    const calculatePlacement = (subjectWidth, startingDistance, fieldOfView, percentageOfFrame) => {
        const frameWidth = subjectWidth * startingDistance * Math.tan(fieldOfView * (percentageOfFrame / 100));

        return (subjectWidth * frameWidth) / (frameWidth * (percentageOfFrame / 100));
    };

    const calculateMirrorPlacement = (focalLength) => {
        return focalLength;
    };

    const calculateFocalLengthCgConvex = (lensWidth, lensHeight, refractiveIndex, lensThickness) => {
        const radius = (lensWidth / 2) * 100;
        const r1 = (Math.pow(lensHeight, 2) + Math.pow(radius, 2)) / (2 * lensHeight);
        const r2 = r1 * -1;

        return 1 / ((refractiveIndex - 1) * ((1 / r1) - (1 / r2) + ((lensHeight - 1) * lensThickness) / (lensHeight * r1 * r2)));
    };

    const calculateFocalLengthCgConcave = (lensWidth, lensHeight, refractiveIndex, lensThickness) => {
        const radius = (lensWidth / 2) * 100;
        const r1 = -1 * ((Math.pow(lensHeight, 2) + Math.pow(radius, 2)) / (2 * lensHeight));
        const r2 = Math.abs(r1);

        return 1 / ((refractiveIndex - 1) * ((1 / r1) - (1 / r2) + ((lensHeight - 1) * lensThickness) / (lensHeight * r1 * r2)));
    };

    const calculateFocalLengthW = (glassWidth) => {
        return ((glassWidth / 2) * 100) / (1.333 - 1);
    };

    const calculateFocalLengthMl = (focalLength, aperture) => {
        return focalLength / aperture;
    };

    const calculateFieldOfView = (sensorDimension, focalLength) => {
        return 2 * Math.atan((sensorDimension * 25.4) / (2 * focalLength));
    };

    const calculateIso = (luxValue, exposureTime, aperture) => {
        return (luxValue * exposureTime) / Math.pow(aperture, 2);
    };

    const calculateDepthOfField = (fStop, circleOfConfusion, startingDistance, focalLength) => {
        const sDInMm = startingDistance / 25.4;

        return (2 * fStop * circleOfConfusion * (Math.pow(sDInMm, 2) + Math.pow(focalLength, 2))) / (Math.pow(sDInMm, 2) + Math.pow(fStop, 2) * circleOfConfusion - (2 * fStop * circleOfConfusion * sDInMm));
    };

    const calculateCircleOfConfusion = (focusedDistance, unfocusedDistance, focalLength, fStop, aperture) => {
        return (Math.abs(focusedDistance - unfocusedDistance) / 2) * Math.pow(focalLength, 2) / (fStop * aperture);
    };

    const calculateProjectedImageSize = (subjectWidth, mirrorToPjS, focalLength) => {
        const sWInMm = subjectWidth * 25.4;
        const mTPSInMm = mirrorToPjS * 25.4;

        return (sWInMm * (mTPSInMm / focalLength)) / 25.4;
    };

    const calculateExposureValue = (fStop, exposureTime, iso) => {
        return (Math.log2(Math.pow(fStop, 2) / exposureTime)) + Math.log2(iso / 100);
    };

    const handleCalculate = () => {
        let calculatedResult = '';
        if (lens === 'ph' && calc === 'pd') {
            calculatedResult = `Optimal pinhole diameter: ${calculatePinholeDiameter(parseFloat(focalLength)).toFixed(2)} mm`;
        } else if (lens === 'ph' && calc === 'et') {
            calculatedResult = `Optimal exposure time: ${calculatePinholeExposureTime(parseFloat(focalLength), parseFloat(lightIntensity), parseFloat(iso)).toFixed(2)} seconds`;
        } else if (lens === 'ph' && calc === 'p') {
            calculatedResult = `Optimal distance from aperture to subject: ${calculatePinholeSubjectPlacement(parseFloat(percentageOfFrame), parseFloat(sensorDimension), parseFloat(startingDistance), parseFloat(subjectWidth)).toFixed(2)} inches`;
        } else if (lens === 'ph' && calc === 'fl') {
            calculatedResult = `Optimal focal length: ${calculatePinholeFocalLength(parseFloat(aperture)).toFixed(2)} mm`;
        } else if (lens === 'ph' && calc === 'iso') {
            calculatedResult = `Optimal ISO: ${calculatePinholeIso(parseFloat(focalLength), parseFloat(aperture), parseFloat(exposureTime), parseFloat(exposureValue)).toFixed(5)}`;
        } else if (lens === 'ph' && calc === 'ev') {
            calculatedResult = `Exposure value: ${calculatePinholeExposureValue(parseFloat(focalLength), parseFloat(aperture), parseFloat(exposureTime), parseFloat(iso)).toFixed(2)}`;
        } else if (lens === 'cg' && calc === 'da') {
            calculatedResult = `Optimal Diameter of Aperture: ${calculateApertureCg(parseFloat(focalLength), parseFloat(glassWidth)).toFixed(2)} mm`;
        } else if (lens === 'w' && calc === 'da') {
            calculatedResult = `Optimal Diameter of Aperture: ${calculateApertureW(parseFloat(glassWidth), parseFloat(distanceGlassToHole)).toFixed(2)} mm`;
        } else if (lens === 'ml' && calc === 'da') {
            calculatedResult = `Optimal Diameter of Aperture: ${calculateApertureMl(parseFloat(focalLength), parseFloat(fStop))} mm`;
        } else if (calc === 'fs') {
            calculatedResult = `F-Stop: ${calculateFStop(parseFloat(focalLength), parseFloat(aperture)).toFixed(4)}`;
        } else if (calc === 'et') {
            calculatedResult = `Optimal Exposure Time: ${calculateExposureTime(parseFloat(focalLength), parseFloat(aperture), parseFloat(lightIntensity), parseFloat(iso)).toFixed(2)} seconds`;
        } else if (calc === 'p') {
            calculatedResult = `Optimal Subject Placement: ${calculatePlacement(parseFloat(subjectWidth), parseFloat(startingDistance), parseFloat(percentageOfFrame), parseFloat(fieldOfView)).toFixed(2)} mm from aperture`;
        } else if (calc === 'imp') {
            calculatedResult = `Optimal distance of internal mirror from aperture: ${calculateMirrorPlacement(parseFloat(focalLength)).toFixed(2)} mm`
        } else if (lens === 'cg' && calc === 'fl' && curveDirection === 'convex') {
            calculatedResult = `Effective Focal Length: ${calculateFocalLengthCgConvex(parseFloat(lensWidth), parseFloat(lensHeight), parseFloat(refractiveIndex), parseFloat(lensThickness)).toFixed(2)} mm`;
        } else if (lens === 'cg' && calc === 'fl' && curveDirection === 'concave') {
            calculatedResult = `Effective Focal Length: ${calculateFocalLengthCgConcave(parseFloat(lensWidth), parseFloat(lensHeight), parseFloat(refractiveIndex), parseFloat(lensThickness)).toFixed(2)} mm`;
        } else if (lens === 'w' && calc === 'fl') {
            calculatedResult = `Effective Focal Length: ${calculateFocalLengthW(parseFloat(glassWidth)).toFixed(2)} mm`;
        } else if (lens === 'ml' && calc === 'fl') {
            calculatedResult = `Effective Focal Length: ${calculateFocalLengthMl(parseFloat(focalLength), parseFloat(aperture)).toFixed(2)} mm`;
        } else if (calc === 'fov') {
            calculatedResult = `Field of View: ${calculateFieldOfView(parseFloat(focalLength), parseFloat(sensorDimension)).toFixed(2)} degrees`;
        } else if (calc === 'iso') {
            calculatedResult = `Optimal ISO: ${calculateIso(parseFloat(luxValue), parseFloat(exposureTime), parseFloat(aperture)).toFixed(2)}`;
        } else if (calc === 'dof') {
            calculatedResult = `Depth of Field: ${calculateDepthOfField(parseFloat(focalLength), parseFloat(fStop), parseFloat(circleOfConfusion), parseFloat(startingDistance)).toFixed(2)} mm`;
        } else if (calc === 'cc') {
            calculatedResult = `Circle of Confusion: ${calculateCircleOfConfusion(parseFloat(focusedDistance), parseFloat(unfocusedDistance), parseFloat(focalLength), parseFloat(fStop), parseFloat(aperture)).toFixed(2)} mm`;
        } else if (calc === 'spi') {
            calculatedResult = `Size of Projected Image: ${calculateProjectedImageSize(parseFloat(subjectWidth), parseFloat(mirrorToPjS), parseFloat(focalLength)).toFixed(2)} inches`;
        } else if (calc === 'ev') {
            calculatedResult = `Exposure Value: ${calculateExposureValue(parseFloat(fStop), parseFloat(exposureTime), parseFloat(iso)).toFixed(2)}`;
        }
        setResult(calculatedResult);
    };

    return (
        <div className="co-calc-container">
            <h2 className="co-h2-top">Camera Obscura</h2>
            <h2 className="co-h2-bottom">Camera Obscura</h2>
            <p className="co-select">Select lens type:</p>
            <div className="lens-options-container">
                <label>
                    <input type="radio" value="ph" checked={lens === 'ph'} onChange={() => { setLens('ph'); setCalc(''); }} />None (Pinhole)
                </label>
                <label>
                    <input type="radio" value="cg" checked={lens === 'cg'} onChange={() => { setLens('cg'); setCalc(''); }} />Curved Glass
                </label>
                <label>
                    <input type="radio" value="w" checked={lens === 'w'} onChange={() => { setLens('w'); setCalc(''); }} />Water
                </label>
                <label>
                    <input type="radio" value="ml" checked={lens === 'ml'} onChange={() => { setLens('ml'); setCalc(''); }} />Modern Lens
                </label>
            </div>
            <div className="co-options-background" style={{ display: lens === '' ? 'none' : 'unset' }}>
                {lens === 'ph' && (
                    <div className="co-options">
                        <div className="co-options-container-top">
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="pd" checked={calc === 'pd'} onChange={() => { setCalc('pd') }} />Pinhole Diameter
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="et" checked={calc === 'et'} onChange={() => { setCalc('et') }} />Exposure Time
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fov" checked={calc === 'fov'} onChange={() => { setCalc('fov') }} />Field of View
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="p" checked={calc === 'p'} onChange={() => { setCalc('p') }} />Subject Placement
                                </label>
                            </div>
                        </div>
                        <div className="co-options-container-bottom">
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fl" checked={calc === 'fl'} onChange={() => { setCalc('fl') }} />Focal Length
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="iso" checked={calc === 'iso'} onChange={() => { setCalc('iso') }} />ISO
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="ev" checked={calc === 'ev'} onChange={() => { setCalc('ev') }} />Exposure Value
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="spi" checked={calc === 'spi'} onChange={() => { setCalc('spi') }} />Size of the Projected Image
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                {lens === 'cg' && (
                    <div className="co-options">
                        <div className="co-options-container-top">
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="da" checked={calc === 'da'} onChange={() => { setCalc('da') }} />Aperture
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fs" checked={calc === 'fs'} onChange={() => { setCalc('fs') }} />F-Stop
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="et" checked={calc === 'et'} onChange={() => { setCalc('et') }} />Exposure Time
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="p" checked={calc === 'p'} onChange={() => { setCalc('p') }} />Subject Placement
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="imp" checked={calc === 'imp'} onChange={() => { setCalc('imp') }} />Mirror Placement
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fl" checked={calc === 'fl'} onChange={() => { setCalc('fl') }} />Focal Length
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fov" checked={calc === 'fov'} onChange={() => { setCalc('fov') }} />Field of View
                                </label>
                            </div>
                        </div>
                        <div className="co-options-container-bottom">
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="iso" checked={calc === 'iso'} onChange={() => { setCalc('iso') }} />ISO
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="dof" checked={calc === 'dof'} onChange={() => { setCalc('dof') }} />Depth of Field
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="cc" checked={calc === 'cc'} onChange={() => { setCalc('cc') }} />Circle of Confusion
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="spi" checked={calc === 'spi'} onChange={() => { setCalc('spi') }} />Size of Projected Image
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="ev" checked={calc === 'ev'} onChange={() => { setCalc('ev') }} />Exposure Value
                                </label>
                            </div>
                        </div>
                    </div>)}
                {lens === 'w' && (
                    <div className="co-options">
                        <div className="co-options-container-top">
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="da" checked={calc === 'da'} onChange={() => { setCalc('da') }} />Aperture
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fs" checked={calc === 'fs'} onChange={() => { setCalc('fs') }} />F-Stop
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="et" checked={calc === 'et'} onChange={() => { setCalc('et') }} />Exposure Time
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="p" checked={calc === 'p'} onChange={() => { setCalc('p') }} />Subject Placement
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="imp" checked={calc === 'imp'} onChange={() => { setCalc('imp') }} />Mirror Placement
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fl" checked={calc === 'fl'} onChange={() => { setCalc('fl') }} />Focal Length
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fov" checked={calc === 'fov'} onChange={() => { setCalc('fov') }} />Field of View
                                </label>
                            </div>
                        </div>
                        <div className="co-options-container-bottom">
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="iso" checked={calc === 'iso'} onChange={() => { setCalc('iso') }} />ISO
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="dof" checked={calc === 'dof'} onChange={() => { setCalc('dof') }} />Depth of Field
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="cc" checked={calc === 'cc'} onChange={() => { setCalc('cc') }} />Circle of Confusion
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="spi" checked={calc === 'spi'} onChange={() => { setCalc('spi') }} />Size of Projected Image
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="ev" checked={calc === 'ev'} onChange={() => { setCalc('ev') }} />Exposure Value
                                </label>
                            </div>
                        </div>
                    </div>)}
                {lens === 'ml' && (
                    <div className="co-options">
                        <div className="co-options-container-top">
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="da" checked={calc === 'da'} onChange={() => { setCalc('da') }} />Aperture
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fs" checked={calc === 'fs'} onChange={() => { setCalc('fs') }} />F-Stop
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="p" checked={calc === 'p'} onChange={() => { setCalc('p') }} />Subject Placement
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="imp" checked={calc === 'imp'} onChange={() => { setCalc('imp') }} />Mirror Placement
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fl" checked={calc === 'fl'} onChange={() => { setCalc('fl') }} />Focal Length
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="fov" checked={calc === 'fov'} onChange={() => { setCalc('fov') }} />Field of View
                                </label>
                            </div>
                        </div>
                        <div className="co-options-container-bottom">
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="iso" checked={calc === 'iso'} onChange={() => { setCalc('iso') }} />ISO
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="dof" checked={calc === 'dof'} onChange={() => { setCalc('dof') }} />Depth of Field
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="cc" checked={calc === 'cc'} onChange={() => { setCalc('cc') }} />Circle of Confusion
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="spi" checked={calc === 'spi'} onChange={() => { setCalc('spi') }} />Size of Projected Image
                                </label>
                            </div>
                            <div className="co-calc-choice">
                                <label>
                                    <input type="radio" value="ev" checked={calc === 'ev'} onChange={() => { setCalc('ev') }} />Exposure Value
                                </label>
                            </div>
                        </div>
                    </div>)}
                {lens === 'ph' && calc === 'pd' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'ph' && calc === 'et' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter pinhole diameter (mm):</p><br />
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter light intensity factor:</p>
                            <input type="number" value={lightIntensity} onChange={(e) => setLightIntensity(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter ISO:</p>
                            <input type="number" value={iso} onChange={(e) => setIso(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'ph' && calc === 'p' && (
                    <div className="co-entry-container-mt">
                        <div className="co-entry-field">
                            <p>Enter subject width (inches):</p>
                            <input type="number" value={subjectWidth} onChange={(e) => setSubjectWidth(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter starting distance from subject (inches):</p><br />
                            <input type="number" value={startingDistance} onChange={(e) => setStartingDistance(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter percentage of frame subject should occupy:</p><br />
                            <input type="number" value={percentageOfFrame} onChange={(e) => setPercentageOfFrame(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter sensor width (inches):</p><br />
                            <input type="number" value={sensorDimension} onChange={(e) => setSensorDimension(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'ph' && calc === 'fl' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter pinhole diameter (mm):</p><br />
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'ph' && calc === 'iso' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter pinhole diameter (mm):</p><br />
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter exposure time (seconds):</p>
                            <input type="number" value={exposureTime} onChange={(e) => setExposureTime(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter exposure value:</p>
                            <input type="number" value={exposureValue} onChange={(e) => setExposureValue(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'ph' && calc === 'ev' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter exposure time (seconds):</p><br />
                            <input type="number" value={exposureTime} onChange={(e) => setExposureTime(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter ISO:</p>
                            <input type="number" value={iso} onChange={(e) => setIso(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter pinhole diameter (mm):</p><br />
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'cg' && calc === 'da' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter glass width (cm):</p>
                            <input type="number" value={glassWidth} onChange={(e) => setGlassWidth(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'fs' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter diameter of aperture (mm):</p><br />
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'et' && (lens === 'cg' || lens === 'w') && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter diameter of aperture (mm):</p><br />
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter light intensity factor:</p>
                            <input type="number" value={lightIntensity} onChange={(e) => setLightIntensity(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter ISO:</p>
                            <input type="number" value={iso} onChange={(e) => setIso(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'p' && (lens === 'cg' || lens === 'w' || lens === 'ml') && (
                    <div className="co-entry-container-mt">
                        <div className="co-entry-field">
                            <p>Enter subject width (inches):</p>
                            <input type="number" value={subjectWidth} onChange={(e) => setSubjectWidth(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter field of view:</p>
                            <input type="number" value={fieldOfView} onChange={(e) => setFieldOfView(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter starting distance from subject (inches):</p><br />
                            <input type="number" value={startingDistance} onChange={(e) => setStartingDistance(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter percentage of frame subject should occupy:</p><br />
                            <input type="number" value={percentageOfFrame} onChange={(e) => setPercentageOfFrame(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'cg' && calc === 'fl' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field-radio">
                            <p>Shape:</p>
                            <label>
                                <input type="radio" value="concave" checked={curveDirection === 'concave'} onChange={() => setCurveDirection('concave')} />
                                Concave
                            </label>
                            <label>
                                <input type="radio" value="convex" checked={curveDirection === 'convex'} onChange={() => setCurveDirection('convex')} />
                                Convex
                            </label>
                        </div>
                        <div className="sl-entry-field">
                            <p>Enter lens height (mm):</p><br />
                            <input type="number" value={lensHeight} onChange={(e) => setLensHeight(e.target.value)} />
                        </div>
                        <div className="sl-entry-field">
                            <p>Enter lens width (mm):</p><br />
                            <input type="number" value={lensWidth} onChange={(e) => setLensWidth(e.target.value)} />
                        </div>
                        <div className="sl-entry-field">
                            <p>Enter lens thickness (mm):</p><br />
                            <input type="number" value={lensThickness} onChange={(e) => setLensThickness(e.target.value)} />
                        </div>
                        <div className="sl-entry-field">
                            <p>Enter refractive index:</p>
                            <input type="number" value={refractiveIndex} onChange={(e) => setRefractiveIndex(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'fov' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter sensor width (inches):</p><br />
                            <input type="number" value={sensorDimension} onChange={(e) => setSensorDimension(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'iso' && (lens === 'cg' || lens === 'w' || lens === 'ml') && (
                    <div className="co-entry-container-mt">
                        <div className="co-entry-field">
                            <p>Enter lux value:</p>
                            <input type="number" value={luxValue} onChange={(e) => setLuxValue(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter exposure time (seconds):</p>
                            <input type="number" value={exposureTime} onChange={(e) => setExposureTime(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter diameter of aperture (mm):</p>
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'dof' && (
                    <div className="co-entry-container-mt">
                        <div className="co-entry-field">
                            <p>Enter f-stop:</p><br />
                            <input type="number" value={fStop} onChange={(e) => setFStop(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter circle of confusion:</p><br />
                            <input type="number" value={circleOfConfusion} onChange={(e) => setCircleOfConfusion(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Distance from subject (inches):</p><br />
                            <input type="number" value={startingDistance} onChange={(e) => setStartingDistance(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'cc' && (
                    <div className="co-entry-container-mt">
                        <div className="co-entry-field">
                            <p>Enter distance to focused subject (mm):</p><br />
                            <input type="number" value={focusedDistance} onChange={(e) => setFocusedDistance(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter distance to unfocused subject (mm):</p><br />
                            <input type="number" value={unfocusedDistance} onChange={(e) => setUnfocusedDistance(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter diameter of aperture (mm):</p><br />
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter f-stop:</p><br />
                            <input type="number" value={fStop} onChange={(e) => setFStop(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'spi' && (
                    <div className="co-entry-container-mt">
                        <div className="co-entry-field">
                            <p>Enter subject width (inches):</p>
                            <input type="number" value={subjectWidth} onChange={(e) => setSubjectWidth(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter distance from mirror to projection surface (inches):</p><br />
                            <input type="number" value={mirrorToPjS} onChange={(e) => setMirrorToPjS(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'ev' && (lens === 'cg' || lens === 'w' || lens === 'ml') && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter f-stop:</p><br />
                            <input type="number" value={fStop} onChange={(e) => setFStop(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter exposure time (seconds):</p><br />
                            <input type="number" value={exposureTime} onChange={(e) => setExposureTime(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter ISO:</p>
                            <input type="number" value={iso} onChange={(e) => setIso(e.target.value)} />
                        </div>
                    </div>
                )}
                {calc === 'imp' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'w' && calc === 'da' && (
                    <div className="co-entry-container-mt">
                        <div className="co-entry-field">
                            <p>Enter glass width (cm):</p>
                            <input type="number" value={glassWidth} onChange={(e) => setGlassWidth(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter distance from glass to aperture (mm):</p>
                            <input type="number" value={distanceGlassToHole} onChange={(e) => setDistanceGlassToHole(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter height of meniscus (mm):</p>
                            <input type="number" value={meniscus} onChange={(e) => setMeniscus(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'w' && calc === 'fl' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter glass width (cm):</p>
                            <input type="number" value={glassWidth} onChange={(e) => setGlassWidth(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'ml' && calc === 'da' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter focal length (mm):</p><br />
                            <input type="number" value={focalLength} onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter f-stop:</p><br />
                            <input type="number" value={fStop} onChange={(e) => setFStop(e.target.value)} />
                        </div>
                    </div>
                )}
                {lens === 'ml' && calc === 'fl' && (
                    <div className="co-entry-container">
                        <div className="co-entry-field">
                            <p>Enter f-stop:</p><br />
                            <input type="number" value={fStop} onChange={(e) => setFStop(e.target.value)} />
                        </div>
                        <div className="co-entry-field">
                            <p>Enter diameter of aperture (mm):</p><br />
                            <input type="number" value={aperture} onChange={(e) => setAperture(e.target.value)} />
                        </div>
                    </div>
                )}
            </div>
            <div className="co-bottom-div" style={{ display: lens === '' ? 'none' : 'unset' }}>
                <button className="co-button" onClick={handleCalculate}>Calculate</button>
                <div className="co-result" style={{ display: result === '' ? 'none' : 'unset' }}>
                    <p className="co-result-label">Result:</p>
                    <p className="co-results">{result}</p>
                </div>
            </div>
            <div className="co-chart-buttons">
                <p className="co-chart-buttons-p">Charts:</p>
                <button className="co-chart-button" onClick={() => { setChartSelection('phv'); setChartTitle('Pinhole Variables'); }}>Pinhole Variables</button>
                <button className="co-chart-button" onClick={() => { setChartSelection('lux'); setChartTitle('Lux Values'); }}>Lux Values</button>
                <button className="co-chart-button" onClick={() => { setChartSelection('ri'); setChartTitle('Refractive Indices'); }}>Refractive Indices</button>
                <button className="co-chart-button" onClick={() => { setChartSelection('exptimes'); setChartTitle('Exposure Times'); }}>Exposure Times</button>
            </div>
            <div className="co-chart-title-div">
                <p className="co-chart-title-p">{chartTitle}</p>
            </div>
            <div className="co-chart-div" style={{ border: ['phv', 'lux', 'ri', 'exptimes'].includes(chartSelection) ? '2px solid rgb(222, 204, 184)' : '0px solid transparent' }}>
                {chartSelection === 'phv' && <PinholeFLDiameterFStop className="co-chart" />}
                {chartSelection === 'lux' && <LuxValues className="co-chart" />}
                {chartSelection === 'ri' && <RefractiveIndices className="co-chart" />}
                {chartSelection === 'exptimes' && <ExposureTimes className="co-chart" />}
            </div>
        </div >
    )
}

export default CameraObscura
