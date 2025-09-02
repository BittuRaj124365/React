import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Github() {
  // const {followers}=useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/bitturaj124365")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="bg-gray-700 text-red-500 text-center m-4 text-3xl">
      Github Followers: {data.followers}
      <br />
      Github Following: {data.following}
      <img src={data.avatar_url} alt="Git Picture" width={300}></img>
    </div>
  );
}
