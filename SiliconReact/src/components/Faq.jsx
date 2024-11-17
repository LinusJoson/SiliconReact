import React, { useEffect, useState} from 'react'
import AccordionItem from './Accordionitem'
import AccordionItemTEST from './AccordionItemTEST'


const Faq = () => {

    const [accordions, setAccordions] = useState ([])

    const fetchFaq = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordions(data)
        console.log('fetching faq', data)
    } 

    useEffect(() => {
        fetchFaq()
    }, []);

  return (
<section id="faq" className="faq">
            <div className="container">
                <div className="first-column">
                    <h2>Any questions?<br />Check out the FAQs</h2>
                    <p>Still have unanswered questions and need to get in touch?</p>
                    <div className="contact-options">
                        
                        <div className="option phone">
                            <i className="fa-solid fa-phone-volume"></i>
                            <p>Still have questions?</p>
                            <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i> </a>
                        </div>

                        

                        <div className="option chat">
                            <i className="fa-solid fa-comment-dots fa-flip-horizontal"></i>
                            <p>Don't like phone calls?</p>
                            <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a> 
                        </div>
                    </div>

                    

                    
                </div>
                <div className="second-column">
                    <div className="accordion">


{
                        accordions.map(item => (
                            <AccordionItemTEST key={item.id} {...item} />

                        ))
                    }

                    

                    




                    </div>
                </div>
            </div>
            
         </section>
  )
}

export default Faq
