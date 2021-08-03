import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {CatCard} from "./CatCard"





export const CatsList =()=> {
    const [cats, setCats] = useState({
        urls : []
    })
    const category = useParams();

 
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(()=> {
        const SendRequest = async () => {
            let catsFetched = [];
            for(let i=0; i<10; i++) {
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${category.id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "26be2bb2-7860-4c85-937d-13e8c705a202"
                    }
                }
            )
            const json = await response.json()
            catsFetched.push(json[i]["url"])
            }
            setCats({
                ...cats,
                urls: catsFetched,  
            })}
            SendRequest();    
    }, [])
    

    return (
        <>
        <h6 className="logo-category">
          {category
          ?`> ${category.category}`: ""}
          
                </h6>
        
        <div className="Categories-list">
        
        <CatCard img={cats}/>
        

        </div>
        </>
    )
}