import { useState } from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default function App() {
  const [showStory,setShowStory] = useState(false);
  const [xItem,setXItem] = useState("");
  const [yItem,setYItem] = useState("");
  const [zItem,setZItem] = useState("");
  const [customName,setCustomName] = useState("");
  const [displayName,setDisplayName] = useState("Bob");
  const [ukus,setUkus] = useState("us");
  const [temperature,setTemperature] = useState("94 fahrenheit");
  const [weight,setWeight] = useState("300 pounds");

  const handleGenarateStory = () => {
    const xItems = ["Willy the Goblin","Big Daddy","Father Christmas"];
    const yItems = ["the soup kitchen","Disneyland","the White House"];
    const zItems = ["spontaneously","combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
    
    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));

    if(customName){
        setDisplayName(customName);
    }else{
        setDisplayName("Bob");
    }

    if(ukus === "uk"){
        const celsius = Math.round(((94-32)*5)/9);
        setTemperature(`${celsius} celsius`);
        const stones = Math.round(300/14);
        setWeight(`${stones} stones`);
    }else{
        setTemperature("94 fahrenheit");
        setWeight("300 pounds");
    }
    setShowStory(true);
  }

  const handleNameChange = (event)=>{
    setCustomName(event.target.value);
  }

  const handleUkusChange = (event)=>{
    setUkus(event.target.value);
  }

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
      {showStory && (
        <p>
          It was {temperature} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {displayName} saw the whole thing, but was not surprised — {xItem} weighs {weight}, and it was a hot day.
        </p>
      )}
    </>
  );
}