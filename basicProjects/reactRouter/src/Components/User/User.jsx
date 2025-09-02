import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userid}=useParams();
    <div>
        <h1>User:{userid} </h1>
    </div>
}