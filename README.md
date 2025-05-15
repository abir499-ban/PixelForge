# Pixel Forge 

Pixel Forge is a powerful AI image generation platform that allows users to train custom image generation models using their own images via FAL-AI integration. With secure authentication, predefined image packs, and smooth workflows, Pixel Forge lets you generate high-quality, personalized AI-generated images with ease.

---

##  Features

- **Train Custom Models** – Upload your own images and let Pixel Forge train a unique AI model on FAL-AI.
- **Generate Images** – Use your trained model to generate stunning outputs in various styles.
- **Secure Authentication** – User login and access are protected with robust authentication mechanisms.
- **Predefined Packs** – Choose from curated generation packs for faster experimentation and results.
- **Webhook-Driven** – Asynchronous model training with real-time updates via FAL-AI webhooks.
- **Cloud-Based Storage** – Store inputs and generated outputs with scalable cloud storage.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js , Tailwind CSS
- **Backend**: Node.js, Express
- **Authentication**: Clerk 
- **Image Training & Generation**: [FAL.AI](https://fal.ai)
- **Database**: PostgreSQL (Neon)
- **SQL ORM** : Prisma
- **Validation** : Zod
- **Storage**: AWS S3 
- **Deployment**: Vercel & Render
- **Monorepo Management** : Turborepo

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm
- PostgreSQL (Neon or local)
- AWS S3 credentials
- Fal.AI account

### Setup

1. **Clone the repo**:

   ```bash
   git clone https://github.com/your-username/pixel-forge.git
   cd pixel-forge
2. **Install the global dependecny**
     ```bash
       npm i
3. **Setting up the client server**

   ```bash
   cd apps/web
   npm i
        
  create a .env.local file and create these environment variables:
  ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    JWKS_AUTH_KEY=
    JWKS_URL=
```
  Starting the server:
  ```sh
      npm run dev
  ```

4. **Setting up the backend server**
   ```bash
   cd apps/backend
   npm i
        
  create a .env file and create these environment variables:
  ```bash
    FAL_KEY=your_fal_ai_credentials
    BASE_WEBHOOK_URL=url_that_will_be_hit_by_fal_ai_webhooks
```
  Starting the server:
  ```sh
      npm run start
  ```

5.Setting up shared packages:
  ```sh
      cd packages/db
      npm i
  ```
```sh
    cd packages/common
    npm i
```


--------------------------------------------------------
Please STAR ⭐ it you like it.

    
