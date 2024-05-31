import React, {useContext, useEffect, useState} from "react";
import './style.css';
import { AppContext, IAppContext } from "../../context/appcontext";

function Contenuti () {
    const {jsonData} = useContext(AppContext) as IAppContext

    return ( 
        <div className="contenuti">
             {jsonData && jsonData?.map((item) => (
                <div className="post">
                    <p className="id">{item.id} {item.title}</p>
                    
                    <p className="body">{item.body}</p>
                </div>
     )) 
}   
        </div>
)}
export default Contenuti;
