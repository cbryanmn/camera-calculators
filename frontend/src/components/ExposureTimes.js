import React from 'react';
import './ExposureTimes.css';

function ExposureTimes() {
    return (
        <div>
            <table className="et-table">
                <thead>
                    <tr>
                        <th rowSpan={2} className="th-ev top-left">EV</th>
                        <th colSpan={13} className="contrast top-right">f-number</th>
                    </tr>
                    <tr>
                        <th className="contrast th-fn">1.0</th>
                        <th className="contrast th-fn">1.4</th>
                        <th className="contrast th-fn">2.0</th>
                        <th className="contrast th-fn">2.8</th>
                        <th className="contrast th-fn">4.0</th>
                        <th className="contrast th-fn">5.6</th>
                        <th className="contrast th-fn">8.0</th>
                        <th className="contrast th-fn">11</th>
                        <th className="contrast th-fn">16</th>
                        <th className="contrast th-fn">22</th>
                        <th className="contrast th-fn">32</th>
                        <th className="contrast th-fn">45</th>
                        <th className="contrast th-fn">64</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="contrast td-ev">-6</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                        <td>32 m</td>
                        <td>64 m</td>
                        <td>128 m</td>
                        <td>256 m</td>
                        <td>512 m</td>
                        <td>1024 m</td>
                        <td>2048 m</td>
                        <td>4096 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">-5</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                        <td>32 m</td>
                        <td>64 m</td>
                        <td>128 m</td>
                        <td>256 m</td>
                        <td>512 m</td>
                        <td>1024 m</td>
                        <td>2048 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">-4</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                        <td>32 m</td>
                        <td>64 m</td>
                        <td>128 m</td>
                        <td>256 m</td>
                        <td>512 m</td>
                        <td>1024 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">-3</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                        <td>32 m</td>
                        <td>64 m</td>
                        <td>128 m</td>
                        <td>256 m</td>
                        <td>512 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">-2</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                        <td>32 m</td>
                        <td>64 m</td>
                        <td>128 m</td>
                        <td>256 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">-1</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                        <td>32 m</td>
                        <td>64 m</td>
                        <td>128 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">0</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                        <td>32 m</td>
                        <td>64 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">1</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                        <td>32 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">2</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                        <td>16 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">3</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                        <td>8 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">4</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                        <td>4 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">5</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                        <td>2 m</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">6</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                        <td>60 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">7</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                        <td>30 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">8</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                        <td>15 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">9</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                        <td>8 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">10</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                        <td>4 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">11</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                        <td>2 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">12</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                        <td>1 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">13</td>
                        <td>1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                        <td>1/2 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">14</td>
                        <td>1/16,000</td>
                        <td>1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                        <td>1/4 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">15</td>
                        <td>1/32,000 s</td>
                        <td>1/16,000</td>
                        <td>1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                        <td>1/8 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">16</td>
                        <td></td>
                        <td>1/32,000 s</td>
                        <td>1/16,000</td>
                        <td>1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                        <td>1/15 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">17</td>
                        <td></td>
                        <td></td>
                        <td>1/32,000 s</td>
                        <td>1/16,000</td>
                        <td>1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                        <td>1/30 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">18</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1/32,000 s</td>
                        <td>1/16,000</td>
                        <td>1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                        <td>1/60 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">19</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1/32,000 s</td>
                        <td>1/16,000</td>
                        <td>1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                        <td>1/125 s</td>
                    </tr>
                    <tr>
                        <td className="contrast td-ev">20</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1/32,000 s</td>
                        <td>1/16,000</td>
                        <td>1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td>1/500 s</td>
                        <td>1/250 s</td>
                    </tr>
                    <tr className="bottom-row">
                        <td className="contrast bottom-left td-ev">21</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1/32,000 s</td>
                        <td>1/16,000</td>
                        <td className="sc-br">1/8000 s</td>
                        <td>1/4000 s</td>
                        <td>1/2000 s</td>
                        <td>1/1000 s</td>
                        <td className="bottom-right">1/500 s</td>
                    </tr>
                </tbody>
            </table>
            <div className="et-table-1000-div">
                <table className="et-table-1000-1">
                    <thead>
                        <tr>
                            <th rowSpan={2} className="th-ev top-left">EV</th>
                            <th colSpan={13} className="contrast top-right">f-number</th>
                        </tr>
                        <tr>
                            <th className="contrast th-fn">1.0</th>
                            <th className="contrast th-fn">1.4</th>
                            <th className="contrast th-fn">2.0</th>
                            <th className="contrast th-fn">2.8</th>
                            <th className="contrast th-fn">4.0</th>
                            <th className="contrast th-fn">5.6</th>
                            <th className="contrast th-fn">8.0</th>
                            <th className="contrast th-fn">11</th>
                            <th className="contrast th-fn">16</th>
                            <th className="contrast th-fn">22</th>
                            <th className="contrast th-fn">32</th>
                            <th className="contrast th-fn">45</th>
                            <th className="contrast th-fn">64</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="contrast td-ev">-6</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                            <td>4096 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-5</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-4</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-3</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-2</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-1</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">0</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">1</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">2</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">3</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">4</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">5</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">6</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">7</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">8</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">9</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">10</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">11</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">12</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">13</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">14</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">15</td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">16</td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">17</td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">18</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">19</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">20</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                        </tr>
                        <tr className="bottom-row">
                            <td className="contrast bottom-left td-ev">21</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="et-1000-br">1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td className="bottom-right">1/500 s</td>
                        </tr>
                    </tbody>
                </table>
                <table className="et-table-1000-2">
                    <thead>
                        <tr>
                            <th rowSpan={2} className="th-ev top-left">EV</th>
                            <th colSpan={13} className="contrast top-right">f-number</th>
                        </tr>
                        <tr>
                            <th className="contrast th-fn">1.0</th>
                            <th className="contrast th-fn">1.4</th>
                            <th className="contrast th-fn">2.0</th>
                            <th className="contrast th-fn">2.8</th>
                            <th className="contrast th-fn">4.0</th>
                            <th className="contrast th-fn">5.6</th>
                            <th className="contrast th-fn">8.0</th>
                            <th className="contrast th-fn">11</th>
                            <th className="contrast th-fn">16</th>
                            <th className="contrast th-fn">22</th>
                            <th className="contrast th-fn">32</th>
                            <th className="contrast th-fn">45</th>
                            <th className="contrast th-fn">64</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="contrast td-ev">-6</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                            <td>4096 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-5</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-4</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-3</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-2</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-1</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">0</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">1</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">2</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">3</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">4</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">5</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">6</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">7</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">8</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">9</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">10</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">11</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">12</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">13</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">14</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">15</td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">16</td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">17</td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">18</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">19</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">20</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                        </tr>
                        <tr className="bottom-row">
                            <td className="contrast bottom-left td-ev">21</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td className="bottom-right">1/500 s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="small-screen-div">
                <table className="et-table-ss1">
                    <thead>
                        <tr>
                            <th rowSpan={2} className="th-ev top-left">EV</th>
                            <th colSpan={13} className="contrast top-right">f-number</th>
                        </tr>
                        <tr>
                            <th className="contrast th-fn">1.0</th>
                            <th className="contrast th-fn">1.4</th>
                            <th className="contrast th-fn">2.0</th>
                            <th className="contrast th-fn">2.8</th>
                            <th className="contrast th-fn">4.0</th>
                            <th className="contrast th-fn">5.6</th>
                            <th className="contrast th-fn">8.0</th>
                            <th className="contrast th-fn">11</th>
                            <th className="contrast th-fn">16</th>
                            <th className="contrast th-fn">22</th>
                            <th className="contrast th-fn">32</th>
                            <th className="contrast th-fn">45</th>
                            <th className="contrast th-fn">64</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="contrast td-ev">-6</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                            <td>4096 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-5</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-4</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-3</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-2</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-1</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">0</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">1</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">2</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">3</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">4</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">5</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">6</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">7</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">8</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">9</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">10</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">11</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">12</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">13</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">14</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">15</td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">16</td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">17</td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">18</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">19</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">20</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                        </tr>
                        <tr className="bottom-row">
                            <td className="contrast bottom-left td-ev">21</td>
                            <td></td>
                            <td></td>
                            <td className="ss-br"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td className="bottom-right">1/500 s</td>
                        </tr>
                    </tbody>
                </table>
                <table className="et-table-ss2">
                    <thead>
                        <tr>
                            <th rowSpan={2} className="th-ev top-left">EV</th>
                            <th colSpan={13} className="contrast top-right">f-number</th>
                        </tr>
                        <tr>
                            <th className="contrast th-fn">1.0</th>
                            <th className="contrast th-fn">1.4</th>
                            <th className="contrast th-fn">2.0</th>
                            <th className="contrast th-fn">2.8</th>
                            <th className="contrast th-fn">4.0</th>
                            <th className="contrast th-fn">5.6</th>
                            <th className="contrast th-fn">8.0</th>
                            <th className="contrast th-fn">11</th>
                            <th className="contrast th-fn">16</th>
                            <th className="contrast th-fn">22</th>
                            <th className="contrast th-fn">32</th>
                            <th className="contrast th-fn">45</th>
                            <th className="contrast th-fn">64</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="contrast td-ev">-6</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                            <td>4096 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-5</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-4</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-3</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-2</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-1</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">0</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">1</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">2</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">3</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">4</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">5</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">6</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">7</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">8</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">9</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">10</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">11</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">12</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">13</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">14</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">15</td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">16</td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">17</td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">18</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">19</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">20</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                        </tr>
                        <tr className="bottom-row">
                            <td className="contrast bottom-left td-ev">21</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="ss-br">1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td className="bottom-right">1/500 s</td>
                        </tr>
                    </tbody>
                </table>
                <table className="et-table-ss3">
                    <thead>
                        <tr>
                            <th rowSpan={2} className="th-ev top-left">EV</th>
                            <th colSpan={13} className="contrast top-right">f-number</th>
                        </tr>
                        <tr>
                            <th className="contrast th-fn">1.0</th>
                            <th className="contrast th-fn">1.4</th>
                            <th className="contrast th-fn">2.0</th>
                            <th className="contrast th-fn">2.8</th>
                            <th className="contrast th-fn">4.0</th>
                            <th className="contrast th-fn">5.6</th>
                            <th className="contrast th-fn">8.0</th>
                            <th className="contrast th-fn">11</th>
                            <th className="contrast th-fn">16</th>
                            <th className="contrast th-fn">22</th>
                            <th className="contrast th-fn">32</th>
                            <th className="contrast th-fn">45</th>
                            <th className="contrast th-fn">64</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="contrast td-ev">-6</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                            <td>4096 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-5</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-4</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-3</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-2</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-1</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">0</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">1</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">2</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">3</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">4</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">5</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">6</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">7</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">8</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">9</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">10</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">11</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">12</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">13</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">14</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">15</td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">16</td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">17</td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">18</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">19</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">20</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                        </tr>
                        <tr className="bottom-row">
                            <td className="contrast bottom-left td-ev">21</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td className="ss-br">1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td className="bottom-right">1/500 s</td>
                        </tr>
                    </tbody>
                </table>
                <table className="et-table-ss4">
                    <thead>
                        <tr>
                            <th rowSpan={2} className="th-ev top-left">EV</th>
                            <th colSpan={13} className="contrast top-right">f-number</th>
                        </tr>
                        <tr>
                            <th className="contrast th-fn">1.0</th>
                            <th className="contrast th-fn">1.4</th>
                            <th className="contrast th-fn">2.0</th>
                            <th className="contrast th-fn">2.8</th>
                            <th className="contrast th-fn">4.0</th>
                            <th className="contrast th-fn">5.6</th>
                            <th className="contrast th-fn">8.0</th>
                            <th className="contrast th-fn">11</th>
                            <th className="contrast th-fn">16</th>
                            <th className="contrast th-fn">22</th>
                            <th className="contrast th-fn">32</th>
                            <th className="contrast th-fn">45</th>
                            <th className="contrast th-fn">64</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="contrast td-ev">-6</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                            <td>4096 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-5</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                            <td>2048 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-4</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                            <td>1024 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-3</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                            <td>512 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-2</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                            <td>256 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">-1</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                            <td>128 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">0</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                            <td>64 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">1</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                            <td>32 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">2</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                            <td>16 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">3</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                            <td>8 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">4</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                            <td>4 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">5</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                            <td>2 m</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">6</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                            <td>60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">7</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                            <td>30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">8</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                            <td>15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">9</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                            <td>8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">10</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                            <td>4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">11</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                            <td>2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">12</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                            <td>1 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">13</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                            <td>1/2 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">14</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                            <td>1/4 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">15</td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                            <td>1/8 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">16</td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                            <td>1/15 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">17</td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                            <td>1/30 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">18</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                            <td>1/60 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">19</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                            <td>1/125 s</td>
                        </tr>
                        <tr>
                            <td className="contrast td-ev">20</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td>1/500 s</td>
                            <td>1/250 s</td>
                        </tr>
                        <tr className="bottom-row">
                            <td className="contrast bottom-left td-ev">21</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1/32,000 s</td>
                            <td>1/16,000</td>
                            <td>1/8000 s</td>
                            <td>1/4000 s</td>
                            <td>1/2000 s</td>
                            <td>1/1000 s</td>
                            <td className="bottom-right">1/500 s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ExposureTimes
