# 🚀 Project Name

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
Our application is a highly personalized credit card recommendation system that leverages advanced clustering algorithms like K-Means and DBSCAN, combined with the Gemma 3 1B LLM, to generate valuable insights. Our application provides tailored credit card recommendations based on user profiles and spending behavior. With a plug-and-play architecture, it can be seamlessly deployed at any scale.

## 🎥 Demo
📹 [Video Demo](#) <br>
• https://github.com/ewfx/aidhp-i-prompt/blob/main/demo.webm) [Code demo]
• https://github.com/ewfx/aidhp-i-prompt/blob/main/UI%20demo.mp4 [UI demo]

📸 [Screenshots]
![image](https://github.com/user-attachments/assets/b9a8b362-875e-4324-b309-d4a0644b8005)

![image](https://github.com/user-attachments/assets/e8270293-a898-4358-bc5a-ba03419c8a40)



## 💡 Inspiration
Traditional credit card recommendation systems often fail to consider user-specific needs, leading to suboptimal suggestions. We wanted to bridge the gap by integrating AI-driven clustering with a powerful LLM to provide meaningful insights. Our aim was to create a scalable, intelligent, and data-driven solution that adapts to evolving customer preferences.

## ⚙️ What It Does
📊 User Profiling & Clustering – Utilizes K-Means & DBSCAN to cluster users based on their financial behavior.
🧠 LLM-Based Insights – Gemma 3 1B generates personalized insights based on user spending patterns.
🔄 Database CRUD Operations – A dedicated database service ensures efficient storage and retrieval of user data.
📡 Plug & Play Model – Can be easily integrated with existing banking infrastructures.

## 🛠️ How We Built It
Our application is designed as a scalable, plug-and-play model that seamlessly integrates multiple technologies. Below is an outline of the key frameworks, tools, and methodologies we used during development:

🔹 Frontend
• React.js – For building a dynamic and responsive user interface.
• Tailwind CSS – For modern and customizable styling.
• Framer Motion – For smooth animations and interactive UI elements.

🔹 Backend
• Python (Flask/FastAPI) – To handle API requests and manage business logic.

🔹 Database & CRUD Operations
• Dedicated Database Service – To manage Create, Read, Update, and Delete (CRUD) operations efficiently.

🔹 AI & Machine Learning
• K-Means & DBSCAN Clustering – To categorize users based on their spending patterns.
• Gemma 3B (1B LLM) – A locally hosted large language model (LLM) that generates insights and recommendations.
• Ollama – To run the LLM efficiently on local hardware.

🔹 User Authentication
• Local Storage-Based Authentication – We use a CSV file (user_credentials.csv) stored locally to manage user authentication.
• CSV Parsing with PapaParse – The CSV file is fetched, parsed, and verified against user inputs for a secure and efficient login system.

## 🚧 Challenges We Faced
LLM Integration: Ensuring smooth and real-time interaction between the LLM and recommendation system.
Generating Accurate Synthetic Data – Creating realistic synthetic user transaction data for testing and model training.
Integrating All Services – Ensuring seamless communication between the clustering models, LLM, database service, and frontend.

## 🏃 How to Run
Follow these steps to set up and run the application:

1. Clone the repository  
   ```sh
   git clone https://github.com/ewfx/aidhp-i-prompt.git
   cd aidhp-i-prompt/code/src
   ```
2. Install Frontend Dependencies 
   ```sh
   npm install
   ```
3. Start the Frontend
   ```sh
   npm start
   ```
4. Start the Backend Service
   ```sh
   python app.py
   ```
5. Set Up and Run the LLM Model
   ```sh
   ollama pull gemma3:1b
   export OLLAMA_HOST="http://localhost:11444"
   ollama serve
   ```

## 🏗️ Tech Stack
- 🔹 Frontend: React / Tailwind CSS
- 🔹 Backend: Python(Flask / Fast API)
- 🔹 Database: MySQL
- 🔹 Other: Ollama

## 👥 Team
- **Manoj M Mallya** - [GitHub](https://github.com/mixed-farming) | [LinkedIn](https://www.linkedin.com/in/manoj-m-mallya-75503620a/) [Team Captain]
- **Jyoti Suman Sahoo** - [GitHub](https://github.com/JyotiSuman09) | [LinkedIn](https://www.linkedin.com/in/jyotisuman09/)
- **Sidharth Deepesh** - [GitHub](https://github.com/SIDHARTH06) | [LinkedIn](https://www.linkedin.com/in/sidharth-deepesh-05b960200/)
- **Manas Jain** - [GitHub](https://github.com/mannmj) | [LinkedIn](https://www.linkedin.com/in/mannmj/)
- **Adil Ahmed** - [GitHub](https://github.com/Adil-Bub) | [LinkedIn](https://www.linkedin.com/in/adilbub/)
