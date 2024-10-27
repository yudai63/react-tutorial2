import { useState } from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default function App() {
  const [xItem,setXItem] = useState("");
  const [yItem,setYItem] = useState("");
  const [zItem,setZItem] = useState("");
  const [customName,setCustomName] = useState("");
  const [ukus,setUkus] = useState("us");

  const handleGenarateStory = () => {
    const xItems = ["Willy the Goblin","Big Daddy","Father Christmas"];
    const yItems = ["the soup kitchen","Disneyland","the White House"];
    const zItems = ["spontaneously","combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
    
    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));
  }
  
  const handleNameChange = (event)=>{
    setCustomName(event.target.value);
  }

  const handleUkusChange = (event)=>{
    setUkus(event.target.value);
  }

  const temperature = ukus === "uk" ? `${Math.round(((94-32)*5)/9)} celsius`:"94 fahrenheit";
  const weight = ukus === "uk" ? `${Math.round(300/14)} stones`:"300 pounds";
  const displayName = customName === "" ? "Bob":customName;
  const isStoryReady = xItem && yItem && zItem;

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" value={customName} onChange={handleNameChange}/>
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} onChange={handleUkusChange}/>
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} onChange={handleUkusChange}/>
      </div>
      <div>
        <button onClick={handleGenarateStory}>Generate random story</button>
      </div>
      {isStoryReady && (
        <p>
          It was {temperature} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {displayName} saw the whole thing, but was not surprised — {xItem} weighs {weight}, and it was a hot day.
        </p>
      )}
    </>
  );
}