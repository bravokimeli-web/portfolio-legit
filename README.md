# Alex Johnson - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, professional design, and optimized performance.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Smooth Animations**: Beautiful transitions and scroll-triggered animations
- **Professional Layout**: Clean, modern design with sections for About, Skills, Projects, and Contact
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized build with Vite for lightning-fast performance

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer component
│   ├── App.tsx             # Main application
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/
│   ├── favicon.svg         # Site favicon
│   └── images/             # Portfolio images
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Personal Information

Update the following files to customize with your information:

- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/About.tsx` - Update bio and statistics
- `src/components/Skills.tsx` - Update skills and proficiency levels
- `src/components/Projects.tsx` - Update project information
- `src/components/Contact.tsx` - Update contact information
- `src/components/Navbar.tsx` - Update name in navigation

### Images

Replace the images in `public/images/` with your own:

- `profile.jpg` - Your professional headshot
- `hero-bg.jpg` - Hero section background
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots

### Styling

- Colors and styling can be customized in the component files
- Global styles are in `src/index.css`
- Tailwind CSS classes are used throughout for styling

## 📱 Sections

### Hero Section
- Eye-catching introduction with background image
- Social media links
- Call-to-action button

### About Section
- Personal introduction
- Key statistics
- Professional photo

### Skills Section
- Technical skills with animated progress bars
- Organized by categories (Frontend, Backend, Tools)

### Projects Section
- Featured projects showcase
- Project images, descriptions, and tech stacks
- Links to live demos and GitHub repositories

### Contact Section
- Contact information
- Contact form with validation
- Social media links

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

The project is configured for deployment on Vercel, but can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your hosting service

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, TypeScript, and Tailwind CSS