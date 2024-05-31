import React, { useEffect, useState, useContext } from "react";
import './style.css';
import  saverio from "./image.png"
import { AppContext,IAppContext } from "../../context/appcontext";

function Topbar() {

    const [contData, setContdata] = useState<string>('');
    const [contTitleData, setContTitleData] = useState<string>('');
    const {jsonData, setJsonData} = useContext(AppContext) as IAppContext
    function addData(input:string) {
        setContdata(input); 
    }
    function addTitle(input:string) {
        setContTitleData(input);
    }






          function save() {
            if(jsonData){
                const obj = {
                    id: jsonData?.length + 1,
                    title: contTitleData,
                    body: contData,
                }
                let data = jsonData
                data.push(obj)
                setJsonData([...data])
                canc()
            }
          }
          function canc() {
            setContdata('');
            setContTitleData('');
          }

    const [isClicked, setIsClicked] = useState(false);

    const show = () => {
        setIsClicked(!isClicked);
    }
    if(!isClicked === true) {
        return (
            <div className="topbar">
                
                    <h1>Social Connect Network </h1>
                    <img className="img" src={saverio} alt="ciao" />
                
                <label className="container">
                    <input type="checkbox" id="checkbox" checked={isClicked} onChange={show}></input>

                </label>
            </div>
        )
    } else  {
        return (
            <div className="topbar">
                <h1>Social Connect Network</h1>
                <div className="test">
                <label className="container">
                    <input type="checkbox" id="checkbox" checked={isClicked} onChange={show}></input>
                    <span className="checkmark"></span>
                    <div className="pubblica">
                        <textarea className="titolo" placeholder="Scrivi titolo..." value={contTitleData} onChange={(event) => addTitle(event.target.value)}></textarea>
                        <textarea className="testo" placeholder="Scrivi qui..." value={contData} onChange={(event) => addData(event.target.value)} rows={12}></textarea>
                        <button className="add" onClick={() => save()}>PUBBLICA</button>
                    </div>
  
                </label>
                </div>
            </div>
        )
    }
}

   

export default Topbar;
   