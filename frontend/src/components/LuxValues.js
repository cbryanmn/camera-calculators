import React from 'react';
import './LuxValues.css';

function LuxValues() {
    return (
        <div>
            <table className="lux-values-table">
                <thead>
                    <tr>
                        <th className="lv-bb" style={{ borderTopLeftRadius: '15px' }}>Setting</th>
                        <th className="lv-bb" style={{ borderTopRightRadius: '15px' }}>Lux Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="contrast lv-loc">Outdoors</td>
                    </tr>
                    <tr>
                        <td>Moonless, Overcast Night Sky (Starlight)</td>
                        <td>0.0001</td>
                    </tr>
                    <tr>
                        <td>Moonless Clear Night Sky with Airglow</td>
                        <td>0.002</td>
                    </tr>
                    <tr>
                        <td>Full Moon on a Clear Night</td>
                        <td>0.27 to 1</td>
                    </tr>
                    <tr>
                        <td>Dark Overcast Day</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Very Dark Overcast Day</td>
                        <td>1,000</td>
                    </tr>
                    <tr>
                        <td>Sunrise or Sunset on a Clear Day</td>
                        <td>400</td>
                    </tr>
                    <tr>
                        <td>Full Daylight (Indirect Sunlight)</td>
                        <td>10,000 to 25,000</td>
                    </tr>
                    <tr>
                        <td>Direct Sunlight</td>
                        <td>32,000 to 100,000</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="contrast lv-loc">Indoors</td>
                    </tr>
                    <tr>
                        <td>Living Room</td>
                        <td>50 to 200</td>
                    </tr>
                    <tr>
                        <td>Kitchen (General)</td>
                        <td>150 to 250</td>
                    </tr>
                    <tr>
                        <td>Kitchen (Task Areas)</td>
                        <td>300 to 750</td>
                    </tr>
                    <tr>
                        <td>Bedroom</td>
                        <td>100 to 300</td>
                    </tr>
                    <tr>
                        <td>Bathroom</td>
                        <td>100 to 500</td>
                    </tr>
                    <tr>
                        <td>Hallway/Staircase</td>
                        <td>100 to 200</td>
                    </tr>
                    <tr>
                        <td>Reading or Study Area</td>
                        <td>300 to 500</td>
                    </tr>
                    <tr>
                        <td>Dining Area</td>
                        <td>100 to 300</td>
                    </tr>
                    <tr>
                        <td>Office</td>
                        <td>320 to 500</td>
                    </tr>
                    <tr className="lv-bottom-row">
                        <td className="lv-bl" style={{ borderBottomLeftRadius: '15px' }}>TV Studio</td>
                        <td className="lv-br" style={{ borderBottomRightRadius: '15px' }}>1,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LuxValues
