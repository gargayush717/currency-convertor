# Currency Convertor

A simple and responsive **React** application that converts currencies in real-time using a public API. Built with **Vite** and styled with **Bootstrap** for a clean and user-friendly interface.

## 🚀 Features

- Convert currency amounts between different currencies
- Fetches live exchange rates from a currency API
- Responsive UI with Bootstrap styling
- Error handling for invalid inputs and API issues

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- Currency Exchange Rate API (via axios)

## 📁 Project Structure

currency-convertor/
├── public/
├── src/
│ ├── components/
│ │ ├── CurrencyConvertor.jsx
│ │ ├── CurrencyInput.jsx
│ │ └── ResultDisplay.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── App.css
├── package.json
├── vite.config.js
├── index.html
└── README.md

## 📦 Installation

1. Clone the repository:


git clone https://github.com/gargayush717/currency-convertor.git
cd currency-convertor
Install dependencies:

npm install
Start the development server:

npm run dev
Open your browser and go to http://localhost:5173 to use the app.

✍️ How to Use
Enter the amount you want to convert.

Select the source currency and the target currency from dropdowns.

See the converted amount updated in real-time.

Handles invalid inputs and API errors gracefully.

🙌 Contributions
Contributions are welcome! Feel free to fork the repo, add features or improvements, and submit a pull request.

📢 Note
This is a frontend-only project using an external API for currency exchange rates. No backend or database is involved.