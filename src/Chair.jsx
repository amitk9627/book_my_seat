import React, { useState, useCallback } from 'react'
import './App.css';
// isSelected false
// position 9
// status "available"
// type "premium"
const Chair = ({ item, value }) => {
    const [color, setColor] = useState(true);
    // handle seat click
    const handleClick = useCallback((seat) => {
        setColor((prev) => !prev)

        let x = item?.seats;
        let count = value;

        for (let i = 0; i < x.length; i++) {

            if (x[i].position === seat.position) {
                if (count > 0) {
                    x[i].isSelected = true;
                    x[i].status = "unavailabe";
                    count -= 1;
                }
            }
        }
    }, [value, color])

    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>

            <div style={{ width: "150px", textAlign: "center" }}>{item.lebels}</div>
            {
                item?.seats.map((data, i) =>
                    data?.type ?
                        <div
                            className={data?.isSelected ? "green" : "gray"}
                            key={i}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "10px", height: "30px", width: '30px', border: "2px solid black", gap: "10px" }}
                            onClick={() => { handleClick(data) }}
                        >
                            {data.position}
                        </div>
                        :
                        <div key={i}
                            style={{ marginLeft: "10px", height: "30px", width: '30px', border: "2px solid gray", gap: "10px" }}
                        >
                        </div>
                )
            }
        </div>
    )
}

export default Chair
