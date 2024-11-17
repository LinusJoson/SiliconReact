import React, {useState} from 'react'
import { validateEmail } from './validation'

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successmessage , setSuccessMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = validateEmail(email);
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            setSuccessMessage('Valid E-mail! Thank you for subscribing!');
            console.log('Email is valid:', email);
            
        }
    };

    return (
        <section id="subscribe" className="subscribe">
            <div className="container">
                <img src="images/Subscribe/Bell.svg" alt="bell" />
                <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            name="email"
                            placeholder="    Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setPlaceholder('')}
                            onBlur={() => setPlaceholder('Your Email')}
                            />
                        <i className="fa-light fa-envelope"></i>
                        <button type="submit" className="btn">Subscribe</button>
                    </div>
                            {error && <p className="error-message">{error}</p>}
                            {successmessage && <p className="success-message">{successmessage}</p>}
                    
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
