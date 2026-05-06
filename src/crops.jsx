import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";

export const crops = [
    {
    name: "Asparagus",
    seasons: {
        Spring: true,
        Winter: true,
        Summer: false,
        Autumn: false
    },
    nutrients: ["+2", "-4", "+2"],
},
{
    name: "Carrot",
    seasons: {
        Spring: true,
        Winter: true,
        Summer: false,
        Autumn: true
    },
    nutrients: ["-4", "+2", "+2"],
},
{
    name: "Corn",
    seasons: {
        Spring: true,
        Winter: false,
        Summer: true,
        Autumn: true
    },
    nutrients: ["+2", "-4", "+2"],
},
{
    name: "Dragon Fruit",
    seasons: {
        Spring: true,
        Winter: false,
        Summer: true,
        Autumn: false
    },
    nutrients: ["+4", "+4", "-8"],
},
{
    name: "Durian",
    seasons: {
        Spring: true,
        Winter: false,
        Summer: false,
        Autumn: false
    },
    nutrients: ["+4", "-8", "+4"],
},
{
    name: "Eggplant",
    seasons: {
        Spring: true,
        Winter: false,
        Summer: false,
        Autumn: true
    },
    nutrients: ["+2", "+2", "-4"],
},
{
    name: "Fire Nettle Fronds",
    seasons: {
        Spring: true,
        Winter: true,
        Summer: true,
        Autumn: true
    },
    nutrients: ["-2", "-2", "-2"],
},
{
    name: "Forget-Me-Lots",
    seasons: {
        Spring: true,
        Winter: true,
        Summer: true,
        Autumn: true
    },
    nutrients: ["-2", "-2", "-2"],
},
{
    name: "Garlic",
    seasons: {
        Spring: true,
        Winter: true,
        Summer: true,
        Autumn: true
    },
    nutrients: ["+4", "-8", "+4"],
},
{
    name: "Onion",
    seasons: {
        Spring: true,
        Winter: false,
        Summer: true,
        Autumn: true
    },
    nutrients: ["-8", "+4", "+4"],
},
{
    name: "Pepper",
    seasons: {
        Spring: false,
        Winter: false,
        Summer: true,
        Autumn: true
    },
    nutrients: ["+4", "+4", "-8"],
},
{
    name: "Pomegranate",
    seasons: {
        Spring: true,
        Winter: false,
        Summer: true,
        Autumn: false
    },
    nutrients: ["-8", "+4", "+4"],
},
{
    name: "Potato",
    seasons: {
        Spring: true,
        Winter: true,
        Summer: false,
        Autumn: true
    },
    nutrients: ["+2", "+2", "-4"],
},
{
    name: "Pumpkin",
    seasons: {
        Spring: false,
        Winter: true,
        Summer: false,
        Autumn: true
    },
    nutrients: ["-4", "+2", "+2"],
},
{
    name: "Spiny Bindweed",
    seasons: {
        Spring: true,
        Winter: true,
        Summer: true,
        Autumn: true
    },
    nutrients: ["-2", "-2", "-2"],
},
{
    name: "Tillweeds",
    seasons: {
        Spring: true,
        Winter: true,
        Summer: true,
        Autumn: true
    },
    nutrients: ["-2", "-2", "-2"],
},
{
    name: "Toma Root",
    seasons: {
        Spring: true,
        Winter: false,
        Summer: true,
        Autumn: true
    },
    nutrients: ["-2", "-2", "+4"],
},
{
    name: "Watermelon",
    seasons: {
        Spring: true,
        Winter: false,
        Summer: true,
        Autumn: false
    },
    nutrients: ["+4", "-2", "-2"],
}
];

export const springCrops = crops.filter(crop => crop.seasons.Spring);
export const winterCrops = crops.filter(crop => crop.seasons.Winter);
export const summerCrops = crops.filter(crop => crop.seasons.Summer);
export const autumnCrops = crops.filter(crop => crop.seasons.Autumn);

export function CropCard({ crop }) {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "Crop",
        item: { crop },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div ref={dragRef} className="crop-card" style={{ opacity: isDragging ? 0.5 : 1 }}>
            <h3>{crop.name}</h3>
            <strong>Nutrients</strong>
            <ul>
                <li>Formula: {crop.nutrients[0]}</li>
                <li>Compost: {crop.nutrients[1]}</li>
                <li>Manure: {crop.nutrients[2]}</li>
            </ul>
        </div>
    );
}

export function CropTR({ crop }) {
    return (
        <tr>
            <td>{crop.name}</td>
            <td className={crop.seasons.Spring ? "yes" : ""}></td>
            <td className={crop.seasons.Winter ? "yes" : ""}></td>
            <td className={crop.seasons.Summer ? "yes" : ""}></td>
            <td className={crop.seasons.Autumn ? "yes" : ""}></td>
            <td>{crop.nutrients[0]}</td>
            <td>{crop.nutrients[1]}</td>
            <td>{crop.nutrients[2]}</td>
        </tr>
    );
}

export function SeasonTable({ crop }) {
    return (
        <tr>
            <td>{crop.name}</td>
            <td>{crop.nutrients[0]}</td>
            <td>{crop.nutrients[1]}</td>
            <td>{crop.nutrients[2]}</td>
        </tr>
    );
}

export default function PlotBuilder() {
    const [plot, setPlot] = useState(Array(9).fill(null));
    const totals = plot.reduce(
        (acc, crop) => {
            if (!crop) return acc;
            const f = Number(crop.nutrients[0].replace(/[^\d-+]/g, ""));
            const c = Number(crop.nutrients[1].replace(/[^\d-+]/g, ""));
            const m = Number(crop.nutrients[2].replace(/[^\d-+]/g, ""));

            acc.formula += f;
            acc.compost += c;
            acc.manure += m;

            return acc;
        },
        {formula: 0, compost: 0, manure: 0}
    );

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="builder">
                <div className="crop-list">
                    {springCrops.map(crop => ( <CropCard key={crop.name} crop={crop} /> ))}
                </div>
                <div className="plot-grid">
                    {plot.map((cell, i) => (
                        <PlotCell
                        key={i} index={i} crop={cell} setPlot={setPlot}
                        />
                    ))}
                </div>
                <div className="nutrients">
                    <h3>Current Nutrients:</h3>
                    <p><strong>Formula: {totals.formula}</strong></p>
                    <p><strong>Compost: {totals.compost}</strong></p>
                    <p><strong>Manure: {totals.manure}</strong></p>

                    <button className="reset-button"
                        onClick={() => setPlot(Array(9).fill(null))}
                    >
                        Reset Plot
                    </button>
                </div>
            </div>
        </DndProvider>
    );
}

export function PlotCell({ index, crop, setPlot }) {
    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "Crop",
        drop: (item) => {
            setPlot((prev) => {
                const updated = [...prev];
                updated[index] = item.crop;
                return updated;
            });
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div ref={dropRef} className="plot-cell"
            style={{
                background: isOver ? "#d0ffd0" : "",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>

            {crop ? crop.name : ""}
        </div>
    );
}