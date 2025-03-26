import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react"; // Icons for the toggle button
import Login from "./Login"; // Importing Login.js

function Home({ onLogout }) {
  const [selectedCard, setSelectedCard] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  const creditCards = [
    { id: 1, name: "Platinum Card" },
    { id: 2, name: "Gold Card" },
    { id: 3, name: "Silver Card" },
    { id: 4, name: "Business Card" },
    { id: 5, name: "Travel Card" },
    { id: 6, name: "Cashback Card" },
    { id: 7, name: "Student Card" },
  ];

  const recommendations = {
    1: [
      { id: 1, name: "Exclusive Airport Lounge Access", link: "https://example.com/lounge" },
      { id: 2, name: "Premium Travel Insurance", link: "https://example.com/insurance" },
      { id: 3, name: "Concierge Service for VIP Customers", link: "https://example.com/insurance" },
    ],
    2: [
      { id: 1, name: "Gold Membership Rewards", link: "https://example.com/gold-rewards" },
      { id: 2, name: "Luxury Hotel Discounts", link: "https://example.com/luxury-hotels" },
      { id: 3, name: "Priority Hotel Booking Discounts", link: "https://example.com/insurance" },
    ],
    3: [
      { id: 1, name: "Silver Cashback Offers", link: "https://example.com/cashback" },
      { id: 2, name: "Dining Discounts", link: "https://example.com/dining" },
      { id: 3, name: "Fuel Surcharge Waiver", link: "https://example.com/insurance" },
    ],
    4: [
      { id: 1, name: "Business Expense Tracking", link: "https://example.com/business-tracking" },
      { id: 2, name: "Corporate Travel Deals", link: "https://example.com/corporate-travel" },
      { id: 3, name: "Higher Credit Limits for Business Owners", link: "https://example.com/insurance" },
    ],
    5: [
      { id: 1, name: "Best Flight Deals", link: "https://example.com/flight-deals" },
      { id: 2, name: "Travel Insurance Plans", link: "https://example.com/travel-insurance" },
      { id: 3, name: "Complimentary Travel Insurance", link: "https://example.com/insurance" },
    ],
    6: [
      { id: 1, name: "Cashback on Grocery Purchases", link: "https://example.com/grocery-cashback" },
      { id: 2, name: "Fuel Savings", link: "https://example.com/fuel-savings" },
      { id: 3, name: "Dining & Entertainment Cashback Offers", link: "https://example.com/insurance" },
    ],
    7: [
      { id: 1, name: "Student Loan Assistance", link: "https://example.com/student-loans" },
      { id: 2, name: "Discounted Online Courses", link: "https://example.com/online-courses" },
      { id: 3, name: "Zero Annual Fees for Students", link: "https://example.com/insurance" },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-700 text-white">
      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 bg-gray-900 p-2 rounded-lg shadow-md text-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Profile Button */}
      <div className="absolute top-4 right-4">
        <div
          className="relative"
          onMouseEnter={() => setShowLogout(true)}
          onMouseLeave={() => setShowLogout(false)}
        >
          {/* Profile Icon */}
          <button className="bg-gray-800 p-2 rounded-full">
            <User size={24} />
          </button>

          {/* Logout Button (Dropdown) */}
          <AnimatePresence>
            {showLogout && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-1 bg-gray-800 text-white p-2 rounded-md shadow-lg"
              >
                <button onClick={onLogout} className="px-4 py-2 w-full text-left">Logout</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "easeInOut", duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-64 bg-gray-900 p-4 shadow-lg z-40"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Credit Cards</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1 bg-gray-700 text-white rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* Credit Card List */}
            <ul>
              {creditCards.map((card) => (
                <li
                  key={card.id}
                  className={`p-2 mb-2 rounded-lg cursor-pointer transition ${selectedCard === card.id ? "bg-blue-500 text-white" : "bg-gray-800"
                    }`}
                  onClick={() => {
                    setSelectedCard(card.id);
                    if (window.innerWidth < 1024) setIsSidebarOpen(false); // Auto-close sidebar on mobile
                  }}
                >
                  {card.name}
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Page - Recommendations */}
      <main className={`flex-1 p-6 transition-all duration-500 ease-in-out ${isSidebarOpen ? "lg:ml-64" : "lg:ml-10"}`}>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Recommendations for {creditCards.find(c => c.id === selectedCard)?.name}
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recommendations[selectedCard].map((rec) => (
            <motion.div key={rec.id} whileHover={{ scale: 1.05 }} className="p-4 shadow-lg rounded-2xl bg-gray-900">
              <h2 className="text-xl font-semibold">{rec.name}</h2>
              <a href={rec.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">Learn More</button>
              </a>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home onLogout={() => setIsAuthenticated(false)} /> : <Login onLogin={setIsAuthenticated} />} />
        <Route path="/home" element={isAuthenticated ? <Home onLogout={() => setIsAuthenticated(false)} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
