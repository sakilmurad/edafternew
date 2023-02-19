import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

function Book() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentId, setpaymentId] = useState("");
  const [sessionBooked, setsessionBooked] = useState(false);
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setName(data.get("name"));
    setEmail(data.get("email"));
    setPhone(data.get("phone"));
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    var options = {
      key: "rzp_live_LNHQORQQGEAbMc", // Enter the Key ID generated from the Dashboard  test key: rzp_test_OFZwNon89VTKce
      name: name,
      currency: "INR",
      amount: 30000,
      description: "GeM Seller - Beginner to Advanced",
      image: "https://cdn.razorpay.com/logos/KNerdLElSvCTX6_medium.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        setpaymentId(response.razorpay_payment_id);
        if (response.razorpay_payment_id) {
            setsessionBooked(true);
        }
      },
      prefill: {
        email: email,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Layout
      title={`Book a session`}
      description="Book a session with us to clear your doubts and aks questions about GeM."
    >
      <main className="container">
        {sessionBooked?<div className="center margin">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="green" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
<h1>Session Booked</h1>
<p>Thanks <b>{name}</b> for booking a session with us. We will call you on {phone} or you can also get in touch with us directly by using <Link href="/contact">Contact</Link> form.</p>
       <p>Payment Id: {paymentId}</p>
       <Link className="button button--primary margin-vert--sm" href="/docs/gem-portal-course">GeM Portal Course</Link>
        </div>:
        <form onSubmit={displayRazorpay}>
          <h1 className="center">Book a Session</h1>
          <p className="center">
            Book a session with us to clear your doubts and ask your questions.
          </p>
          <div className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
            </svg>
            <span> 1.5 Hr</span>
            <span>.</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>
            <span>300</span>
          </div>
          <div className="form_div">
            <div className="form_field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div className="form_field">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" id="phone" name="phone" required/>
            </div>
            <div className="form_field">
              <label htmlFor="email">Email Id</label>
              <input type="email" id="email" name="email" required/>
            </div>
          </div>
          <div className="center margin">
            <button className="button button--primary button--lg">
              Book Now
            </button>
          </div>
        </form>
        }
      </main>
    </Layout>
  );
}

export default Book;
