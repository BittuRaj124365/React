import {useState,useEffect} from 'react';
export default function useCurrencyInfo(currency){
    const [data,setDate]=useState({});
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>setDate(res[currency]))
    },[currency])
    console.log(data);
    return data;
}