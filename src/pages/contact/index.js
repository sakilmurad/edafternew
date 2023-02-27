import React, { useState } from "react";
import Layout from "@theme/Layout";
import Loader from "../../components/loader";
import Link from "@docusaurus/Link";

function Contact() {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [isSubmitted, setSubmitted] = useState(false)
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    setName(data.get("name"));
    // sendMail(data.get("name"), data.get("phone"), data.get("email"), data.get("message"))
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Layout
      title="Contact"
      description="Contact Edafter through mail or social media"
    >
      <main className="container margin-vert--lg center">
        {isSubmitted?  <div className="center margin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="green"
              class="bi bi-envelope-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
            </svg>
            <h1>Message Received</h1>
            <p>
              Thanks <b>{name}</b>. We have received your mail, we will try to
              response you as soon as possible.
            </p>
            <Link href="/" className="button button--primary button--lg">
                  Home
                </Link>
          </div>:
        <form onSubmit={HandleSubmit}>
          <h1 className="center">Contact</h1>
          <p className="center">Contact us for any query or suggestion</p>
          <div className="form_div">
            <div className="form_field">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div className="form_field">
              <label htmlFor="email">Email Id</label>
              <input type="email" id="email" name="email" required/>
            </div>
            <div className="form_field">
              <label htmlFor="phone">Phone No</label>
              <input type="number" id="phone" name="phone" />
            </div>
            <div className="form_field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" name="message" required></textarea>
            </div>
            <div className="center">
              {isLoading ? (
                <Loader />
              ) : (
                <button className="button button--primary button--lg">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>}
      </main>
    </Layout>
  );
}

export default Contact;
