# My Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- Responsive design for all screen sizes
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Authentication with Firebase (Email/Password, Google, GitHub)
- Blog section with content management
- Portfolio showcase
- Contact form

## 📋 Pages

- **Home**: Introduction, skills, and about section
- **Portfolio**: Showcase of projects with filtering
- **Blog**: Blog posts with categories and search
- **Login**: Authentication page for admin access

## 🔧 Technologies

- React 19
- TypeScript
- Tailwind CSS
- Firebase (Authentication, Firestore, Storage)
- React Router
- Vite with SWC

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables (see [EnvironmentVariables.md](./EnvironmentVariables.md))

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for production

```bash
npm run build
# or
yarn build
```

## 🔍 Project Structure

```
my-portfolio/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # Reusable components
│   ├── contexts/      # Context providers
│   ├── hooks/         # Custom hooks
│   ├── pages/         # Main page components
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Entry point
├── .env.local         # Environment variables (create this file)
└── ...                # Configuration files
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For any questions or suggestions, please feel free to reach out:

- Email: your.email@example.com
- GitHub: [Your GitHub Username](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)
