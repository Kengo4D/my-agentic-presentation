# Strategic Intelligence Presentation System (Nuxt 4 Optimized)

A high-fidelity, professional presentation orchestrator built with **Nuxt 4**, **Tailwind CSS**, and **Pinia**. This system is specifically engineered to generate "System of Action" slide decks and professional reports with pixel-perfect accuracy for high-stakes business environments.

## 🚀 Key Features

* **Nuxt 4 Architecture**: Leverages the latest `app/` directory structure and enhanced type safety.

* **PDF-First Design**: Layouts are strategically stabilized to ensure zero content clipping during PDF export.

* **Universal Professional Use**: Ideal for executive briefings, investor pitches, strategic reports, and high-quality digital carousels.

* **Agentic AI Integration (Data Layer)**: While this repository focuses on the rendering engine, the core intelligence is driven by **Agentic AI (via OpenAI API)**, which architected the underlying data structure to bridge research and visualization.

* **Automated Publishing Pipeline**: Includes a headless browser automation script that captures, sequences, and merges all SPA states into a single consolidated PDF report.

## 🧠 The "Data-Driven" Logic

The heartbeat of this system lies in `app/assets/data/slides.json`. 

In our workflow, an **Agentic AI** was utilized to perform deep research and transform complex strategic insights into this specific JSON schema. The rendering engine then dynamically interprets this data to build the entire presentation. This separation of "intelligence" (AI) and "visualization" (Nuxt 4) ensures maximum flexibility and professional-grade output.

### ✨ Encourage Your Own Creation

We highly encourage you to **remix and experiment**! By modifying the `slides.json` with your own research or AI-generated data, you can instantly create your own high-fidelity slide show. Use this engine as your canvas to bring your unique strategic insights to life.

## ⚠️ Important Implementation Note (Please Read)

### Web View vs. PDF Output

> [!IMPORTANT]  
> **Layout Behavior**: You may notice that certain long titles or complex data grids appear "clipped" or "overflowed" when viewing the slides in a standard web browser.
> 
> **The Reason**: This is an intentional design choice. The CSS and Flexbox logic are optimized for **PDF Rendering (Print Mode)** to ensure every piece of evidence and data is perfectly captured in the final document.
> 
> **The Solution**: 
> * Do not attempt to "fix" the web-view overflow by adding `h-full` or `overflow-hidden` to the containers, as this will break the PDF export.
> * To see the complete, unclipped content, open the browser's print dialog (**Ctrl + P** / **Cmd + P**) or run the automated PDF generation script.

## 🛠 Tech Stack

* **Framework**: Nuxt 4

* **State Management**: Pinia

* **Styling**: Tailwind CSS

* **Intelligence**: OpenAI API (Agentic Workflow for data generation)

* **Automation Engine**: Playwright & pdf-lib (for professional PDF orchestration)

## 📂 Project Structure (Nuxt 4)

* `app/components/slides/`: Modular slide layouts.

* `app/assets/data/`: `slides.json` - The core data file you can customize.

* `app/stores/`: Pinia store handling navigation and data initialization.

* `app/types/`: TypeScript interfaces ensuring data consistency.

## 📥 Installation & Usage

1. **Install dependencies**:

   ```bash
   pnpm install

2. **Install PDF Automation dependencies**:
   This project requires Playwright and pdf-lib for the automated merging process.

   ```bash
   pnpm add -D playwright pdf-lib
   npx playwright install

3. **Run Development Server**:
   ```bash
   pnpm dev

4. **Run Production Build (Recommended for Clean PDF)**:
   To remove development overlays like Nuxt DevTools from your PDF, build and preview the production version:

   ```bash
   pnpm build
   pnpm preview

5. **Generate PDF**:

   Run the automated script while the server is running to capture the high-fidelity output. This will programmatically navigate all slides and merge them into a single file:

   ```bash
   node generate-pdf.mjs

## 📂 Project Structure (Nuxt 4)

* `app/components/slides/`: Modular slide layouts (Hero, Main, Graph, Summary, etc.).
* `app/assets/data/`: `slides.json` - The core data file you can customize.
* `app/stores/`: Pinia store handling navigation and data initialization.
* `app/types/`: TypeScript interfaces ensuring data consistency across the Nuxt 4 app.

## 📜 License

Internal Briefing / Proprietary - Strategic Intelligence Framework.
