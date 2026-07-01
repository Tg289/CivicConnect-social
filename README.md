# 🚀 CivicConnect-Social

<p align="center">
  <img src="./screenshots/01-hero.png" alt="CivicConnect-Social Hero Banner" width="100%"/>
</p>

<h3 align="center">
A Full-Stack Social Networking Platform with Analytics and Community Engagement
</h3>

<p align="center">

<img src="https://img.shields.io/badge/Next.js-15-black"/>
<img src="https://img.shields.io/badge/TypeScript-blue"/>
<img src="https://img.shields.io/badge/PostgreSQL-green"/>
<img src="https://img.shields.io/badge/Prisma-ORM-purple"/>
<img src="https://img.shields.io/badge/TailwindCSS-38B2AC"/>

</p>


# 📌 Overview

**CivicConnect-Social** is a modern full-stack social networking platform designed to connect users, encourage community interaction, and provide meaningful engagement through posts, comments, likes, and activity tracking.

The project focuses on building a scalable production-ready architecture using modern web technologies with secure authentication, optimized database management, and modular backend services.

## Key Goals

- Scalable application architecture
- Secure user interactions
- Clean and maintainable codebase
- Efficient database management
- Responsive user experience


---

# 🚨 Problem Statement

Traditional social platforms mainly focus on content sharing but often lack structured community engagement and analytics.

CivicConnect-Social addresses:

- Limited visibility into user engagement
- Poor community interaction structure
- Lack of analytics-driven insights
- Difficulty scaling monolithic applications


The platform provides a structured ecosystem where users can create content, interact with communities, and monitor engagement activities.


---

# ✨ Features


## 🔐 Authentication & User Management

- Secure authentication system
- User registration and login
- Profile management
- Protected routes
- User validation

## 📝 Social Feed

- Create posts
- View community content
- Like posts
- Comment system
- Dynamic feed rendering

## 💬 Community Engagement

- User interactions
- Social discussions
- Post engagement workflow
- Community-driven content

## 📊 Analytics System

- Activity tracking
- User engagement metrics
- Platform insights
- Data-driven analysis


## 🔒 Security

- Environment based configuration
- Server-side operations
- Secure database access
- Type-safe backend implementation

---
# 📸 Application Screenshots

## 🔑 Authentication

### Login

<img src="./screenshots/02-login.png" width="100%"/>

### Register

<img src="./screenshots/03-register.png" width="100%"/>

---
## 🏠 Social Feed

<img src="./screenshots/04-feed.png" width="100%"/>


Features demonstrated:

- Posts
- Community content
- User interactions
- Feed experience


---


## 👤 User Account & Profile

<img src="./screenshots/05-profile.png" width="100%"/>

Features:

- Profile management
- User information
- Account activity

---


## ❤️ Posts, Likes & Comments

<img src="./screenshots/06-activities.png" width="100%"/>

Features:
- Likes
- Comments
- Social interactions
- Engagement tracking

# 🛠 Tech Stack

## Frontend
- Next.js
- TypeScript
- React
- Tailwind CSS

## Backend

- Next.js Server Components
- API Routes
- Server Actions
- Prisma ORM

## Database
- PostgreSQL

## Tools

- Git
- GitHub
- Vercel
---

# 🏗 System Architecture


```
                Client Browser

                     |

              Next.js Application

                     |

    -----------------------------------

    UI Components

    API Routes

    Server Actions

    Business Services

    -----------------------------------

                     |

                Prisma ORM

                     |

              PostgreSQL Database

```


## Architecture Principles

- Modular architecture
- Separation of concerns
- Reusable components
- Service-based backend
- Type-safe database communication


---

# 📂 Project Structure

civicconnect-social/

│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── public/
│
├── screenshots/
│   ├── 01-hero.png
│   ├── 02-login.png
│   ├── 03-register.png
│   ├── 04-feed.png
│   ├── 05-profile.png
│   └── 06-activities.png
│
├── src/
│
│   ├── app/
│   │   ├── api/
│   │   ├── feed/
│   │   ├── profile/
│   │   └── dashboard/
│
│   ├── components/
│
│   ├── services/
│   │   ├── user/
│   │   ├── posts/
│   │   └── analytics/
│
│   ├── lib/
│   │   ├── prisma/
│   │   ├── auth/
│   │   └── utils/
│
│   └── types/
│
├── package.json
└── README.md

---

# 🗄 Database Design

The application uses PostgreSQL with Prisma ORM.

## Main Entities

### User

Stores:

- User profile information
- Authentication data
- Account details

### Post

Stores:

- User posts
- Content information
- Engagement data

### Comment

Stores:

- Discussions
- User interactions

### Like

Tracks:

- User engagement
- Content popularity

### Analytics

Stores:

- Activity metrics
- Platform insights

## Relationships

User

 |

 |---- Posts

 |

 |---- Comments

 |

 |---- Likes

 |

 |---- Analytics

---

# 🔐 Environment Setup


Create `.env` file:
DATABASE_URL="your_database_url"
NEXTAUTH_SECRET="your_secret"
NEXTAUTH_URL="http://localhost:3000"

---

# ⚙️ Installation & Setup
Install dependencies:
npm install

Generate Prisma Client:
npx prisma generate

Run development server:
npm run dev

# 🚀 Deployment
The application is deployed using Vercel.

Live Demo:
https://civic-connect-social-gqg7.vercel.app
---

# 👨‍💻 Developer
Built with ❤️ while exploring full-stack development, scalable architecture, and modern web technologies.

# 📄 License
This project is developed for learning, portfolio, and demonstration purposes.
