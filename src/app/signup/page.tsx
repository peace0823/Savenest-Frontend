export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto py-10 px-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
