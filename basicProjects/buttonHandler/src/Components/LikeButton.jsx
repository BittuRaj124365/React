import { useState } from "react";
export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [count,setCount]=useState(0);
  let Counter=()=>{
    setCount(count+1);
  }
  // function clicked(){
  //     console.log("Button clicked.");
  // }
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };
  let likeColor={color:"red"};
  return (
    <div>
      <h1>Like Button </h1>
      <h1 onClick={toggleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart" style={likeColor}></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </h1>

      <div  className="counterButton">
        <h1>Count: {count}</h1>
        <button onClick={Counter}>Counter Button</button>
      </div>
    </div>
  );
}
