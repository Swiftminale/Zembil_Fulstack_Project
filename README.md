Here's the updated `README.md` with the license section adjusted:

---

# Zembil Admin

Zembil Admin is a web-based admin panel built using Next.js, React, and various modern technologies. This application provides a robust platform for managing backend services, databases, and user interactions.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [License](#license)

## Features
- User authentication and management with Clerk
- Integration with MongoDB using Mongoose
- Responsive design with Tailwind CSS
- Notifications with React Hot Toast
- Form handling with React Hook Form
- Table components with TanStack React Table
- Cloudinary integration for image management
- Modular and reusable component architecture

## Technologies
- **Next.js**: Framework for React apps with server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **Mongoose**: ODM for MongoDB.
- **Clerk**: Authentication and user management.

## Getting Started

### Prerequisites
- **Node.js** (v18 or above)
- **npm** (v7 or above)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zembil_admin.git
   cd zembil_admin
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root of your project.
   - Add your environment-specific variables like database URL, API keys, etc.

### Running the Application
To start the development server, run:
```bash
npm run dev
```

To build the application for production, run:
```bash
npm run build
```

To start the production server, run:
```bash
npm run start
```

To lint the code, run:
```bash
npm run lint
```

## Scripts
- **`npm run dev`**: Starts the Next.js development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Runs the Next.js production server.
- **`npm run lint`**: Lints the project using ESLint.

## Dependencies
- Various packages used for authentication, form handling, UI components, database management, and more. Refer to the `package.json` file for a complete list.

## DevDependencies
- Development tools including TypeScript, ESLint, and Tailwind CSS configurations. Refer to the `package.json` file for details.

## License
Licensed under Minale Fetene.

---
