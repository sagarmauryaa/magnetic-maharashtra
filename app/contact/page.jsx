"use client";

import React, { useRef, useState } from "react";
import styles from "./contact.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "./ContactForm";
function Contact() {
  useGSAP(() => {
    gsap.from(`.${styles.contactWrapper} .${styles.heading}`, {
      yPercent: 20,
      opacity: 0,
    });
  });
  const [values, setValues] = useState({
    name: "",
    selector: "",
    email: "",
    message: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };
  return (
    <section className={styles.contactPage}>
      <div className={styles.contactContainer}>
        <div className={styles.contactWrapper}>
          {/* <form onSubmit={handleSubmit} className="formmm">
            <h2 className="heading">Lets Stay Connected</h2>
            <div className="form-grid">
              <div>
                <label htmlFor="name">Name</label>
                <input name="fullname" type="text" id="name" />
              </div>
              <div className="custom-select-wrapper">
                <label htmlFor="name">What are you looking ?</label>
                <select name="whatAreYouLookingFor" id="custom-select">
                  <option disabled selected>
                    Select
                  </option>
                  <option id="1" value="Investment Opportunities">
                    Investment Opportunities
                  </option>
                  <option id="2" value="Business Partnerships">
                    Business Partnerships
                  </option>
                  <option id="3" value="Government Policies & Support">
                    Government Policies & Support
                  </option>
                  <option id="4" value="Event Information">
                    Event Information
                  </option>
                  <option id="5" value="Media & Press Inquiries">
                    Media & Press Inquiries
                  </option>
                  <option id="6" value="Tourism & Cultural Activities">
                    Tourism & Cultural Activities
                  </option>
                  <option id="7" value="Career Opportunities">
                    Career Opportunities
                  </option>
                  <option id="8" value="Feedback & Suggestions">
                    Feedback & Suggestions
                  </option>
                  <option id="9" value="Technical Assistance">
                    Technical Assistance
                  </option>
                  <option id="10" value="General Inquiries">
                    General Inquiries
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="name">Your Message </label>
                <textarea type="textarea" name="message" id="name" />
              </div>
              <div>
                <label htmlFor="name">Phone Number </label>
                <input
                  type="number"
                  name="phone"
                  id="name"
                  minlength="10"
                  maxlength="10"
                  pattern="\d{10}"
                  inputMode="numeric"
                />
              </div>
            </div>
            <div>
              <button>Send</button>
              <p>All fields are required</p>
            </div>
          </form> */}
          <ContactForm />
        </div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactGridContainer}>
            <div className={styles.contactWrapperGridItem}>
              <h2>Address</h2>
              <p className={styles.contactAddress}>
                Magnetic Maharashtra Initiative Department of Industries
                Government of Maharashtra Mantralaya, Mumbai - 400032
                Maharashtra, India
              </p>
            </div>
            <div className={styles.contactWrapperGridItem}>
              <h2>Phone Numbers</h2>
              <div>
                <p>
                  <span>General Inquiries:</span>
                  <span>+91-22-12345678</span>
                </p>
                <p>
                  <span>Investor Relations:</span>
                  <span>+91-22-87654321</span>
                </p>
                <p>
                  <span>Media Inquiries:</span>
                  <span>+91-22-11223344</span>
                </p>
              </div>
            </div>
            <div className={styles.contactWrapperGridItem}>
              <h2>Email Addresses</h2>
              <div>
                <p>
                  <span>General Inquiries:</span>
                  <span>
                    <a href="mailto:info@magneticmaharashtra.gov.in">
                      info@magneticmaharashtra.gov.in
                    </a>
                  </span>
                </p>
                <p>
                  <span>Investor Relations:</span>
                  <span>
                    <a href="mailto:invest@magneticmaharashtra.gov.in">
                      invest@magneticmaharashtra.gov.in
                    </a>
                  </span>
                </p>
                <p>
                  <span>Media Inquiries:</span>
                  <span>
                    <a href="mailto:media@magneticmaharashtra.gov.in">
                      media@magneticmaharashtra.gov.in
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.contactWrapperGridItem}>
              <h2>Office Hours</h2>
              <p className={styles.officeHours}>
                Monday - Friday: 9:30 AM – 6:00 PM IST <br />
                Weekends & Public Holidays: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.contactWrapper} ${styles.locateUs}`}>
        <h2>Locate Us</h2>
        <div className={styles.googleMap}>
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=vashi+(stuvio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">real-time gps tracking</a>
            </iframe>
          </div>
        </div>
      </div>
      {/* <Flag /> */}
    </section>
  );
}

export default Contact;
