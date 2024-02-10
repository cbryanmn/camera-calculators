import React from 'react';
import './RefractiveIndices.css';

function RefractiveIndices() {
    return (
        <div>
            <table className="ri-table">
                <thead>
                    <tr>
                        <th style={{ borderTopLeftRadius: '15px' }}>Substance</th>
                        <th style={{ borderTopRightRadius: '15px' }}>n</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vacuum</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Air (Sea Level)</td>
                        <td>1.0003</td>
                    </tr>
                    <tr>
                        <td>Water (20°C)</td>
                        <td>1.333</td>
                    </tr>
                    <tr>
                        <td>Clear Glass</td>
                        <td>1.52</td>
                    </tr>
                    <tr>
                        <td>Flint Glass</td>
                        <td>1.62</td>
                    </tr>
                    <tr>
                        <td>Quartz Crystal</td>
                        <td>1.5485</td>
                    </tr>
                    <tr>
                        <td>Diamond</td>
                        <td>2.42</td>
                    </tr>
                    <tr>
                        <td>Acyrlic</td>
                        <td>1.49</td>
                    </tr>
                    <tr>
                        <td>Polycarbonate</td>
                        <td>1.58</td>
                    </tr>
                    <tr>
                        <td>Ice</td>
                        <td>1.31</td>
                    </tr>
                    <tr>
                        <td>Ethanol</td>
                        <td>1.36</td>
                    </tr>
                    <tr>
                        <td>Glycerol</td>
                        <td>1.47</td>
                    </tr>
                    <tr>
                        <td>Olive Oil</td>
                        <td>1.47</td>
                    </tr>
                    <tr>
                        <td style={{ borderBottomLeftRadius: '15px' }}>Silicon</td>
                        <td style={{ borderBottomRightRadius: '15px' }}>3.42</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RefractiveIndices
