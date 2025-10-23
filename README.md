# Legacy Horizons

Urban, upbeat activewear catalog built with React + Vite + TypeScript + Tailwind CSS.

Quick start (Windows PowerShell):

```powershell
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

Notes:
- The project uses an in-memory service to serve products from `src/services/itemService.ts`.
- Replace placeholder images in `src/services/itemService.ts` with real assets as needed.
 - The project uses an in-memory service to serve products from `src/services/itemService.ts`.
 - Local images are stored in the `Images/` folder and referenced by the service. Replace them with your assets if needed.

Cart & verification:

1. Install dependencies and start the dev server (Command Prompt recommended if PowerShell blocks scripts):

```cmd
cd /d "C:\Users\alllu\OneDrive\Documents\School\New folder (2)\online"
npm install
npm run dev
```

2. Open the URL printed by Vite (usually http://localhost:5173). The catalog shows items and a Cart summary on the right for desktop.

3. Use the quantity pickers to add items — totals update live and persist across the page since a Cart context stores quantities.
