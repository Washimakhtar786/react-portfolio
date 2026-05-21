import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

  };

  return (

    <section className="min-h-screen bg-[#d7ff2f] relative overflow-hidden flex items-center justify-center px-4 py-20">

      {/* BACKGROUND SHAPES */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rotate-[-35deg] -translate-x-40 -translate-y-40 opacity-70"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white rotate-[-35deg] translate-x-40 translate-y-40 opacity-70"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-6xl w-full rounded-[40px] overflow-hidden shadow-2xl bg-white">

        <div className="grid lg:grid-cols-2">

          {/* CONTACT FORM FIRST */}
          <div className="bg-white p-8 md:p-14 order-1">

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
              Contact Form
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* NAME */}
              <div>

                <label className="block text-slate-700 font-semibold mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-100 rounded-2xl px-6 py-5 outline-none border-2 border-transparent focus:border-blue-500 transition"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-slate-700 font-semibold mb-3">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 rounded-2xl px-6 py-5 outline-none border-2 border-transparent focus:border-blue-500 transition"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="block text-slate-700 font-semibold mb-3">
                  Comment or message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-gray-100 rounded-2xl px-6 py-5 outline-none border-2 border-transparent focus:border-blue-500 transition resize-none"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#2d3f5f] hover:bg-[#1d2d49] text-white py-5 rounded-full text-xl font-semibold transition duration-300"
              >
                Submit
              </button>

            </form>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative order-2">

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
              alt="Office"
              className="w-full h-[250px] lg:h-full object-cover"
            />

            {/* INFO CARD */}
            <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl w-full lg:w-[320px]">

              {/* LOCATION */}
              <div className="flex items-start gap-4 mb-8">

                <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Location
                  </h3>

                  <p className="text-gray-500 leading-7 break-words">
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 mb-8">

                <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                  <FaPhoneAlt className="text-blue-600 text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Phone
                  </h3>

                  <p className="text-gray-500 break-all">
                    +91 6268528753
                  </p>
                </div>

              </div>

              {/* LINKEDIN */}
              <div className="flex items-start gap-4 mb-8">

                <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                  <FaLinkedin className="text-blue-600 text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    LinkedIn
                  </h3>

                  <a
                    href="https://linkedin.com/in/washim-akhter-563721361"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition break-all"
                  >
                    linkedin.com/in/washim-akhter-563721361
                  </a>
                </div>

              </div>

              {/* GITHUB */}
              <div className="flex items-start gap-4">

                <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                  <FaGithub className="text-blue-600 text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    GitHub
                  </h3>

                  <a
                    href="https://github.com/Washimakhtar786"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition break-all"
                  >
                    github.com/Washimakhtar786
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SUCCESS POPUP */}
      {submitted && (

        <div className="fixed top-10 right-5 md:right-10 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 animate-bounce">

          Message Submitted Successfully ✅

        </div>

      )}

    </section>
  );
}

export default Contact;