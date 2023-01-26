/* Composant Collapse qui affiche un titre avec une flèche qui s'ouvre et se ferme pour laisser voir ou non les informations qu'il contient */
import './collapse.css';
import React, { useRef, useState } from 'react';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

function Collapse({ title, texte }){

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const contentRef = useRef();

    return(
        <div className='collapseDivBox'>
            <div className='collapseDivTitle primaryBackground' onClick={toggle}>
                <h3 className='collapseTitle'>{title}</h3>
                <p className='buttonUpDown'>
                    {!open ? <FaChevronDown /> : <FaChevronUp />}
                </p>
            </div>
            <div className="content-parent whiteBackground" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <div className='toggleParagraph'>{texte}</div>
            </div>

        </div>
    )

}



export default Collapse