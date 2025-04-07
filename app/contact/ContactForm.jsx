import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./contact.module.css";
function ContactForm() {
  const schema = z.object({
    name: z.string().min(2, "Name must be at least 5 characters long.").max(30),
    phone: z.string().regex(/^\d{10}$/, "Enter a valid phone number."),
    email: z.string().email("Please enter a valid email address."),
    whatAreYouLookingFor: z.string().nonempty("Please select an option."),
    message: z.string().min(5, "Message must be at least 5 words."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    console.log(data);
  };
  const inputStyle = (fieldName) => {
    return errors[fieldName]
      ? {
          border: "1px solid #ff2929",
          color: "#ff2929",
          borderRadius: "2px",
          fontSize: "14px",
        } // Apply blue border and text color if error exists
      : {}; // No special styles if no error
  };
  return (
    <form onSubmit={handleSubmit(submitData)} className={styles.formmm}>
      <h2 className={styles.heading}>Lets Stay Connected</h2>
      <div className={styles.formGrid}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            style={inputStyle("name")}
          />
          <div className={styles.errorSmg}>
            {errors.name && errors.name.message}
          </div>
        </div>
        <div>
          <div className={styles.customSelectWrapper}>
            <label htmlFor="name">What are you looking ?</label>
            <select
              style={inputStyle("whatAreYouLookingFor")}
              name="whatAreYouLookingFor"
              id={styles.customSelect}
              {...register("whatAreYouLookingFor")}
            >
              <option id="0" value="">
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
          <div className={styles.errorSmg}>
            {" "}
            {errors.whatAreYouLookingFor && errors.whatAreYouLookingFor.message}
          </div>
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id={styles.emailInput}
            {...register("email")}
            style={inputStyle("email")}
          />
          <div className={styles.errorSmg}>
            {errors.email && errors.email.message}
          </div>
        </div>
        <div>
          <label htmlFor="name">Your Message </label>
          <textarea
            type="textarea"
            name="message"
            id="name"
            {...register("message")}
            style={inputStyle("message")}
          />
          <div className={styles.errorSmg}>
            {" "}
            {errors.message && errors.message.message}
          </div>
        </div>
        <div>
          <label htmlFor="name">Phone Number </label>
          <input
            id={styles.phone}
            type="number"
            // name='phone'
            // id='name'
            // minlength='10'
            // maxlength='10'
            // pattern='\d{10}'
            // inputMode='numeric'
            style={inputStyle("phone")}
            {...register("phone")}
          />
          <div className={styles.errorSmg}>
            {" "}
            {errors.phone && errors.phone.message}
          </div>
        </div>
      </div>
      <div>
        <button>Send</button>
        <p>All fields are required</p>
      </div>
    </form>
  );
}

export default ContactForm;
