# 🚗 Car Rental Analytics Dashboard

A data-driven dashboard built with **Vite**, **React**, **Material UI**, and **Chart.js**, showcasing car rental price and vehicle performance trends over time.

---

## 📦 Features

- 📊 **Interactive Charts**:
  - Line chart for **price trends** over time.
  - Scatter plot for **horsepower vs range**.
  - Bar chart comparing **metrics by manufacturer**.

- 🔎 **Filters**:
  - Filter by **Company** and **Manufacturer**.
  - Filter by **Price Range** (Material Slider).
  - Filter by **Month Range** (Material Slider with month labels).

- 📋 **Responsive Table** with vehicle specs and metrics.

- ⚡️ **Fast Vite Dev Server** for optimal development speed.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Material UI
- **Data Visualization**: Chart.js with react-chartjs-2 and date-fns
- **Data Management**: TanStack React Query
- **Backend**: JSON Server (mock API)

---

## Project Structure

```
├── public/
├── src/
│   ├── assets/                  # Images, icons, and static files
│   ├── axios/                   # Axios instance and request configs
│   ├── components/              # Reusable UI components (charts, filters, sliders, etc.)
│   ├── context/                 # React context providers (e.g. filters)
│   ├── endpoints/               # API endpoint definitions
│   ├── types/                   # TypeScript type definitions and interfaces
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # Vite entry point
├── db.json               # Mock API data (cars, stats) for JSON Server
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation


# Clone the repo
```bash
git clone https://github.com/yourusername/analytics-dashboard.git
cd analytics-dashboard
```

# Install dependencies
```bash
npm install
```

# Start the JSON server
```bash
cd api
npx json-server --watch db.json --port 8080
```

# Start the Vite dev server
```bash
npm run dev
```

MIT © 2025 Emmanouil Smyrnakis
