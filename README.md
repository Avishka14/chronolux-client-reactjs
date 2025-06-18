# ChronoLux - Premium Watch Store

ChronoLux is a modern, responsive web application for discovering and shopping luxury watches. Built with React, Vite, and Tailwind CSS, ChronoLux offers a seamless and visually appealing user experience, allowing users to browse watches by category, brand, and gender, and explore the latest arrivals and exclusive offers.

---

## 🚀 Features

- **Component-Based Architecture:** Modular React components for maintainability and scalability.
- **Dynamic Product Rendering:** Watches and categories are rendered dynamically from data sources.
- **Reusable UI Elements:** Shared components like `Navbar`, `Footer`, and `WatchGrid` for consistent design.
- **Responsive Design:** Tailwind CSS ensures the app looks great on all devices.
- **Modern Navigation:** Clean navigation bar and category browsing.
- **Shop by Category & Gender:** Users can filter watches by type and gender.
- **Latest Arrivals & Offers:** Dedicated sections for new products and special deals.
- **Separation of Concerns:** Logical grouping of components and routes for clarity.
- **Material UI Icons:** Enhanced visuals with modern iconography.

---

## 🛠️ Tech Stack

- **React** – Frontend library for building user interfaces.
- **Vite** – Lightning-fast development environment and build tool.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **Material UI Icons** – Modern, scalable icons for React.
- **React Router** (recommended for future navigation improvements).

---

## 📁 Project Structure

```
src/
  components/
    footer/
    home_components/
    home_routes/
      route_components/
        Shop_Route/
  pages/
  assets/
public/
```

- **Reusable Components:** `Navbar`, `Footer`, `WatchGrid`, etc.
- **Route Components:** Organized under `home_routes/route_components` for clarity.
- **Data Management:** Product data imported from reusable modules.

---

## 📝 Key React Features Used

- **Functional Components:** All UI elements are built as functional components for simplicity and performance.
- **Props:** Data is passed between components using props, enabling reusability (e.g., `WatchGrid` receives `brand` as a prop).
- **Array Mapping:** Dynamic rendering of product lists using `.map()`.
- **Component Composition:** Complex pages are composed of smaller, focused components.
- **Conditional Rendering:** (Recommended for future enhancements, e.g., loading states, filtering).

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/chronolux-client.git
   cd chronolux-client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

---

## 📈 Future Improvements

- Integrate React Router for SPA navigation.
- Fetch product data from an API or backend.
- Add shopping cart and checkout functionality.
- Enhance accessibility and SEO.
- Implement user authentication and profile management.

---

## 📄 License

MIT

---

**Designed & Developed by Avishka Chamod**

- **Note** - This Repository Inculde Only Front-End Design wich is not Fully Completed yet.


