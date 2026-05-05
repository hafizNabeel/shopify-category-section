# AI Photo Restoration & Enhancement App

This repository contains a production-ready starter for an **AI Photo Restoration & Enhancement** mobile application built with **Angular + Ionic** and a **Django REST** backend. The system is fully self-hosted (no paid AI APIs) and designed for extensibility toward more advanced AI models such as GFPGAN, CodeFormer, Real-ESRGAN, and DeOldify.

## Repo Structure

```
mobile-app/   # Ionic + Angular front-end
backend/      # Django REST backend with image processing
```

## Features

- Restore old photos (`/ai/restore/`)
- Remove background (`/ai/remove-bg/`)
- Colorize black & white (placeholder for now) (`/ai/colorize/`)
- Light up image (`/ai/lightup/`)
- Color tuning (`/ai/color-tune/`)
- Dehaze (`/ai/dehaze/`)

## Quick Start

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

### Mobile App

```bash
cd mobile-app
npm install
ionic serve
```

## Notes

- The backend saves processed files under `backend/media/` and serves them at `/media/`.
- The mobile app uses NgRx for async processing and routes to the correct backend endpoint based on the selected feature.

## Roadmap

- Integrate GFPGAN/CodeFormer/Real-ESRGAN for true restoration.
- Add background jobs (Celery) for heavy processing.
- Add authentication for production use.
