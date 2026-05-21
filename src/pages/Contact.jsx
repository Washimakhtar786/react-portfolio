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
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#ECFCCB] px-4 md:px-8 py-24">

      {/* LEFT BLUR */}
      <div className="absolute left-[-120px] bottom-[-120px] w-[320px] h-[320px] bg-blue-200/40 rounded-full blur-3xl"></div>

      {/* RIGHT BLUR */}
      <div className="absolute right-[-120px] top-[180px] w-[320px] h-[320px] bg-lime-200/40 rounded-full blur-3xl"></div>

      {/* DOTTED PATTERN */}
      <div className="absolute left-12 top-44 hidden lg:grid grid-cols-5 gap-4 opacity-30">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 bg-lime-300 rounded-full"
          ></div>
        ))}
      </div>

      <div className="w-full">

        {/* HERO */}
        <div className="relative z-10 text-center max-w-5xl mx-auto mb-24 pt-10">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">

            <FaPaperPlane className="text-xs" />

            CONTACT

          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-[#0F172A] mb-6 leading-tight">

            Get in Touch

          </h1>

          <p className="text-slate-500 text-xl md:text-2xl leading-9 max-w-3xl mx-auto">

            Have a project, idea, or opportunity?
            I’d love to hear from you.

          </p>

        </div>

        {/* MAIN CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-[1.05fr_1fr] bg-white rounded-[40px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)] w-full lg:translate-x-20">

            {/* LEFT FORM */}
            <div className="bg-white px-16 md:px-20 py-16 flex flex-col justify-center lg:pl-20">

              {/* TITLE */}
              <div className="flex items-start gap-4 mb-12">

                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg shrink-0">

                  <FaEnvelope className="text-white text-lg" />

                </div>

                <div>

                  <h2 className="text-4xl font-bold text-[#0F172A] mb-3">

                    Send a Message

                  </h2>

                  <p className="text-slate-500 text-lg leading-7">

                    Fill out the form below and I’ll get back to you.

                  </p>

                </div>

              </div>

              {/* FORM */}
              {/* FORM */}
<form
  onSubmit={handleSubmit}
  className="space-y-8"
>

  {/* NAME */}
  <div className="translate-x-10">

    <label className="block text-[#0F172A] font-semibold mb-3 text-lg">

      Full Name

    </label>

    <div className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[18px] px-6 py-5 w-full max-w-[560px]">

      <FaUser className="text-slate-400 shrink-0 text-lg" />

      <input
        type="text"
        placeholder="Enter your name"
        className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 text-lg"
      />

    </div>

  </div>

  {/* EMAIL */}
  <div className="translate-x-10">

    <label className="block text-[#0F172A] font-semibold mb-3 text-lg">

      Email Address

    </label>

    <div className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[18px] px-6 py-5 w-full max-w-[560px]">

      <FaEnvelope className="text-slate-400 shrink-0 text-lg" />

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 text-lg"
      />

    </div>

  </div>

  {/* MESSAGE */}
  <div className="translate-x-10">

    <label className="block text-[#0F172A] font-semibold mb-3 text-lg">

      Message

    </label>

    <div className="flex gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[18px] px-6 py-5 w-full max-w-[560px]">

      <FaCommentDots className="text-slate-400 mt-1 shrink-0 text-lg" />

      <textarea
        rows="6"
        placeholder="Write your message..."
        className="w-full bg-transparent outline-none resize-none text-slate-700 placeholder:text-slate-400 text-lg"
      ></textarea>

    </div>

  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="translate-x-10 w-full max-w-[560px] flex items-center justify-center gap-3 bg-gradient-to-r from-[#3B82F6] to-[#312EDE] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white py-5 rounded-[18px] text-xl font-semibold shadow-xl transition-all duration-300"
  >

    <FaPaperPlane />

    Send Message

  </button>

</form>
                {/* PRIVACY */}
                <div className="flex items-center gap-3 text-slate-500 text-sm pt-2 ml-2">

                  <FaShieldAlt className="text-green-500 shrink-0" />

                  <p>

                    Your information is safe with me.
                    I respect your privacy.

                  </p>

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
              <div className="relative z-10 h-full flex flex-col justify-center items-center px-8 py-14">

                {/* TOP */}
                <div className="flex items-start gap-4 mb-12 w-[88%]">

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
                <div className="flex flex-col items-center gap-5 w-full">

                  {/* LOCATION */}
                  <div className="bg-white/95 rounded-3xl w-[88%] p-5 shadow-xl backdrop-blur-sm flex items-center gap-5 hover:scale-[1.02] transition duration-300">

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
                  <div className="bg-white/95 rounded-3xl w-[88%] p-5 shadow-xl backdrop-blur-sm flex items-center gap-5 hover:scale-[1.02] transition duration-300">

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
                    className="bg-white/95 rounded-3xl w-[88%] p-5 shadow-xl backdrop-blur-sm flex items-center justify-between hover:scale-[1.02] transition duration-300"
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
                    className="bg-white/95 rounded-3xl w-[88%] p-5 shadow-xl backdrop-blur-sm flex items-center justify-between hover:scale-[1.02] transition duration-300"
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