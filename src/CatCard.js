import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";


const dont = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0)">
<path d="M20.0001 17.5C16.2778 17.5 11.0001 23.2544 11.0001 26.8867C11.0001 28.5226 12.2568 29.5 14.3629 29.5C16.6523 29.5 18.164 28.3244 20.0001 28.3244C21.8521 28.3244 23.3681 29.5 25.6373 29.5C27.7434 29.5 29.0001 28.5226 29.0001 26.8867C29.0001 23.2544 23.7225 17.5 20.0001 17.5ZM13.0964 16.9089C12.6089 15.2847 11.107 14.2328 9.74199 14.5591C8.37699 14.8853 7.6659 16.4664 8.1534 18.0906C8.6409 19.7148 10.1428 20.7667 11.5078 20.4405C12.8728 20.1142 13.5839 18.5331 13.0964 16.9089V16.9089ZM17.0676 15.9348C18.5179 15.5533 19.2436 13.5939 18.6886 11.5586C18.1336 9.52328 16.5079 8.18312 15.0576 8.56468C13.6073 8.94624 12.8817 10.9056 13.4367 12.9409C13.9917 14.9762 15.6178 16.3169 17.0676 15.9348ZM30.2578 14.5595C28.8928 14.2333 27.3914 15.2852 26.9034 16.9094C26.4159 18.5336 27.127 20.1147 28.492 20.4409C29.857 20.7672 31.3584 19.7153 31.8464 18.0911C32.3339 16.4669 31.6228 14.8858 30.2578 14.5595V14.5595ZM22.9326 15.9348C24.3829 16.3164 26.0085 14.9762 26.5635 12.9409C27.1185 10.9056 26.3929 8.94671 24.9426 8.56468C23.4923 8.18265 21.8667 9.52328 21.3117 11.5586C20.7567 13.5939 21.4823 15.5533 22.9326 15.9348V15.9348Z" fill="#FCA5A5"/>
</g>
<path d="M20 0.625C9.29945 0.625 0.625 9.29945 0.625 20C0.625 30.7005 9.29945 39.375 20 39.375C30.7005 39.375 39.375 30.7005 39.375 20C39.375 9.29945 30.7005 0.625 20 0.625ZM31.0485 8.95148C36.7654 14.6683 37.068 23.5844 32.2957 29.6441L10.3559 7.7043C16.4175 2.93047 25.3332 3.23609 31.0485 8.95148V8.95148ZM8.95148 31.0485C3.23461 25.3317 2.93195 16.4156 7.7043 10.3559L29.6441 32.2957C23.5825 37.0695 14.6668 36.7639 8.95148 31.0485V31.0485Z" fill="#EF4444"/>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" fill="white" transform="translate(8 7)"/>
</clipPath>
</defs>
</svg>

const skip = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.1016 18.0781L24.1016 5.57813C22.4922 4.2422 20 5.35938 20 7.50001V32.5C20 34.6406 22.4922 35.7656 24.1016 34.4219L39.1016 21.9219C40.2969 20.9219 40.2969 19.0781 39.1016 18.0781V18.0781ZM19.1016 18.0781L4.10156 5.57813C2.49219 4.2422 0 5.35938 0 7.50001V32.5C0 34.6406 2.49219 35.7656 4.10156 34.4219L19.1016 21.9219C20.2969 20.9219 20.2969 19.0781 19.1016 18.0781V18.0781Z" fill="#6B7280"/>
</svg>

const pet = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0001 17.5C13.7962 17.5 5.00011 27.0906 5.00011 33.1445C5.00011 35.8711 7.09464 37.5 10.6048 37.5C14.4204 37.5 16.94 35.5406 20.0001 35.5406C23.0868 35.5406 25.6134 37.5 29.3954 37.5C32.9056 37.5 35.0001 35.8711 35.0001 33.1445C35.0001 27.0906 26.204 17.5 20.0001 17.5ZM8.49386 16.5148C7.68136 13.8078 5.17824 12.0547 2.90324 12.5984C0.628236 13.1422 -0.55692 15.7773 0.25558 18.4844C1.06808 21.1914 3.5712 22.9445 5.8462 22.4008C8.1212 21.857 9.30636 19.2219 8.49386 16.5148V16.5148ZM15.1126 14.8914C17.5298 14.2555 18.7392 10.9898 17.8142 7.59766C16.8892 4.20547 14.1798 1.97188 11.7626 2.60781C9.34542 3.24375 8.13605 6.50938 9.06105 9.90156C9.98605 13.2938 12.6962 15.5281 15.1126 14.8914ZM37.0962 12.5992C34.8212 12.0555 32.3189 13.8086 31.5056 16.5156C30.6931 19.2227 31.8782 21.8578 34.1532 22.4016C36.4282 22.9453 38.9306 21.1922 39.7439 18.4852C40.5564 15.7781 39.3712 13.143 37.0962 12.5992V12.5992ZM24.8876 14.8914C27.3048 15.5273 30.0142 13.2938 30.9392 9.90156C31.8642 6.50938 30.6548 3.24453 28.2376 2.60781C25.8204 1.9711 23.111 4.20547 22.186 7.59766C21.261 10.9898 22.4704 14.2555 24.8876 14.8914V14.8914Z" fill="#10B981"/>
<defs>
</defs>
</svg>



