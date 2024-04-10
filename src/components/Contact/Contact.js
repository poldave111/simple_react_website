import styles from "./Contact.module.scss";
import Form from "./../Form/Form";

function Contact() {
    return (
      <div className={`container100 ${styles.contact}`}>
        <Form />
      </div>
    );
  }
  
  export default Contact;