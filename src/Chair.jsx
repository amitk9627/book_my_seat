import React, { useState ,useCallback} from 'react'
import './App.css';
// isSelected false
// position 9
// status "available"
// type "premium"
const Chair = ({ item }) => {
    const [color, setColor] = useState(true);

    const handleClick = useCallback((seat) => {
        setColor((prev)=>!prev)
        let x = item?.seats;
        for (let i = 0; i < x.length; i++) {
            if (x[i].position === seat.position) {
                x[i].isSelected = true;
                x[i].status = "unavailabe";
            }
        }
    },[color])

    return (
        <div style={{ display: "flex" ,gap:"10px",marginBottom:"10px"}}>
            
            <div style={{width:"150px",textAlign:"center"}}>{item.lebels}</div>
            {
                item?.seats.map((data, i) =>
                    <div
                        className={data?.isSelected ? "green" : "gray"}
                        key={i}
                        style={{display:"flex", alignItems:"center",justifyContent:"center" , marginLeft: "10px", height: "40px", width: '40px', border: "2px solid black",gap:"10px" }}
                        onClick={() =>{ handleClick( data)}}
                    >
                        {data.position}
                    </div>
                )
            }
        </div>
    )
}

export default Chair
