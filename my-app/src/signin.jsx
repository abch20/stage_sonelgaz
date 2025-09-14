import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <form className="space-y-5">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Sign In</button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
