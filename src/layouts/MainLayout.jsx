import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* TOP LEFT GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* BOTTOM RIGHT GLOW */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl"></div>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">

        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default MainLayout;