export const CatCard = (props) => {
    const AmoutViewed = useHistory();
    const categories = useParams();
    const [state, setState] = useState(props.img.urls);
    const [catCounter, setCatCounter] = useState(0);
    const [catsSkipped, setCatsSkipped] = useState(0);
    const [catsPetted, setCatsPetted] = useState(0);
    const [catsNotPetted, setCatsNotPetted] = useState(0);
    const [selected] = useState(()=> {
        const initialState = categories.category;
        return initialState
    })
    
    

    const handleNotPet = () => {
        setCatCounter(
            catCounter + 1
        )
        setCatsNotPetted(
            catsNotPetted + 1
        )
             
    }

    const handleSkip = () => {

        setCatCounter(
            catCounter + 1
        )
        setCatsSkipped(
            catsSkipped + 1
        )
     }

    const handlePet = () => {
        
        setCatCounter(
            catCounter + 1
        )
        setCatsPetted(
            catsPetted + 1
        )
    }
    
    const handleStats = () => {
        
        AmoutViewed.push(`/${categories.id}/stats`);

    }

    const handleRestartSame = () => {
        setCatsNotPetted(0)
        setCatsSkipped(0)
        setCatsPetted(0)
        setCatCounter(0)
        AmoutViewed.push(`/${categories.id}/${selected}`)
    }

    const handleRestartNew = () => {
        setCatCounter(0)
        AmoutViewed.push(`/`)
    }

/* eslint-disable react-hooks/exhaustive-deps */
useEffect(()=> {
    const handleCard = () => {setState(props.img.urls);
       
    }
handleCard();
}, [props.img.urls])

useEffect(()=>{
    if (catCounter > 9) {
    handleStats();
    } 
}, [catCounter])


    if(catCounter < 10) {
        return (
            <>
          
          
            <div>
                <p className="would-you-pet-it">Would you pet it?</p>
                <div  className="frame-div">
                
                <img className="single-cat-img" alt={`Loading the cat no. ${catCounter+1}, please wait...`}
                 src={state && state[catCounter]}></img>
                
                <p className="cats-counter">{`Cat ${catCounter+1}/10`}</p>

                    <div className="card-buttons-container">
                        <label className="button-label">
                            <div className="card-buttons-not" onClick={handleNotPet}>{dont}</div>
                                <p className="dont-pet-it">Don't pet it!</p>
                        </label>
                        <label className="button-label">
                            <div className="card-buttons-skip" onClick={handleSkip}>{skip}</div>
                            <p className="skip-it">Skip it!</p>
                        </label>
                        <label className="button-label">
                            <div className="card-buttons-pet" onClick={handlePet}>{pet}</div>
                            <p className="pet-it">Pet it!</p>
                        </label>
                </div>
                
                </div>
                </div>
                
            </>
        )
    } else {
        return (
            <>
            
            <p className="cats-seen">Cats seen: {catCounter}</p>
        
        <div className="stats-container">
        
        
        <div className="not-stats-container">  
        <div className="card-not-stats">{dont}</div>
            <label className="stats">
             <p className="stats-not">{catsNotPetted}</p>
        <h5 className="cats-you-didnt-pet">Cats you didn't pet </h5>
        
        </label>
        </div>  
        <div className="skip-stats-container">
            <div className="card-skip-stats">{skip}</div>
                <label className="stats">
                    <p className="stats-skipped">{catsSkipped}</p>
                        <h5 className="cats-you-skipped">Cats you skipped</h5>
        </label>
            </div>
            <div className="pet-stats-container">
        <div className="card-pet-stats">{pet}</div>
        <label className="stats">
            <p className="stats-petted">{catsPetted}</p>
        <h5 className="cats-you-petted">Cats you petted</h5>
        
        </label>
            </div>
        </div>
        <div className="final-nav-container">
            <div>
                <p onClick={handleRestartSame} className="restart-same">RESTART THE SAME CATEGORY</p>
            </div>
            <div>
                <p onClick={handleRestartNew} className="restart-new">SELECT NEW CATEGORY</p>
            </div>
        </div>
        </>
        
        )
    }
}