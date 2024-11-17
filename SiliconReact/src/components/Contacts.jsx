import React from 'react'

const Contacts = () => {
  return (
    <section id="contacts" className="app-contacts">
    <div className="container">
        <div className="first-column">
            <img src="images/Features DOS/app-contacts.svg" alt=""/>
            </div>
        <div className="second-column">
            <div className="content">
                <h2>Receive payment from international bank details</h2>
                <div className="app-features">
                    <div className="app-feature">
                        <div className="feature-icon">
                            <img src="images/Features DOS/credit-card-icon.svg" alt=""/>
                        </div>
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames</p>
                    </div>
                    <div className="app-feature">
                        <div className="feature-icon">
                            <img src="images/Features DOS/wallet-icon.svg" alt=""/>
                        </div>
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean mauris.</p>
                    </div>
                </div>
                <a className="btn btn-learn-more" href="#">Learn more <i className="fa-solid fa-arrow-right"></i></a>

            </div>
        </div>
    </div>
</section>
  )
}

export default Contacts
