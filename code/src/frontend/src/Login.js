import { useState } from "react";
import Papa from "papaparse";

function Login({ onLogin }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState([]);

  // Fetch and parse the CSV file
  const fetchCredentials = () => {
    fetch("/user_credentials.csv") // Ensure this file is in the `public` folder
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setCredentials(result.data); // Store parsed credentials
          },
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  };

  // Check credentials on login
  const handleLogin = () => {
    const user = credentials.find(
      (cred) => cred.user_id === userId && cred.password === password
    );

    if (user) {
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // Fetch credentials when the component loads
  useState(() => {
    fetchCredentials();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
      <div className="p-6 bg-gray-900 rounded-lg shadow-lg w-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Log in to your Account
        </h2>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-lg"
        />
        <button
          className="w-full font-semibold text-xl bg-blue-600 text-black p-2 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
