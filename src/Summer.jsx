/* Summer.jsx */

import "./css/Summer.css";
import PlotBuilder from "./crops.jsx";
import { crops } from "./crops.jsx";
import { SeasonTable } from "./crops.jsx";
import { Link } from "react-router-dom";

function Summer() {
    return (
        <div className="summer-page">
            <h3>Don't Starve Together</h3>
            <h1>Summer</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/spring">Spring</Link></li>
                    <li><Link to="/winter">Winter</Link></li>
                    <li><Link to="/autumn">Autumn</Link></li>
                    <li><Link to="/nutrients">Nutrients</Link></li>
                    <li><Link to="/equipment">Equipment</Link></li>
                </ul>
            </nav>

            <h2>Welcome!</h2>
            <p>
                <strong>Summer Crops</strong><br />
                The table shows all crops that are naturally in season during Summer.<br />
                Your crop plot, however, lets you plant any crop you want — even ones that aren’t in season.<br />
                <br />
                <strong>Out‑of‑Season Planting</strong><br />
                Crops can grow outside their natural season, but doing so puts extra stress on them.<br />
                Out‑of‑season crops grow more slowly and require more attention to stay healthy.
            </p>
            <h2>In Season Crops</h2>
            <div className="crops-layout">
                <div className="crop-table">
                    <table>
                        <thead>
                            <tr>
                                <th rowSpan="2">Crop</th>
                                <th colSpan="3">Nutrients</th>
                            </tr>
                            <tr>
                                <th>Formula</th>
                                <th>Compost</th>
                                <th>Manure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {crops
                                .filter(crop => crop.seasons.Summer === true)
                                .map(crop => (
                                <SeasonTable key={crop.name} crop={crop} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className crop-plot-grid>
                    <PlotBuilder />
                </div>
            </div>
        </div>
    );
}

export default Summer;