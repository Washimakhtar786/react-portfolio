import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="text-center">
      <h2 className="text-5xl font-bold mb-4">
        404
      </h2>

      <p className="mb-6 text-gray-600">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Back To Home
      </Link>
    </section>
  );
}

export default NotFound;