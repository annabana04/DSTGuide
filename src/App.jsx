/* App.jsx */

import "./css/index.css";
import { crops } from "./crops.jsx";
import { CropTR } from "./crops.jsx";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="index-page">
            <h3>Don't Starve Together</h3>
            <h1>Farming Guide</h1>

            <nav>
                <ul>
                    <li><Link to="/spring">Spring</Link></li>
                    <li><Link to="/winter">Winter</Link></li>
                    <li><Link to="/summer">Summer</Link></li>
                    <li><Link to="/autumn">Autumn</Link></li>
                    <li><Link to="/nutrients">Nutrients</Link></li>
                    <li><Link to="/equipment">Equipment</Link></li>
                </ul>
            </nav>

            <h2>Welcome!</h2>
            <p>Hello! The purpose of this website is to help you learn how to farm in Don't Starve Together.<br />I will often refer to Don't Starve Together as DST.</p>

            <h2>Farming Basics</h2>
            <p>The key to understanding farming in DST is understanding how nutrients affect crops and crop happiness.<br />
                <br /><strong>Nutrients</strong><br />
                Each crop has a negative or positive value for each nutrient and they contribute that to the soil. The key is getting the nutrients in the positive by either using different combinations of crops or using manure, compost or growth formula.<br />
                <br /><strong>Happiness</strong><br />
                Crops gain happiness when the player "talks" to them, this must be performed at every stage. Eventually the player can get the friendly fruit fly, which will take care of talking to your crop for you.<br />
                Another important part of happiness is crop families, for a crop to have a family there must be four or more of the crop in a plot.
            </p>

            <h2>Crops</h2>
            <p>
                <b>Seasons:</b> green indicates it is in season.
            </p>
            <table>
                <thead>
                    <tr>
                        <th rowSpan="2">Crop</th>
                        <th colSpan="4">Seasons</th>
                        <th colSpan="3">Nutrients</th>
                    </tr>
                    <tr>
                        <th>Spring</th>
                        <th>Winter</th>
                        <th>Summer</th>
                        <th>Autumn</th>
                        <th>Formula</th>
                        <th>Compost</th>
                        <th>Manure</th>
                    </tr>
                </thead>
                <tbody>
                    {crops.map(crop => (
                        <CropTR key={crop.name} crop={crop} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;