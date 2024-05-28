import axios from 'axios';
import React, { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import "./Contact.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://sheet.best/api/sheets/a61d28ee-c7e3-4696-9961-3a10df026a2b',
      form
    ).then((response) => {
      console.log(response)
      // clearing form fields
      setForm({ name: '', email: '', subject: '', message: '' })
    })
  }

  return (
    <>
      <section className="contact section" id='contact'>
        <h2 className="section__title text-cs">Contact</h2>
        <p className="section__subtitle">
          Any <span>Questions</span>
        </p>

        <div className="contact__container container grid">
          <div className="contact__content">
            <div className="contact__card">

              <span className="contact__card-icon">
                <FaRegMap />
              </span>

              <h3 className="contact__card-title">Address</h3>
              <p className="contact__card-data">Lyon, france</p>
            </div>

            <div className="contact__card">

              <span className="contact__card-icon">
                <FaRegUser />
              </span>

              <h3 className="contact__card-title">Alternance</h3>
              <p className="contact__card-data">dès septembre 2024</p>
            </div>

            <div className="contact__card">

              <span className="contact__card-icon">
                <FaRegEnvelope />
              </span>

              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-data">m.lysuk@gmail.com</p>
            </div>

            <div className="contact__card">

              <span className="contact__card-icon">
                <FaRegAddressBook />
              </span>

              <h3 className="contact__card-title">Phone</h3>
              <p className="contact__card-data">0640214494</p>
            </div>
          </div>

          <form action="" className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group grid">
              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag text-cs">Your full Name<b>*</b></label>
                <input
                  type="text"
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  className="contact__form-input" />
              </div>

              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag text-cs">Your Email Address<b>*</b></label>
                <input
                  type="email"
                  name='email'
                  onChange={handleChange}
                  value={form.email}
                  className="contact__form-input" />
              </div>
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag text-cs">Your Subject<b>*</b></label>
              <input
                type="text"
                name='subject'
                onChange={handleChange}
                value={form.subject}
                className="contact__form-input" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag text-cs">Your Message<b>*</b></label>
              <textarea
                name='message'
                onChange={handleChange}
                value={form.message}
                className="contact__form-input"></textarea>
            </div>

            <div className="contact__submit">
              <button type='submit' className='btn text-cs'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
