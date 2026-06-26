# AI/ML & Full-Stack Developer Portfolio

Welcome to my personal portfolio codebase. This is a responsive, highly polished single-page application (SPA) built using React, Vite, Tailwind CSS, and Framer Motion. It acts as a showcase of my technical case studies, core competencies, credentials, and academic background.

Live Site: [abhiram-alpha.vercel.app](https://abhiram-alpha.vercel.app/)

---

## 🚀 Key Features

* **Recruiter Filter System**: An interactive role-matching selector on the Home page that displays custom targeted summaries depending on the recruiter's focus (AI/ML Specialist, Full Stack Developer, QA & Software Engineer).
* **Interactive AI Brain Canvas**: A custom HTML5 Canvas particle system that renders interactive, cursor-attracted node networks (glowing from indigo to cyan near hover points).
* **Dynamic Spotlight Glow Cards**: Glassmorphic cards with custom mouse-hover gradient tracking borders and backgrounds.
* **Responsive Category Selector & Tabs**: Single-row horizontal scroll navigation pills for project categories and tech stacks, optimized to prevent layout wrapping on mobile screen ratios.
* **Credentials Verifier**: Interactive verifier drawers on the Resume page that verify Coursera and certification credentials against verification links and IDs.
* **Mobile-First Responsive Layout**: Stackable grid flows (diagrams align horizontally on desktop and stack vertically on mobile feeds) and optimized viewports for iPhone SE up to high-end PCs.
* **Automatic Scroll Restoration**: Integrated route listener that resets scroll positions to the top of the page on route change.

---

## 🛠️ Technology Stack

* **Frontend Framework**: React 18+ (functional components with hooks)
* **Build Tool & Bundler**: Vite (lightning fast hot module replacement)
* **Styling & Theme**: Tailwind CSS (obsidian dark-mode palette, custom glassmorphism utilities)
* **Animation Engine**: Framer Motion (page-entry transitions, tab indicator slides, credential drawer collapses)
* **Iconography**: Lucide React

---

## 📂 Technical Case Studies Included

1. **Zero-Day Intrusion Detection System**
   * *Domain*: AI/ML & Cyber Security
   * *Stack*: PyTorch, FastAPI, Redis, Docker
   * *Highlights*: Attention-based LSTM Autoencoder scoring packet anomaly thresholds, async Redis ingestion, edge containerization.
2. **Railway Object Intrusion Detector**
   * *Domain*: Computer Vision
   * *Stack*: YOLO, OpenCV, Python, PyTorch
   * *Highlights*: Custom YOLO obstacle detection on railway tracks, CLAHE dynamic contrast light corrections, inter-frame camera noise filters.
3. **Credit Card Approval Predictor**
   * *Domain*: Data Science
   * *Stack*: Scikit-learn, Pandas, Imbalanced-Learn, Seaborn
   * *Highlights*: Pipeline transformations, SMOTE resamplers to balance financial classes, classifier model weight exports (.pkl).
4. **Hostel Management System**
   * *Domain*: Full-Stack Development
   * *Stack*: Python, Django, SQLite, Tailwind CSS
   * *Highlights*: Relational DB mapping, role-based access controls (RBAC), automatic room allocation scripts, async JavaScript fetch integrations.

---

## 💻 Local Setup & Development

To run this project locally, ensure you have Node.js installed.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbhiR4mRs/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

4. **Compile the production bundle**:
   ```bash
   npm run build
   ```
   The compiled assets will be built into the `/dist` directory, ready to be deployed to Vercel, Netlify, or any static hosting provider.
