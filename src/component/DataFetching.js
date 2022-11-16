import React,{useState,useEffect} from 'react'
import Axios from 'axios'
export function DataFetching() {
    const [subscription,setSubscription]= useState([])

    useEffect(()=>{
        Axios
        .get('https://localhost:5001/api/subscription')
        .then(res =>
            {
            console.log(res.data);
            setSubscription(res.data)
          });
    },[])
  return (
    <div>
        <h1>asdsa</h1>
        <ul>
            {
                subscription.map(subs => <li key={subs.id}>{subs.subscription_Name}</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching