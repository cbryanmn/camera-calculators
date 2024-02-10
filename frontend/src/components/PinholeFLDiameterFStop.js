import React, { useEffect, useState } from 'react';
import './PinholeFLDiameterFStop.css';

function PinholeFLDiameterFStop() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const data = [];
        data.push({ focalLength: 10, pinholeDiameter: 0.12 });
        data.push({ focalLength: 17, pinholeDiameter: 0.15 });
        data.push({ focalLength: 24, pinholeDiameter: 0.18 });
        data.push({ focalLength: 30, pinholeDiameter: 0.20 });
        data.push({ focalLength: 36, pinholeDiameter: 0.22 });
        data.push({ focalLength: 47, pinholeDiameter: 0.25 });
        data.push({ focalLength: 58, pinholeDiameter: 0.28 });
        data.push({ focalLength: 67, pinholeDiameter: 0.30 });
        data.push({ focalLength: 76, pinholeDiameter: 0.32 });
        data.push({ focalLength: 91, pinholeDiameter: 0.35 });
        data.push({ focalLength: 108, pinholeDiameter: 0.38 });
        data.push({ focalLength: 119, pinholeDiameter: 0.40 });
        data.push({ focalLength: 131, pinholeDiameter: 0.42 });
        data.push({ focalLength: 151, pinholeDiameter: 0.45 });
        data.push({ focalLength: 186, pinholeDiameter: 0.50 });
        data.push({ focalLength: 225, pinholeDiameter: 0.55 });
        data.push({ focalLength: 268, pinholeDiameter: 0.60 });
        data.push({ focalLength: 315, pinholeDiameter: 0.65 });
        data.push({ focalLength: 365, pinholeDiameter: 0.70 });

        const lightIntensityLux = 550;
        const ISO = 100;
        const referenceLux = 10000;
        const baseExposureTime = 1 / (ISO / 100);

        const calculatedData = data.map(row => {
            const fNumber = row.focalLength / row.pinholeDiameter;
            const lightFactor = referenceLux / lightIntensityLux;
            const exposureTime = baseExposureTime * Math.pow(fNumber / 16, 2) * lightFactor;
            const exposureValue = Math.log2((100 * row.pinholeDiameter) / (100 * exposureTime));

            return {
                ...row,
                fNumber: fNumber.toFixed(2),
                exposureTime: exposureTime.toFixed(2),
                exposureDuration: formatDuration(parseFloat(exposureTime.toFixed(2))),
                exposureValue: exposureValue.toFixed(2)
            };
        });

        setTableData(calculatedData);
    }, []);

    function formatDuration(seconds) {
        const totalSeconds = Math.floor(seconds);
        let remainderSeconds = seconds - totalSeconds;

        const days = Math.floor(totalSeconds / (3600 * 24));
        let remainder = totalSeconds % (3600 * 24);
        const hrs = Math.floor(remainder / 3600);
        remainder = remainder % 3600;
        const mnts = Math.floor(remainder / 60);
        const secs = remainder % 60 + remainderSeconds;

        return `${days}:${hrs > 9 ? hrs : '0' + hrs}:${mnts > 9 ? mnts : '0' + mnts}:${secs.toFixed(2).padStart(5, '0')}`;
    };

    return (
        <table className="pinhole-table">
            <thead>
                <tr>
                    <th className="ph-top-left">Focal Length (mm)</th>
                    <th>Pinhole Diameter (mm)</th>
                    <th>F-Number</th>
                    <th>Exposure (seconds)</th>
                    <th>Exposure (d:hh:mm:ss)</th>
                    <th className="ph-top-right">EV</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.focalLength}</td>
                        <td>{row.pinholeDiameter}</td>
                        <td>{row.fNumber}</td>
                        <td>{row.exposureTime}</td>
                        <td>{row.exposureDuration}</td>
                        <td>{row.exposureValue}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PinholeFLDiameterFStop;





















// import React from 'react'

// function PinholeFLDiameterFStop() {

//     function calculateExposureTime() {
//         const table = document.getElementById("myTable");
//         for (let i = 1; i < table.rows.length; i++) {
//             const pinholeDiameter = parseInt(table.rows[i].cells[1].innerHTML);
//             const lightIntensityLux = 550;
//             const ISO = 100;
//             const focalLength = parseInt(table.rows[i].cells[0].innerHTML);
//             const fNumber = focalLength / pinholeDiameter;
//             const referenceLux = 10000;
//             const lightFactor = referenceLux / lightIntensityLux;
//             const baseExposureTime = 1 / (ISO / 100);
//             const exposureTime = baseExposureTime * Math.pow(fNumber / 16, 2) * lightFactor;
//             table.rows[i].cells[3].innerHTML = exposureTime;
//         };
//     };

//     function formatDuration(seconds) {
//         const days = Math.floor(seconds / (3600 * 24));
//         seconds -= days * 3600 * 24;
//         const hrs = Math.floor(seconds / 3600);
//         seconds -= hrs * 3600;
//         const mnts = Math.floor(seconds / 60);
//         seconds -= mnts * 60;

//         return `${days}:${hrs > 9 ? hrs : '0' + hrs}:${mnts > 9 ? mnts : '0' + mnts}:${seconds > 9 ? seconds : '0' + seconds}`;
//     };

//     function populateDuration() {
//         const table = document.getElementById("myTable");
//         for (let i = 1; i < table.rows.length; i++) {
//             const seconds = parseInt(table.rows[i].cells[3].innerHTML, 10);
//             table.rows[i].cells[4].innerHTML = formatDuration(seconds);
//         };
//     };

//     window.onload = function () {
//         calculateExposureTime();
//         populateDuration();
//     };

//     return (
//         <table id="myTable">
//             <thead>
//                 <tr>
//                     <th colspan="5">Pinhole Camera Guide (ISO 100 & 550 Lux)</th>
//                 </tr>
//             </thead>
//             <tr>
//                 <td>Focal Length (mm)</td>
//                 <td>Pinhole Diameter (mm)</td>
//                 <td>F-Number</td>
//                 <td>Exposure (seconds)</td>
//                 <td>Exposure (dd:hh:mm:ss)</td>
//             </tr>
//             <tr>
//                 <td>10</td>
//                 <td>0.12</td>
//                 <td>83</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>17</td>
//                 <td>0.15</td>
//                 <td>112</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>24</td>
//                 <td>0.18</td>
//                 <td>134</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>30</td>
//                 <td>0.20</td>
//                 <td>149</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>36</td>
//                 <td>0.22</td>
//                 <td>164</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>47</td>
//                 <td>0.25</td>
//                 <td>186</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>58</td>
//                 <td>0.28</td>
//                 <td>209</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>67</td>
//                 <td>0.30</td>
//                 <td>224</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>76</td>
//                 <td>0.32</td>
//                 <td>238</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>91</td>
//                 <td>0.35</td>
//                 <td>261</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>108</td>
//                 <td>0.38</td>
//                 <td>283</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>119</td>
//                 <td>0.40</td>
//                 <td>298</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>131</td>
//                 <td>0.42</td>
//                 <td>313</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>151</td>
//                 <td>0.45</td>
//                 <td>335</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>186</td>
//                 <td>0.50</td>
//                 <td>373</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>225</td>
//                 <td>0.55</td>
//                 <td>410</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>268</td>
//                 <td>0.60</td>
//                 <td>447</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>315</td>
//                 <td>0.65</td>
//                 <td>484</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>365</td>
//                 <td>0.70</td>
//                 <td>522</td>
//                 <td></td>
//                 <td></td>
//             </tr>
//         </table>
//     );
// };

// export default PinholeFLDiameterFStop
