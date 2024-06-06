import React, { useState } from 'react';
import './Contact.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    course: '',
    firstName: '',
    surname: '',
    companyName: '',
    enquiryType: '',
    preferredLocation: '',
    email: '',
    mobile: '',
    phone: '',
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
    // Handle form submission
    console.log(formData);
  };

  return (
    <> 
    <h1 className='contact'> Contact us</h1>
    <form onSubmit={handleSubmit} className="contact-form">
     

      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="surname">Surname *</label>
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
      </div>


     


      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Mobile *</label>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell Us More About Your Enquiry</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
    </>
  );

};

export default ContactForm;
