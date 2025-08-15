import "./Contact.css";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  const formRef = useRef(null);
  const headingRef = useRef(null);
  const formContainerRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lj2nccb", // e.g., "service_gw0svuk"
        "template_wbda2wi", // e.g., "template_xxxxxx"
        formRef.current,
        "gg07p_YgmrbUKaGQ2" // e.g., "public_xxxxxx"
      )
      .then(
        () => {
          setIsError(false);
          setIsModalVisible(true);
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("Email send failed:", error);
          setIsError(true);
          setIsModalVisible(true);
        }
      );
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (formContainerRef.current) observer.observe(formContainerRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (formContainerRef.current)
        observer.unobserve(formContainerRef.current);
    };
  }, []);

  return (
    <div className="contact sec-pad dynapicBg">
      <div className="wrap-container">
        <h2
          ref={headingRef}
          className="heading heading-sec heading-sec__mb-med"
        >
          <span className="heading-sec__main heading-sec__main--lt">
            Contact
          </span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Contact Stellabros Consulting through email by submitting the form
            below and we will get back to you as soon as possible.
          </span>
        </h2>

        <div ref={formContainerRef} className="contact-container">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="contact__form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="contact__form-label" htmlFor="user_email">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="contact__form-input"
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
                placeholder="Enter Your Message"
                className="contact__form-input"
                rows={10}
                cols={30}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>
              {isError
                ? "Failed to send message!"
                : "Message sent successfully!"}
            </h3>

            <div className="modal-icon">
              {isError ? (
                <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
              ) : (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="success-icon"
                />
              )}
            </div>

            <button onClick={handleCloseModal} className="modal-button">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
