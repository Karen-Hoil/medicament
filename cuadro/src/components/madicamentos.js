import React, { useEffect, useState } from "react";
import Home from "../page/home";
import Axios from "axios";
import { Link } from "react-router-dom";

function Medicamentos(){
    const [medicina,setMedicina] =useState([]);

    
    useEffect(()=>{
        Axios.get('http://localhost:3001/medicina')
        .then(respuesta=>{
            setMedicina(respuesta.data.listamedicina);
            
        })
        .catch(error=> console.error(error));
    },[])
    return(
        <>
        <Home/>
        <div className="medi_menu">
  <div className="wrapper">
    <ui className="mainMenu">
      <li className="item" id="account">
        <a href="#account" className="btn">
          <i className="fas fa-user-circle" />
          Medicinas
        </a>
        {
              medicina.map((lamedicina) =>{
                return(
                    <>
                    <div className="subMenu">
                    <div className="subMenu">
          <a href={'/cuadro' + lamedicina.id_medicina}>{lamedicina.nombreMedicina} <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </a>
          
        </div>
        </div>
                    </>
                )
              })  
            }
      </li>
    </ui>
  </div>
</div>

        
        </>
    )

}
export default Medicamentos