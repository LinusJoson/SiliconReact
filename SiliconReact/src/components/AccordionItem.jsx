// The code below doesn't seem to be working. I'm not sure what's wrong with it. But the problem occured when I renamed the file from Accordionitem.jsx to AccordionItem.jsx. I'm not sure if that's the problem.

//  I've remedied the situation by creating a new jsx file called AccordionItemTEST.jsx which seems to be functioning properly! 

import React from 'react'
import { useState } from 'react'

const AccordionItem = (item) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className={`item-titlebar ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}> 
                <h3>TEST{item.title}</h3>
                <div className="btn btn-accordion">
                    <i className={`item-icon fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
            </div>
            
            {isOpen && (
                <p className="item-content">
                    TEasdasdasdasdST{item.content}
                </p>
            )}
        </div>
    );
};

export default AccordionItem;