"use client";

import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      ...formData,
      access_key: "0a3cd3d6-a59e-41bd-9b7e-22393456139f",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setStatus("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>let's work together</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Your Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Subject
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Send Info
          </button>
        </div>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default Contact;
