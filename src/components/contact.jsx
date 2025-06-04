"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import * as z from "zod";
import "../styles/contact.css";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string()
    .min(8, { message: "Please enter a valid phone number." })
    .regex(/^\+?[0-9\s-]+$/, { message: "Phone number is invalid." }),
  company: z.string().optional().or(z.literal("")),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

function ContactFormComponent() {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setSuccessMessage("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccessMessage("Message sent successfully!");
      reset();
      setFocus("name");
    } catch (error) {
      // handle submission error if needed
    }
  };

  return (
    <section className="card" aria-label="Contact form">
      <header className="card-header">
        <h3 className="card-title">Send us a message</h3>
      </header>

      <motion.form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="form-row">
          <div className="form-item">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              {...register("name")}
              placeholder="Your name"
              className={`borderClass form-input ${errors.name ? "input-error" : ""}`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              name="name"
            />
            {errors.name && (
              <p role="alert" id="name-error" className="form-error">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="form-item">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              {...register("email")}
              placeholder="Your email"
              className={`borderClass form-input ${errors.email ? "input-error" : ""}`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              name="email"
            />
            {errors.email && (
              <p role="alert" id="email-error" className="form-error">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-item">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              id="phone"
              {...register("phone")}
              placeholder="Your phone number"
              className={`borderClass form-input ${errors.phone ? "input-error" : ""}`}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              name="phone"
            />
            {errors.phone && (
              <p role="alert" id="phone-error" className="form-error">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="form-item">
            <label htmlFor="company" className="form-label">Company (Optional)</label>
            <input
              id="company"
              {...register("company")}
              placeholder="Your company"
              className="borderClass form-input"
              name="company"
            />
          </div>
        </div>

        <div className="form-item">
          <label htmlFor="subject" className="form-label">Subject</label>
          <select
            id="subject"
            {...register("subject")}
            className={`borderClass form-select ${errors.subject ? "input-error" : ""}`}
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            name="subject"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="services">Services</option>
            <option value="partnership">Partnership</option>
            <option value="support">Support</option>
          </select>
          {errors.subject && (
            <p role="alert" id="subject-error" className="form-error">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="form-item">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="How can we help you?"
            rows={5}
            className={`borderClass form-textarea ${errors.message ? "input-error" : ""}`}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            name="message"
          />
          {errors.message && (
            <p role="alert" id="message-error" className="form-error">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn-submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {successMessage && (
          <p role="status" aria-live="polite" className="form-success" tabIndex={-1}>
            {successMessage}
          </p>
        )}
      </motion.form>
    </section>
  );
}

export default function ContactPage() {
  return (
    <motion.main
      id="contact-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 id="contact-page-title">Contact Us</h1>
      <p id="contact-page-description">
        Have questions or ready to start your growth journey? Get in touch with our team.
      </p>
      <ContactFormComponent />
    </motion.main>
  );
}
