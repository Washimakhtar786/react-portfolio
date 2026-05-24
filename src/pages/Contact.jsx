import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaShieldAlt,
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

    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#ECFCCB] pt-40 pb-24 px-6">

      {/* BACKGROUND BLURS */}
      <div className="absolute -left-32 bottom-0 w-[320px] h-[320px] bg-blue-200/40 rounded-full blur-3xl"></div>

      <div className="absolute -right-32 top-40 w-[320px] h-[320px] bg-lime-200/40 rounded-full blur-3xl"></div>

      {/* TOP SECTION */}
      <div className="relative z-10 text-center mb-16">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-6">

          <FaPaperPlane className="text-sm" />

          CONTACT

        </div>

        <h1 className="text-6xl md:text-7xl font-black text-[#0F172A] mb-6">

          Get in Touch

        </h1>

        <p className="text-slate-500 text-2xl">

          Have a project, idea, or opportunity?
          I’d love to hear from you.

        </p>

      </div>

      {/* MAIN CARD */}
      {/* MAIN CARD */}
<div className="relative z-10 max-w-[1180px] mx-auto translate-x-26">

  <div className="grid lg:grid-cols-2 w-full rounded-[38px] overflow-hidden bg-white shadow-[0_25px_90px_rgba(0,0,0,0.12)]">

    {/* LEFT FORM */}
    <div className="bg-white px-14 py-16 flex items-center justify-center">

      <div className="w-full max-w-[500px]">

        {/* HEADING */}
        <div className="flex items-start gap-5 mb-12">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-lg shrink-0">

            <FaEnvelope className="text-white text-lg" />

          </div>

          <div>

            <h2 className="text-[42px] font-bold text-[#0F172A] leading-none mb-4">

              Send a Message

            </h2>

            <p className="text-slate-500 text-lg leading-7">

              Fill out the form below and I’ll get back to you.

            </p>

          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >

          {/* NAME */}
          <div className="space-y-4">

            <label className="block text-[#0F172A] font-bold text-[20px]">

              Full Name

            </label>

            <div className="flex items-center h-[72px] rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-7 shadow-sm">

              <FaUser className="text-slate-400 text-lg shrink-0 mr-4" />

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-[17px] text-slate-700 placeholder:text-slate-400"
              />

            </div>

          </div>

          {/* EMAIL */}
          <div className="space-y-4">

            <label className="block text-[#0F172A] font-bold text-[20px]">

              Email Address

            </label>

            <div className="flex items-center h-[72px] rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-7 shadow-sm">

              <FaEnvelope className="text-slate-400 text-lg shrink-0 mr-4" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-[17px] text-slate-700 placeholder:text-slate-400"
              />

            </div>

          </div>

          {/* MESSAGE */}
          <div className="space-y-4">

            <label className="block text-[#0F172A] font-bold text-[20px]">

              Message

            </label>

            <div className="flex rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-7 py-5 shadow-sm">

              <FaCommentDots className="text-slate-400 text-lg shrink-0 mr-4 mt-1" />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-transparent outline-none resize-none text-[17px] text-slate-700 placeholder:text-slate-400 leading-8"
              ></textarea>

            </div>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="h-[72px] mt-2 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#312EDE] text-white text-xl font-semibold flex items-center justify-center gap-4 shadow-xl hover:scale-[1.01] transition-all duration-300"
          >

            <FaPaperPlane />

            Send Message

          </button>

        </form>

        {/* PRIVACY */}
        <div className="flex items-center justify-center gap-3 text-slate-500 text-base mt-10">

          <FaShieldAlt className="text-green-500" />

          <p>

            Your information is safe with me.
            I respect your privacy.

          </p>

        </div>

      </div>

    </div>
          {/* RIGHT SIDE */}
          <div className="relative min-h-[760px]">

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"
              alt="Office"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#0F172A]/70"></div>

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center px-10 py-16">

              {/* TOP */}
              <div className="flex items-start gap-5 mb-12">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shrink-0">

                  <FaUser className="text-white text-xl" />

                </div>

                <div>

                  <h2 className="text-5xl font-bold text-white mb-3">

                    Let’s Connect

                  </h2>

                  <p className="text-slate-300 text-xl">

                    Here’s how you can reach me.

                  </p>

                </div>

              </div>

              {/* CARDS */}
              <div className="flex flex-col gap-5">

                {/* LOCATION */}
                <div className="bg-white/95 rounded-3xl p-6 shadow-xl backdrop-blur-sm flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">

                    <FaMapMarkerAlt className="text-blue-600 text-2xl" />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-1">

                      Location

                    </h3>

                    <p className="text-slate-500 text-lg">

                      Bhopal, Madhya Pradesh, India

                    </p>

                  </div>

                </div>

                {/* PHONE */}
                <div className="bg-white/95 rounded-3xl p-6 shadow-xl backdrop-blur-sm flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">

                    <FaPhoneAlt className="text-green-600 text-2xl" />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-1">

                      Phone

                    </h3>

                    <p className="text-slate-500 text-lg">

                      +91 6268528753

                    </p>

                  </div>

                </div>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/washim-akhter-563721361"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/95 rounded-3xl p-6 shadow-xl backdrop-blur-sm flex items-center justify-between hover:scale-[1.02] transition-all duration-300"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#0077B5]/10 flex items-center justify-center shrink-0">

                      <FaLinkedin className="text-[#0077B5] text-2xl" />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-[#0F172A] mb-1">

                        LinkedIn

                      </h3>

                      <p className="text-slate-500">

                        linkedin.com/in/washim-akhter-563721361

                      </p>

                    </div>

                  </div>

                  <FaArrowRight className="text-slate-500 text-xl shrink-0" />

                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/Washimakhtar786"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/95 rounded-3xl p-6 shadow-xl backdrop-blur-sm flex items-center justify-between hover:scale-[1.02] transition-all duration-300"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center shrink-0">

                      <FaGithub className="text-black text-2xl" />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-[#0F172A] mb-1">

                        GitHub

                      </h3>

                      <p className="text-slate-500">

                        github.com/Washimakhtar786

                      </p>

                    </div>

                  </div>

                  <FaArrowRight className="text-slate-500 text-xl shrink-0" />

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SUCCESS MESSAGE */}
      {submitted && (

        <div className="fixed top-10 right-10 bg-green-500 text-white px-8 py-5 rounded-2xl shadow-2xl z-50">

          Message Submitted Successfully ✅

        </div>

      )}

    </section>
  );
}

export default Contact;