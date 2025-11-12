## 📁 The `pages` Folder

Even though this project uses the **App Router** and follows the **Feature-Sliced Design (FSD)** architecture,  
the `pages` folder is intentionally kept — even if it’s empty.

### 🧩 Why it’s needed
- Some tools (like **Next.js**, **ESLint**, or **TypeScript**) may still expect the folder to exist.  
- Build or CI/CD configurations might reference `src/pages`.  
- Keeping it prevents build and deployment errors, especially when migrating between the `pages` and `app` routers.

### ⚠️ Important
Do **not** delete the `pages` folder — it’s required for compatibility and stability.