# React E-Commerce API Integration

A real-world e-commerce frontend built with React, focusing on API integration, state management, and user experience.

## 🛠 Tech Stack
* **Frontend**: React (Functional Components & Hooks)
* **Styling**: Tailwind CSS
* **API**: [FakeStoreAPI](https://fakestoreapi.com/)
* **Icons/Fonts**: Inter Font Family

## ✨ Features Implemented
* **Product Listing**: Fetches and displays products with image, title, price, and rating.
* **Search**: Real-time search products by name.
* **Filtering**: Filter products by category.
* **Product Details**: Interactive Modal showing full product description and details.
* **State Management**: Robust handling of Loading, Error, and Empty Result states.
* **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.

## 🚀 Setup Instructions
1. Clone the repository: `git clone <https://github.com/Parvez1849/e-commerce.git>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## 📝 Assumptions & Trade-offs
* Used **FakeStoreAPI** as the primary data source as it provides comprehensive product objects (rating, category, etc.).
* Chosen **Modal** over separate pages for Product Details to provide a faster, seamless browsing experience without full page reloads.
* Used **Tailwind CSS** for rapid UI development and to ensure a clean, modern e-commerce aesthetic.