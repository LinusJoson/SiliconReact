import React from 'react'

const Transfers = () => {
  return (
    <section id="transfers" className="app-transfers">
            <div className="container">
                <div className="first-column">
                    <div className="content">
                        <h2>Make your money transfer simple and clear</h2>
                        <ul className="checklist">
                            <li className="checklist-item"> <i className="fa-regular fa-circle-check"></i> Banking transactions are free for you</li>
                            <li className="checklist-item"> <i className="fa-regular fa-circle-check"></i> No monthly cash comission</li>
                            <li className="checklist-item"> <i className="fa-regular fa-circle-check"></i> Manage payments and transactions online</li>
                        </ul>
                        <a  className="btn btn-learn-more" href="#">Learn more <i className="fa-solid fa-arrow-right"></i> </a>
                    </div>
                </div>
                <div className="second-column">
                    <img src="images/Features DOS/app-graph.svg" alt=""/>
                </div>
            </div>
        </section>

  )
}

export default Transfers
