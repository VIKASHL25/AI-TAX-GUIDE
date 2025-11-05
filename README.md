# AI-TAX-GUIDE

Professional, easy-to-follow tax guidance application combining a React + Vite frontend, an Express.js backend (Postgres), and experimental LLM tooling for model development and inference.

## About

AI-TAX-GUIDE is a full-stack mini project that helps users calculate and understand tax liabilities using a clean UI and a backend API. The repository also contains LLM notebooks (data and training/endpoint code) used for experimenting with tax-oriented language models and fine-tuning workflows.

This README documents how to run the application locally, where to find code, and how to work with the LLM assets in `LLM/`.

## Features

- User authentication (register / login) via backend endpoints
- Tax calculation pages and explanatory tax guide content in the frontend
- Postgres-backed backend (connection helper at `backend/src/config/pgDB.js`)
- LLM experiments and dataset in `LLM/` (notebooks + JSONL dataset)

## Repository structure

- `backend/` — Express API and database integration
	- `src/index.js` — app entrypoint
	- `src/routes/` — API routes (e.g. auth)
	- `src/config/pgDB.js` — Postgres connection helper
- `frontend/` — React + Vite application (UI)
- `LLM/` — Jupyter notebooks and dataset for model training/fine-tuning
- `website_images/` — screenshots used in the repo

## Tech stack

- Frontend: React, Vite, Tailwind (styles), React Router
- Backend: Node.js, Express, pg (Postgres client), dotenv
- Data / LLM: Jupyter notebooks (.ipynb), dataset in JSONL

## Quick start (local development)

Notes: these steps assume you have Node.js (v18+ recommended), npm, and Postgres installed. Commands below are shown for Windows PowerShell.

1) Clone repository

```powershell
git clone https://github.com/VIKASHL25/AI-TAX-GUIDE.git
cd "AI-TAX-GUIDE"
```

2) Backend setup

Install dependencies and start the Express server from the `backend` folder. The backend entrypoint is `backend/src/index.js` and it uses `dotenv` for configuration.

```powershell
cd backend
npm install
# start server with node (or use nodemon in development if you prefer)
node src/index.js
```

By default the server in the repository starts on port `3000` (see `backend/src/index.js`). The server expects a Postgres database configured via environment variables (see the Environment variables section below).

3) Frontend setup

Open a new terminal and start the Vite dev server from `frontend`:

```powershell
cd frontend
npm install
npm run dev
```

The frontend uses Vite's default dev server. The UI will typically be available at `http://localhost:5173` (Vite will print the exact URL).

4) Postgres database

Create a Postgres database and provide the connection information to the backend via environment variables. If you prefer a local DB, create a database named e.g. `ai_tax_guide` and a user with appropriate privileges.

## Environment variables

Place a `.env` file in `backend/` with at least the following values (example):

```
# Postgres
PGHOST=localhost
PGPORT=5432
PGUSER=your_db_user
PGPASSWORD=your_db_password
PGDATABASE=ai_tax_guide

# CORS origin allowed by the backend (frontend dev URL)
CORS_ORIGIN_URL=http://localhost:5173

# Optional: JWT secret if auth uses JWT
JWT_SECRET=replace_with_a_strong_secret

```

The backend uses `dotenv` to load these values (see `backend/src/index.js`).

## LLM & data (notebooks)

The `LLM/` directory contains notebooks and a dataset (`tax_dataset.jsonl`) used for experimenting with language models and fine-tuning. Typical workflow:

- Open the notebooks in Jupyter or VS Code Jupyter extension.
- Create a Python environment (venv or conda) and install required packages (transformers, datasets, openai, etc.) depending on the notebook.
- Use the notebooks for dataset inspection, preprocessing, fine-tune experiments, and endpoint demo code.


## Login Page
![LOGIN PAGE](/website_images/login.jpeg)
## Register Page
![REGISTER PAGE](/website_images/register.jpeg)
## Home Page
![HOME PAGE](/website_images/home.jpeg)
![](/website_images/test1.jpeg)
![](/website_images/test2.jpeg)
![](/website_images/test3.jpeg)





