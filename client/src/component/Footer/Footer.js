import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleOpenGmail = () => {
    // Replace the dummy email address with the actual recipient's email address
    const recipientEmail = "recipient@example.com";
    // You can customize the subject and body of the email
    const subject = "Subject of the email";
    const body = "Body of the email";

    // Creating the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Opening the default email client
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="footer-block"></div>
      <div className="footer">
        <div className="footer-container">
          <a
            href="#"
            className="scrolling-text"
            onClick={handleOpenGmail}
          >
            Click here for Any Queries
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
