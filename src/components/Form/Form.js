import styles from "./Form.module.scss";
import React, { useState } from 'react';

function Form() {

    // State variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can implement your logic to send the form data
      // For example, you can make an API call to a backend server
      console.log('Form submitted:', { name, email, message });
      // Clear the form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    };

  
  return (
    <div className={`container100 ${styles.form}`}>
     <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles["contact-form"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;