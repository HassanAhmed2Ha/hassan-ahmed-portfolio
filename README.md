# Hassan Ahmed – Open-Source Personal Portfolio Template

**Live Portfolio:** [https://hassan-ahmed-portfolio.vercel.app](https://hassan-ahmed-portfolio.vercel.app)  
**GitHub Repository:** [https://github.com/HassanAhmed2Ha/Hassan-Ahmed-Portfolio](https://github.com/HassanAhmed2Ha/Hassan-Ahmed-Portfolio)

---

## Introduction

This repository contains the source code of my personal portfolio website and, at the same time, a fully reusable template for students and early researchers.

I created it for two main reasons:
1. To present my skills, projects, and vision in a way that goes beyond a traditional CV.  
2. To give others a ready, practical template they can use to build their own portfolio without paying money or starting from zero.

The focus of this project is **clarity, accessibility, and digital empowerment** — not visual effects for their own sake.

---

## Why I Built This Portfolio

After several applications and professional interactions, I realized something very clear:  
**a CV alone is no longer enough** to present skills, projects, achievements, and the vision that drives them.

When I started searching for ways to build a professional portfolio, I found that most solutions were paid, and the free ones required a full-stack developer to configure and deploy. There was a gap between the need and the available tools — and no direct, accessible solution.

So, I built this portfolio from scratch.  
For three consecutive days, I stayed awake writing the structure, integrating the content, solving responsiveness issues, debugging deployment, and facing challenges one after another until it was finally complete.

Because my belief is rooted in **digital empowerment, simplified access, and using technology to document real stories**, I released this project as **open-source and free to use** — so that students, young professionals, and early researchers can build their own portfolios without paying money or losing time.

**Digital empowerment is not a luxury — it is a right.** And if a problem exists, and no accessible solution is available, then someone must build it, refine it, and make it available for others.  
This portfolio is my contribution to that approach.

---

## What This Template Provides

This template is designed to be:
- Simple to understand  
- Easy to customize  
- Practical for real applications and opportunities  

It includes sections for:
- Personal introduction and background  
- Skills and focus areas  
- Projects and practical work  
- Research interests and learning journey  
- Certificates, programs, and recognitions  
- Contact information and external profiles  

The goal is to help any user turn their scattered efforts and achievements into a **coherent, professional digital identity**.

---

## Target Users

This template is especially useful for:
- High-school and university students  
- Early-career researchers and self-learners  
- Applicants to scholarships, fellowships, and exchange programs  
- Youth leaders and community initiative founders  
- Anyone who wants a professional online presence without paying for templates or services  

It is particularly relevant for people working or interested in:
- Data, AI, and technical fields  
- Bioinformatics and computational sciences  
- Digital safety and online awareness  
- Youth programs and community development  
- Open science and knowledge sharing  

---

## Key Advantages

- **Free and open-source** — no subscription, no hidden cost  
- **Time-saving** — instead of starting from zero, you adapt an existing structure  
- **Application-ready** — suitable for including in forms, emails, and application links  
- **Scalable** — you can start simple and expand later as your journey grows  

The code and structure are organized so that you can mainly focus on **content** (your story, your skills, your projects), not on struggling with the base setup.

---

## 🚀 Quick Start Guide (GitHub Only)

You don't need to install anything on your computer. You can edit and deploy this portfolio directly from your browser using GitHub and Vercel.

### Step 1: Get the Code (Fork)
1. Look for the **"Fork"** button at the top right of this page.
2. Click it to create a copy of this repository in your own GitHub account.

### Step 2: Customize Your Content
Everything is controlled by simple files you can edit directly on GitHub.

#### 1. Change Personal Info & Texts (The most important part)
- Go to the file: `src/data.ts`.
- Click the pencil icon (Edit).
- You will see two sections: `contentEn` (English) and `contentAr` (Arabic).
- Change the text inside the quotes `' '`.
  - *Example:* Change `'Hassan Ahmed'` to `'Your Name'`.
  - *Example:* Add your projects inside the `projects` list.
- Click **Commit changes** to save.

#### 2. Change Your Photo
- Go to the folder: `public/`.
- Click **Add file > Upload files** and upload your photo (e.g., named `me.jpg`).
- Go to `src/App.tsx` and search for the image link in the Hero section.
- Replace the old link with `/me.jpg`.
- Click **Commit changes**.

#### 3. Change Colors & Theme
- Go to `src/App.tsx`.
- The main color is "Amber" (Gold/Yellow). To change it, press `Ctrl + F` and find `amber-500`.
- Replace `amber-500` with any color you like (e.g., `blue-500`, `rose-500`, `emerald-500`, `purple-500`).
- To change the dark background, find `bg-gray-900` and replace it with `bg-black` or `bg-slate-900`.
- Click **Commit changes**.

### Step 3: Activate the Contact Form (EmailJS)
To receive emails from the contact form, you need a free account on [EmailJS](https://www.emailjs.com/).

1. Create an account and add a new **Email Service** (e.g., Gmail).
2. Create an **Email Template**.
3. Go to `src/contactService.ts` on GitHub.
4. Replace the placeholders with your own keys:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`
5. Click **Commit changes**.

---

## Deployment (Put it Live!)

We will use **Vercel** (free and fast).

1. Go to [Vercel.com](https://vercel.com/) and sign up with GitHub.
2. Click **"Add New Project"**.
3. Select your forked repository (`Hassan-Ahmed-Portfolio`).
4. Click **Deploy**.
5. Wait a minute, and congratulations! Your portfolio is live. 🎉

*Note: Any change you make on GitHub (Commit) will automatically update your live website.*

---

## Philosophy Behind the Project

This template is not just a technical exercise. It reflects a set of principles:
- **Access over appearance:** A functional, clear portfolio is better than a perfect one that nobody can afford.  
- **Sharing over isolation:** If a solution works for one person, it can help many others if shared.  
- **Time is a resource:** Students and early researchers already balance study, work, and life — their tools should save time, not consume it.  

If this project helps you present yourself better, save effort, or get closer to an opportunity you care about, then it has served its purpose.

---

## About the Author

**Name:** Hassan Ahmed Hassan Zaki  
**Fields of Interest:** Bioinformatics, Data Science, Digital Safety, Youth Empowerment  
**Location:** Alexandria, Egypt  

- **GitHub:** [https://github.com/HassanAhmed2Ha](https://github.com/HassanAhmed2Ha)  
- **LinkedIn:** [https://www.linkedin.com/in/hassan-ahmed2007](https://www.linkedin.com/in/hassan-ahmed2007)  
- **Portfolio:** [https://hassan-ahmed-portfolio.vercel.app](https://hassan-ahmed-portfolio.vercel.app)  
- **Email:** hassanahmed07.e9@gmail.com  
- **OrcID:** [https://orcid.org/0009-0005-0306-0898](https://orcid.org/0009-0005-0306-0898)
