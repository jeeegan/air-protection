import React from 'react'
import {Link } from 'gatsby'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <h2>Contact Us</h2>
        <form
          method="post"
          data-netlify="true"
          name="contact-form"
          enctype="multipart/form-data"
          action="/thanks"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className="field half first">
            <label htmlFor="contact-number">Contact Number</label>
            <input
              type="tel"
              name="contact-number"
              id="contact-number"
              required
            />
          </div>
          <div className="field half">
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          {/* <div className="field">
            <label htmlFor="order_form">Upload order form (optional)</label>
            <input
              type="file"
              name="order_form"
              id="order_form"
              name="order_form"
            />
          </div>
          <div className="field">
          <Link to="/#order">
              You can download our order form here
            </Link>
          </div> */}
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="mailto:mail@airprotection.co.uk">
              mail@airprotection.co.uk
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone</h3>
            <span>0141 237 3090</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              C.W. Cameron Ltd
              <br />
              T/A Air Protection
              <br />
              Kirkhill House
              <br />
              81 Broom Road East
              <br />
              Newton Mearns
              <br />
              Glasgow G77 5LL
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
