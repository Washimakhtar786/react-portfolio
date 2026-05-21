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
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#ECFCCB] px-4 md:px-8 py-20 flex items-center">

      {/* LEFT BLUR */}
      <div className="absolute left-[-120px] bottom-[-120px] w-[320px] h-[320px] bg-blue-200/40 rounded-full blur-3xl"></div>

      {/* RIGHT BLUR */}
      <div className="absolute right-[-120px] top-[180px] w-[320px] h-[320px] bg-lime-200/40 rounded-full blur-3xl"></div>

      {/* DOTTED PATTERN */}
      <div className="absolute left-12 top-40 hidden lg:grid grid-cols-5 gap-4 opacity-30">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 bg-green-300 rounded-full"
          ></div>
        ))}
      </div>

      <div className="w-full">

        {/* HERO */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">

            <FaPaperPlane className="text-xs" />

            CONTACT

          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#0F172A] mb-6 leading-tight">

            Get in Touch

          </h1>

          <p className="text-slate-500 text-lg md:text-2xl leading-9">

            Have a project, idea, or opportunity?
            I’d love to hear from you.

          </p>

        </div>

        {/* MAIN CONTAINER */}
        
    <div className="relative z-10 max-w-6xl mx-auto mt-16 lg:translate-x-36">

    <div className="grid lg:grid-cols-[0.9fr_1.1fr] bg-white rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

    {/* LEFT FORM */}
    <div className="bg-white px-10 md:px-14 py-14 flex flex-col justify-center">

      {/* TITLE */}
      <div className="flex items-start gap-4 mb-10">

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg shrink-0">

          <FaEnvelope className="text-white text-lg" />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#0F172A] mb-3">

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
        className="space-y-7"
      >

        {/* NAME */}
        <div>

          <label className="block text-[#0F172A] font-semibold mb-3">

            Full Name

          </label>

          <div className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 py-4">

            <FaUser className="text-slate-400 shrink-0" />

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
            />

          </div>

        </div>

        {/* EMAIL */}
        <div>

          <label className="block text-[#0F172A] font-semibold mb-3">

            Email Address

          </label>

          <div className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 py-4">

            <FaEnvelope className="text-slate-400 shrink-0" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
            />

          </div>

        </div>

        {/* MESSAGE */}
        <div>

          <label className="block text-[#0F172A] font-semibold mb-3">

            Message

          </label>

          <div className="flex gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-5 py-4">

            <FaCommentDots className="text-slate-400 mt-1 shrink-0" />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-transparent outline-none resize-none text-slate-700 placeholder:text-slate-400"
            ></textarea>

          </div>

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#3B82F6] to-[#312EDE] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white py-4 rounded-2xl text-lg font-semibold shadow-xl transition-all duration-300"
        >

          <FaPaperPlane />

          Send Message

        </button>

        {/* PRIVACY */}
        <div className="flex items-center justify-center gap-3 text-slate-500 text-sm pt-2">

          <FaShieldAlt className="text-green-500 shrink-0" />

          <p>

            Your information is safe with me.
            I respect your privacy.

          </p>

        </div>

      </form>

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
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-12 py-14">

        {/* TOP */}
        <div className="flex items-start gap-4 mb-12">

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg shrink-0">

            <FaUser className="text-white text-lg" />

          </div>

          <div>

            <h2 className="text-4xl font-bold text-white mb-2">

              Let’s Connect

            </h2>

            <p className="text-slate-300 text-lg">

              Here’s how you can reach me.

            </p>

          </div>

        </div>

        {/* INFO CARDS */}
        <div className="space-y-6">

          {/* LOCATION */}
          <div className="bg-white rounded-[24px] px-6 py-5 shadow-xl flex items-center gap-5">

            <div className="bg-blue-100 p-4 rounded-2xl shrink-0">

              <FaMapMarkerAlt className="text-blue-600 text-xl" />

            </div>

            <div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-1">

                Location

              </h3>

              <p className="text-slate-500">

                Bhopal, Madhya Pradesh, India

              </p>

            </div>

          </div>

          {/* PHONE */}
          <div className="bg-white rounded-[24px] px-6 py-5 shadow-xl flex items-center gap-5">

            <div className="bg-green-100 p-4 rounded-2xl shrink-0">

              <FaPhoneAlt className="text-green-600 text-xl" />

            </div>

            <div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-1">

                Phone

              </h3>

              <p className="text-slate-500">

                +91 6268528753

              </p>

            </div>

          </div>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/washim-akhter-563721361"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-[24px] px-6 py-5 shadow-xl flex items-center justify-between gap-5 hover:translate-y-[-3px] transition-all duration-300"
          >

            <div className="flex items-center gap-5">

              <div className="bg-[#0077B5]/10 p-4 rounded-2xl shrink-0">

                <FaLinkedin className="text-[#0077B5] text-xl" />

              </div>

              <div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-1">

                  LinkedIn

                </h3>

                <p className="text-slate-500 text-sm break-all">

                  linkedin.com/in/washim-akhter-563721361

                </p>

              </div>

            </div>

            <FaArrowRight className="text-slate-500 text-lg shrink-0" />

          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Washimakhtar786"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-[24px] px-6 py-5 shadow-xl flex items-center justify-between gap-5 hover:translate-y-[-3px] transition-all duration-300"
          >

            <div className="flex items-center gap-5">

              <div className="bg-black/10 p-4 rounded-2xl shrink-0">

                <FaGithub className="text-black text-xl" />

              </div>

              <div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-1">

                  GitHub

                </h3>

                <p className="text-slate-500 text-sm break-all">

                  github.com/Washimakhtar786

                </p>

              </div>

            </div>

            <FaArrowRight className="text-slate-500 text-lg shrink-0" />

          </a>

        </div>

      </div>

    </div>

  </div>

</div>

        {/* FOOTER */}
        <div className="relative z-10 text-center mt-14">

          <p className="text-slate-600 text-lg font-medium">

            Let’s build something amazing together!

          </p>

        </div>

      </div>

      {/* SUCCESS POPUP */}
      {submitted && (

        <div className="fixed top-10 right-5 md:right-10 bg-green-500 text-white px-8 py-5 rounded-2xl shadow-2xl z-50 animate-bounce">

          Message Submitted Successfully ✅

        </div>

      )}

    </section>
  );
}

export default Contact;