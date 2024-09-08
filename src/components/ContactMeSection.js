import React, { useState } from 'react';

const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (


    <div className="contact-container">
        <div className="column">
            <div className='contact-info'>
                <h1>Let's chat!</h1>
                <p>Tell me about your project.</p>
                <p>Let's create something together <span role="img" aria-label="sparkle">✨</span></p>
                <div className="email-info">
                    <p><strong>Mail me at</strong></p>
                    <p className="email">framesmillion@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="column">
            <form onSubmit={handleSubmit} className="contact-form">
                <h3>Sign in your account</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  
  );
};

export default ContactMeSection;

