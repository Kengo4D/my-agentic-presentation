# Strategic Intelligence Presentation System (Nuxt 4 Optimized)

A high-fidelity, professional presentation orchestrator built with **Nuxt 4**, **Tailwind CSS**, and **Pinia**. This system is specifically engineered to generate "System of Action" slide decks optimized for LinkedIn carousel posts and executive reports.

## 🚀 Key Features

* **Nuxt 4 Architecture**: Leverages the latest `app/` directory structure and enhanced type safety.
* **PDF-First Design**: Layouts are strategically stabilized to ensure zero content clipping during PDF export.
* **Dynamic Data Driven**: Slides are managed via a centralized JSON structure (`slides.json`) and a global Pinia store.
* **High-End Typography**: Uses italicized, uppercase, and tracked typography for a "Strategic Transformation" aesthetic.

## ⚠️ Important Implementation Note (Please Read)

### Web View vs. PDF Output
> [!IMPORTANT]  
> **Layout Behavior**: You may notice that certain long titles or complex data grids appear "clipped" or "overflowed" when viewing the slides in a standard web browser.
> 
> **The Reason**: This is an intentional design choice. The CSS and Flexbox logic are optimized for **PDF Rendering (Print Mode)** to ensure every piece of evidence and data is perfectly captured in the final document.
> 
> **The Solution**: 
> * Do not attempt to "fix" the web-view overflow by adding `h-full` or `overflow-hidden` to the containers, as this will break the PDF export.
> * To see the complete, unclipped content, open the browser's print dialog (**Ctrl + P** / **Cmd + P**) or run the automated PDF generation script. The print engine will automatically re-calculate the heights to ensure 100% visibility of all strategic data.

## 🛠 Tech Stack

* **Framework**: Nuxt 4
* **State Management**: Pinia
* **Styling**: Tailwind CSS
* **Export**: Playwright / Browser Print Engine

## 📂 Project Structure (Nuxt 4)

* `app/components/slides/`: Modular slide layouts (Hero, Main, Graph, Summary, etc.).
* `app/stores/`: Pinia store handling navigation and data initialization.
* `app/assets/data/`: Centralized JSON content.
* `app/types/`: TypeScript interfaces ensuring data consistency across the Nuxt 4 app.

## 📥 Installation & Usage

1. **Install dependencies**:
   ```bash
   pnpm install
