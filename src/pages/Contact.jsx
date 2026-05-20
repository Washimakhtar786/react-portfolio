function Contact() {
  return (
    <section className="max-w-3xl">

      <h2 className="text-4xl font-bold mb-6">
        Contact Me
      </h2>

      <p className="text-gray-600 mb-8 leading-7">
        Feel free to connect with me for collaboration,
        frontend development opportunities, or networking.
      </p>

      <div className="space-y-4">

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="font-semibold mb-1">
            Email
          </h3>

          <p className="text-gray-600">
            washim@example.com
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="font-semibold mb-1">
            LinkedIn
          </h3>

          <p className="text-gray-600">
            linkedin.com/in/washim
          </p>
        </div>

      </div>

    </section>
  );
}

export default Contact;