# 🚀 Training Course: MkDocs + Slidev Integration

This repository contains a **hands-on data course** using **Slidev for presentations** and **MkDocs for documentation**.  
It also includes **deployment instructions** to GitHub Pages.

---

## 📌 Project Structure

```
trainingrepo/
├── docs/              # MkDocs documentation
│   ├── index.md       # Main documentation page (Embeds slides)
│   ├── tutorial.md    # Step-by-step tutorial content
│   ├── slides/        # Slidev's exported static files (after build)
│       ├── index.html # Entry point for the slides
├── slides/            # Slidev presentation source
│   ├── slides.md      # Markdown-based presentation
│   ├── package.json   # Dependencies
│   ├── vite.config.ts # Vite config for GitHub Pages
│   ├── node_modules/  # Installed dependencies
├── mkdocs.yml         # MkDocs configuration
├── requirements.txt   # Python dependencies
└── venv/              # Python virtual environment (for MkDocs)
```

---

## 🚀 **Getting Started**

### **1️⃣ Install Dependencies**
#### **Python (For MkDocs)**
```bash
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

#### **Node.js (For Slidev)**
```bash
cd slides
npm install
```

---

## 🎤 **Working with Slidev (Presentation)**

### **🖊️ Editing Slides**
- Modify `slides/slides.md` using Markdown.
- Use Slidev’s built-in **features** like animations, transitions, and Vue components.

### **💻 Previewing Slides Locally**
```bash
cd slides
npx slidev
```
📌 The slides will be available at **`http://localhost:3030`**.

### **📦 Building Slides for Deployment**
Once the slides are ready:
```bash
cd slides
npx slidev build
mv dist ../docs/slides
```
📌 This **exports the slides as static HTML** inside `docs/slides/` so MkDocs can serve them.

---

## 📖 **Working with MkDocs (Documentation)**

### **📝 Editing Documentation**
- Modify `docs/index.md` to **embed the slides**:
  ```md
  <iframe src="slides/index.html" width="100%" height="600px"></iframe>
  ```
- Write step-by-step guides inside `docs/tutorial.md`.

### **🖥️ Previewing MkDocs Locally**
```bash
mkdocs serve
```
📌 The documentation will be available at **`http://127.0.0.1:8000/`**.

---

## 🌍 **Deploying to GitHub Pages**
Once everything is working **locally**, deploy:
```bash
mkdocs gh-deploy
```
📌 Your **MkDocs site (including slides)** will be updated on GitHub Pages.

---

## 🔗 **Useful Commands Reference**
| Task                     | Command |
|--------------------------|-----------------------------|
| Activate Python venv     | `source venv/bin/activate` |
| Install MkDocs           | `pip install mkdocs-material` |
| Start MkDocs locally     | `mkdocs serve` |
| Deploy MkDocs to GitHub  | `mkdocs gh-deploy` |
| Start Slidev locally     | `npx slidev` |
| Build Slidev for MkDocs  | `npx slidev build && mv dist ../docs/slides` |

---

## 💡 **Troubleshooting**
### **Slides Not Showing in MkDocs?**
- Ensure the slides are built:
  ```bash
  cd slides
  npx slidev build
  mv dist ../docs/slides
  ```
- Restart MkDocs:
  ```bash
  mkdocs serve
  ```
- If embedding fails, **link directly** in `docs/index.md`:
  ```md
  👉 [View the Slides](slides/index.html)
  ```

### **GitHub Pages Not Updating?**
- Ensure you're in the root folder and run:
  ```bash
  mkdocs gh-deploy
  ```

---

## 🛠️ **Contributing**
Feel free to contribute by improving slides (`slides/slides.md`) or updating documentation (`docs/`).

🚀 **Enjoy learning and happy coding!** 🎉
# ai-readiness-course
