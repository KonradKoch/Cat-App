import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom';





export const CategoriesList =(props)=> {
    const [state, setState] = useState({
        categories: [],
        urlList: []
    });
    
    
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(()=> {
      
        const SendRequest = async () => {
            if (props.categories && state) {
            let categoriesList = [];
            let urlList = [];
            for(let i=0; i<7; i++) {
                const response = await fetch(
                    `https://api.thecatapi.com/v1/images/search?limit=1&page=1&category_ids=${props.categories[i].id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "x-api-key": "26be2bb2-7860-4c85-937d-13e8c705a202"
                        },
                        
                    }
                );
                const json = await response.json();
                categoriesList.push(json[0]["categories"][0]["name"]) &&
                urlList.push(json[0]["url"]);
                
        }
            setState({
                    ...state,
                    categories:categoriesList,
                    url: urlList
                })
            
                
        
            } 
        }

    SendRequest();
    
}, [])

    return (
        <>
        <h5 className="select-a-category">Select a category</h5>
        <div className="Categories-list">
        
        
        
        {
        state.categories && state.url && state.url.map((url, i) => {
            const imgCategory = state.categories[i]; 
            return (
                <Link key={imgCategory} to={`/${props.categories[i].id}/${props.categories[i].name}`}>
                    
                <div value={props.categories[i].id} key={imgCategory} className="Category">
                <p value={props.categories[i].id} key={imgCategory} className="category-label">{imgCategory}</p>
                <img alt="IMG loading..." width="250px" height="200px" src={url}></img>
                </div>
                
                </Link>
        )})}
        
        

        </div>
        </>
    )   
}