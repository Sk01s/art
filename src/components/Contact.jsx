import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target.email.value ||
      !e.target.name.value ||
      !e.target.message.value
    ) {
      return toast.error("input must not be empty");
    }
    setLoading(true);
    emailjs
      .sendForm(
        "service_2ff0eon",
        "template_04pkwzd",
        e.currentTarget,
        "_74A5H2wUaWv_DBDf"
      )
      .then(
        (result) => {
          e.target.email.value = "";
          e.target.name.value = "";
          e.target.message.value = "";
          toast.success("Your message has been sent, we will reply asap  ");
        },
        (error) => {
          toast.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <section id="contact">
      <div className="view">
        <img
          alt=""
          className="bg"
          src="/images/placeholders/1920x1200-2.jpg"
          style={{
            transform: "translate3d(-79px, -206.5px, 0px) scale(0.61157)",
            opacity: 1,
            transformOrigin: "left center 0px",
          }}
        />
        <img
          alt=""
          className="bg"
          src="/images/placeholders/1920x1200-0.jpg"
          style={{
            transform: "translate3d(-92px, -194px, 0px) scale(0.62594)",
            opacity: 1,
            transformOrigin: "left center 0px",
          }}
        />
        <img
          alt=""
          className="bg"
          src="/images/placeholders/1920x1200-1.jpg"
          style={{
            transform: "translate3d(-789.89px, -171px, 0px) scale(0.719646)",
            opacity: 1,
            transformOrigin: "right center 0px",
          }}
        />
        <img
          alt=""
          className="bg"
          src="/images/placeholders/slider4.jpg"
          style={{
            transform: "translate3d(-31px, 5px, 0px) scale(0.602189)",
            opacity: 1,
            transformOrigin: "left top 0px",
          }}
        />
        <img
          alt=""
          className="bg"
          src="/images/placeholders/slider5.jpg"
          style={{
            transform: "translate3d(-31px, -262px, 0px) scale(0.565143)",
            opacity: 0.666817,
            transformOrigin: "left center 0px",
          }}
        />
        <div
          className="content full-size colors-h"
          style={{
            paddingTop: "70px",
            paddingBottom: "70px",
          }}
        >
          <div className="container">
            <h2>Contact</h2>
            <p className="header-details">For more information</p>
            <div className="row">
              <div className="col-md-6">
                <div
                  className="text-right scroll-in-animation player fadeInLeft animated css-animation-show"
                  data-animation="fadeInLeft"
                  style={
                    {
                      // Additional styles as needed
                    }
                  }
                >
                  <p className="big-font uppercase">
                    Tel: <strong className="highlight">+961 03 620553</strong>
                  </p>
                  <p className="big-font uppercase">
                    <span style={{ fontSize: "1.2em" }}>Atelier</span> <br />
                    Sanayeh, Toufic Tabara Street
                    <br /> Ghalayeni Building, 1st floor,
                    <br />
                    <br /> Beirut, Lebanon
                  </p>
                  <p className="big-font">
                    <b>
                      <a href="mailto:info@RaoufRifai.net">
                        info@RaoufRifai.net
                      </a>
                      <br />
                      <a href="http://www.raoufrifai.net">www.raoufrifai.net</a>
                    </b>
                  </p>
                  <p className="big-font">
                    <a
                      href="https://www.facebook.com/raouf.rifai?ref=br_rs"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/raouf_rifai/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="text-left scroll-in-animation player fadeInRight animated css-animation-show"
                  style={
                    {
                      // Additional styles as needed
                    }
                  }
                >
                  <form
                    className="ajax-form"
                    onSubmit={handleSubmit}
                    noValidate="novalidate"
                    style={{
                      width: "100%", // Additional styles as needed
                    }}
                  >
                    <div className="row">
                      <div className="col-md-6 control-group">
                        <div className="alt-placeholder">Name</div>
                        <input
                          type="text"
                          name="name"
                          size="40"
                          placeholder="Name"
                          required=""
                          aria-invalid="false"
                          style={{
                            width: "100%", // Additional styles as needed
                            padding: "10px", // Additional styles as needed
                            marginBottom: "10px", // Additional styles as needed
                          }}
                        />
                        <div className="help-block"></div>
                      </div>
                      <div className="col-md-6 control-group">
                        <div className="alt-placeholder">Email</div>
                        <input
                          type="email"
                          name="email"
                          size="40"
                          placeholder="Email"
                          required=""
                          style={{
                            width: "100%", // Additional styles as needed
                            padding: "10px", // Additional styles as needed
                            marginBottom: "10px", // Additional styles as needed
                          }}
                        />
                        <div className="help-block"></div>
                      </div>
                      <div className="col-md-12 control-group">
                        <div className="alt-placeholder">Message</div>
                        <textarea
                          name="message"
                          placeholder="Message"
                          age=""
                          required=""
                          style={{
                            width: "100%", // Additional styles as needed
                            padding: "10px", // Additional styles as needed
                            marginBottom: "10px", // Additional styles as needed
                          }}
                        ></textarea>
                        <div className="help-block"></div>
                      </div>
                      <div className="col-md-12 form-actions">
                        {loading ? (
                          <div style={{ textAlign: "center" }}>
                            <ClipLoader color="white" />
                          </div>
                        ) : (
                          <input
                            className="button"
                            type="submit"
                            value="Send"
                            style={{
                              // Additional styles as needed
                              width: "100%", // Additional styles as needed
                              padding: "10px", // Additional styles as needed
                            }}
                          ></input>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
