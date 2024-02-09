import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ex0plgd',
        'template_prftolm',
        form.current,
        'D6Bz3_g321zVOx-1F'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        Swal.fire({
          title: 'Thank you!',
          text: 'I will get back to you shortly!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        })
      );
  };

  return (
    <div className="bg-base-300 pb-8" id="contact">
      <div className="text-center pt-16">
        <p className="text-teal-400 text-lg">Contact Me</p>
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight  mt-5 mb-16 md:mb-28">
          I Want to Hear From You
        </h1>
      </div>

      <section className="py-6 text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div data-aos="fade-up" className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Mirpur, Dhaka, Bangladesh</span>
              </p>

              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>aburatinshoaib@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            data-aos="fade-right"
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="John Smith"
                className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri text-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="john@smith.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri text-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ri focus:ri text-gray-800"
              ></textarea>
            </label>
            <button
              type="submit"
              className="btn bg-teal-400 hover:bg-teal-500 border- text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
