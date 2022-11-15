import React,{useState,useEffect} from 'react'
import axios from 'axios'
export function DataFetching() {
    const [subscription,setSubscription]= useState([])

    useEffect(()=>{
        axios('https://localhost:5001/api/subscription')
        
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    })
  return (
    <div>
        <h1>asdsa</h1>
        <ul>
            {
                subscription.map(subs => <li key={subs.id}>{subs.subscriptionName}</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching