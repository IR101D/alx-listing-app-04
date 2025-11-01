import React, { useState } from "react";
import Pill from "../Common/Pill";

const filterLabels = [
  "Top Villa",
  "Self Checkin",
  "Ocean View",
  "Private Pool",
  "Countryside",
  "Luxury",
]

const Filters : React.FC = () => {
    const [activeFilter , setActiveFilter] = useState<string | null>(null);
    return(
        <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
            {filterLabels.map((label)=>
            <Pill
            key={label}
            label={label}
            active={activeFilter === label}
            onClick={()=> setActiveFilter(activeFilter === label ? null : label)}
            />
            )}
        </div>
    )
}
export default Filters