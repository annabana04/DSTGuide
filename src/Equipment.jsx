/* Equipment.jsx */

import "./css/Equipment.css";
import { crops } from "./crops.jsx";
import { SeasonTable } from "./crops.jsx";
import { Link } from "react-router-dom";

function Equipment() {
    return (
        <div className="equipment-page">
            <h3>Don't Starve Together</h3>
            <h1>Equipment</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/spring">Spring</Link></li>
                    <li><Link to="/winter">Winter</Link></li>
                    <li><Link to="/summer">Summer</Link></li>
                    <li><Link to="/autumn">Autumn</Link></li>
                    <li><Link to="/nutrients">Nutrients</Link></li>
                </ul>
            </nav>

            <h2>Welcome!</h2>
            <p>
                Understanding how farming equipment works in Don’t Starve Together is key to becoming a skilled, efficient farmer.<br />
                Mastering tools like the Garden Hoe, Seed Pack-It, Composting Bin, and the various farm structures lets you control soil nutrients, reduce crop stress, and get the most out of every season.
            </p>

            <h2>Equipment</h2>
            <table>
                <tr>
                    <th>Equipment</th>
                    <th>Use</th>
                    <th>Materials</th>
                </tr>
                <tr>
                    <th>Bird Cage</th>
                    <td>Holds a bird, the bird can be fed crops and it will give you the seed of the crop</td>
                    <td>2 Papyrus, 6 Gold and 2 Seeds</td>
                </tr>
                <tr>
                    <th>Friendly Fruit Fly</th>
                    <td>Visits nearby plants to make them happy;<br />Making it so the player doesn't need to talk to the plants every stage</td>
                    <td>1 Bucket-o-Poop, 3 Seeds and 1 Electrical Doodad</td>
                </tr>
                <tr>
                    <th>Gardeneer Hat</th>
                    <td>Used to analyze plants throughout their stages of development;<br />The info is then added to the Plant Registry</td>
                    <td>1 Bucket-o-Poop, 3 Seeds and 1 Electrical Doodad</td>
                </tr>
                <tr>
                    <th>Garden Digamajig</th>
                    <td>Used to plow a surface, turning it into a plot</td>
                    <td>3 Boards, 2 Ropes and 2 Flint</td>
                </tr>
                <tr>
                    <th>Garden Hoe</th>
                    <td>Used to loosen soil so seeds can be planted;<br />Can create 9 plantable spots in a plot </td>
                    <td>2 Sticks and 2 Flint</td>
                </tr>
                <tr>
                    <th>Seed Pack-It</th>
                    <td>Used to store seeds, crop seeds, nuts and acorns;<br />Decreases spoil rate by 50%</td>
                    <td>2 Broken Shell, 4 Cut Grass and 2 Seeds</td>
                </tr>
                <tr>
                    <th>Shovel</th>
                    <td>Used to dig up plants, bushes and trunks</td>
                    <td>2 Sticks and 2 Flint</td>
                </tr>
                <tr>
                    <th>Watering Can</th>
                    <td>Used to add moisture to the farm soil</td>
                    <td>2 Boards and 1 Rope</td>
                </tr>
            </table>
        </div>
    );
}

export default Equipment;