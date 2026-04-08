# Enmanuel Nava - Professional Developer Portfolio 🚀

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Architecture](https://img.shields.io/badge/architecture-Hexagonal-success?style=for-the-badge)

A modern, highly performant, and scalable portfolio web application built with **React, TypeScript, and Vite**. 

This project was recently refactored to implement a strict **Hexagonal Architecture (Feature-Sliced)**, ensuring a robust separation of concerns, maintainability, and enterprise-level codebase quality.

---

## 🏗 Architecture Review

This project enforces a clean architectural boundary separating the UI from the business logic and external services. The `src/` directory is divided into 4 strict layers:

### 1. `domain/` (The Core)
Contains pure business logic and interfaces. It has absolute zero knowledge of React or external libraries.
- Pure utility functions (like age calculation).
- Interfaces and Data Models (`Project.ts`, `Github.ts`).

### 2. `infrastructure/` (The Outside World)
Handles all external communications, APIs, and data sources.
- **GitHub API Integration:** Isolated data-fetching logic (`githubApi.ts`).
- **Static Data:** Project listings and hardcoded records.

### 3. `application/` (The Orchestrator)
The bridge between Infrastructure and UI.
- Custom Hooks (`useGitHubLanguages.ts`).
- Orchestrates state management, loading states, and error handling.

### 4. `ui/` (The Presentation)
Responsible only for rendering data and catching user events. No business or fetch logic is allowed here.
- Built using the **Container / Presentational** pattern.
- Strict path aliases configured (`@/...` imports) to avoid fragile relative paths.

---

## ✨ Key Features

- **Hexagonal Architecture:** Future-proof, highly decoupled codebase.
- **Dynamic Theming:** Seamless Dark and Light mode toggling logic.
- **Live GitHub Integration:** Dynamically fetches and parses the programming languages used in the listed projects directly from GitHub's REST API.
- **Container/Presentational Pattern:** `RepoLanguages` handles the state subscription, while `GitHubLanguagesBar` strictly draws the visual bars.
- **Google Analytics 4 (GA4):** Intelligent interaction tracking mapped to custom events inside the application.
- **EmailJS Integration:** Working contact form without needing a dedicated backend.
- **Framer Motion Animations:** Smooth, viewport-triggered scroll animations.

---

## 🛠 Tech Stack

**Core:**
- React 18
- TypeScript (Strict Mode)
- Vite (SWC Compiler)

**Styling & UI:**
- React Bootstrap
- Vanilla CSS with custom utility classes (`styles.css`)
- Framer Motion (Animations)
- React Icons

**Integrations:**
- Axios (HTTP Client)
- React GA4 (Analytics)
- EmailJS Browser (Contact Form)

---

## 📂 Project Structure

```text
src/
├── domain/            # 🧠 Layer 1: Core Domain Rules & Models
├── infrastructure/    # 🔌 Layer 2: Apis and Data Adapters
├── application/       # 🔗 Layer 3: Application Hooks & State
└── ui/                # 🎨 Layer 4: React Components, Styles, Theme
```

### 🛣️ Path Aliases
To avoid messy relative imports (e.g., `../../../domain`), this project uses fully configured absolute paths mapping directly to the architectural layers:
```typescript
import { Type } from "@/domain/..."
import { Service } from "@/infrastructure/..."
import { Hook } from "@/application/..."
import { Component } from "@/ui/..."
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have Node.js installed (v18+ recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/end1996/PortfolioReact.git
   cd PortfolioReact
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Enmanuel Nava**  
FullStack Developer | Software Engineering Student
- [LinkedIn Profile](https://www.linkedin.com/in/enmanuel-nava-dev/)
- [GitHub Profile](https://github.com/end1996)

---
*If you find this architectural setup useful, feel free to use it as a reference for your own React projects!*
