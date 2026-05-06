/* Nutrients.jsx */

import "./css/Nutrients.css";
import { crops } from "./crops.jsx";
import { SeasonTable } from "./crops.jsx";
import { Link } from "react-router-dom";

function Nutrients() {
    return (
        <div className="nutrients-page">
            <h3>Don't Starve Together</h3>
            <h1>Nutrients</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/spring">Spring</Link></li>
                    <li><Link to="/winter">Winter</Link></li>
                    <li><Link to="/summer">Summer</Link></li>
                    <li><Link to="/autumn">Autumn</Link></li>
                    <li><Link to="/equipment">Equipment</Link></li>
                </ul>
            </nav>

            <h2>Welcome!</h2>
            <p>Nutrients are a very important part of farming in Don’t Starve Together. They play a key role in helping crops grow efficiently and reach their full potential. 
                By managing nutrients properly, you can produce bigger plants that yield more food. Each crop uses different amounts of nutrients from the soil, so rotating crops or replenishing the soil with fertilizers becomes essential to maintaining a productive farm. 
                Without enough nutrients, plants will yield less crop and seeds, making it harder to survive. Taking the time to understand and manage nutrients can make a big difference in building a reliable and sustainable food source.</p>

            <h2>Nutrients</h2>
            <table>
                <tr>
                    <th>Nutrient</th>
                    <th>Use</th>
                    <th>How to get</th>
                </tr>
                <tr>
                    <th>Growth Formula Starter</th>
                    <td>Used to enrich farm soil with growth formula nutrients</td>
                    <td>Find a bottle in the ocean, then combine with seaweed and ash</td>
                </tr>
                <tr>
                    <th>Compost</th>
                    <td>Used to enrich farm soil with compost</td>
                    <td>Produced using a compost bin</td>
                </tr>
                <tr>
                    <th>Manure</th>
                    <td>Used to enrich farm soil with manure</td>
                    <td>Dropped by most creatures, most notably by Beefalo and Koalefants;<br />Rot also works as manure just less affective</td>
                </tr>
            </table>
        </div>
    );
}

export default Nutrients;