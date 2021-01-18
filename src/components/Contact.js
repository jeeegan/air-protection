import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact-form" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
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
            <a href="mailto:contact@airprotection.co.uk">
              contact@airprotection.co.uk
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone</h3>
            <span>0141 XXX XXXX</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              C.W. Cameron Ltd
              <br />
              Kirkhill House
              <br />
              81 Broom Road East
              <br />
              Newton Mearns
              <br />
              Scotland G77 5LL
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
