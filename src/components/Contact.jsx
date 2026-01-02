export default function Contact() {
  return (
    <section id="contact" className="section_contact">
      <div className="section_title">
        <h3>Contact Me</h3>
      </div>

      <form
        className="contact_form"
        action="https://formsubmit.co/db393285a33d87cd5543d356667697cc"
        method="POST"
      >
        <div className="items_wrap">
          <div className="items">

            {/* Name */}
            <div className="item half">
              <div className="input_wrapper">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            {/* Email */}
            <div className="item half">
              <div className="input_wrapper">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="item half">
              <div className="input_wrapper">
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  minLength="10"
                />
              </div>
            </div>

            {/* Company */}
            <div className="item half">
              <div className="input_wrapper">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Company Name"
                />
              </div>
            </div>

            {/* Message */}
            <div className="item">
              <div className="input_wrapper">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  aria-required="true"
                ></textarea>
              </div>
            </div>

            {/* Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for contacting me. I will get back to you soon."
            />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_next"
              value="https://madanprofile.github.io/contact.html"
            />
            <input type="text" name="_honey" style={{ display: "none" }} />

            {/* Submit */}
            <div className="item">
              <button type="submit">Send Message</button>
            </div>

          </div>
        </div>
      </form>
    </section>

  );
}
