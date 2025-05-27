import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'URLlite',
    category: 'Full Stack Web App',
    thumbnailUrl: '/images/works/urllite_thubnail.jpg',
    description: `URLlite is a lightweight and cost-effective URL shortening application designed for performance and simplicity. Built using Golang with the Gin framework, Cassandra for high-speed data operations, Redis for caching, and Asynq for background task processing, it offers a robust backend architecture. The frontend is developed in React, delivering a smooth user experience. Key features include generating short aliases for long URLs, tracking link engagement, and capturing geographic details (city and country) of visitors. Impressively, the entire system is self-hosted using a Docker container on a local machine, with public access enabled through Cloudflare Tunnel—eliminating the need for paid servers. The only cost incurred was ₹500 for the domain, making it a highly efficient and budget-friendly project. Through building URLlite, the developer gained valuable experience in async processing, performance tuning, and innovative self-hosting techniques.
`,
    publishedAt: '',
    images: ['/images/works/urllite01.png', '/images/works/urllite02.png', '/images/works/urllite03.png'],
    previewUrl: 'https://app.urllite.in/',
    github: 'https://github.com/gokulsujan/urllite',
    featureList: [
      'URL Shortening - Create short aliases for long URLs quickly and easily.',
      'Custom Aliases - Option to generate custom short codes for better readability or branding.',
      'Engagement Tracking - Monitor how many times a short URL has been visited.',
      'Geolocation insights - View the city and country of each visitor based on their IP address.',
    ],
    attributes: [
        {
          name: 'Start Date',
          value: 'May 2025',
        },
        {
          name: 'End Date',
          value: 'May 2025',
        },
        {
          name: 'Backend',
          value: 'Golang',
        },
        {
          name: 'Frontend',
          value: 'React JS',
        },
        {
          name: 'DBMS',
          value: 'Cassandra for faster read and write',
        },
        {
          name: 'Containerization',
          value: 'Docker',
        },
        {
          name: 'Hosting',
          value: 'Local Server machine exposed using cloudflare tunnel',
        },
      ],
  },
  {
    id: 2,
    title: 'Bro Cinemas',
    category: 'Backend API System',
    thumbnailUrl: '/images/works/brocinemas_thumbnail.png',
    description: `Brocinemas is a cinema management system backend built with Golang and the Gin framework. Designed to support everything from single-screen theaters to large multiplexes, it offers a complete solution for managing movie shows, ticket bookings, screen allocations, and scheduling. The system uses PostgreSQL for persistent data storage, Redis for fast in-memory operations, and Go Cron for automated task scheduling. With robust API documentation via Postman and clean version control using Git, brocinemas is a scalable and efficient backend for modern cinema operations.
`,
    publishedAt: '',
    images: [],
    previewUrl: '',
    github: 'https://github.com/gokulsujan/movieBookingAPI',
    featureList: [
      'Cinema Management - Add and manage single-screen cinemas or multiplexes, Configure screens, seat layouts, and screen types (2D, 3D, etc.)',
      'Movie & Show Scheduling - Add and manage movies with metadata (title, duration, language, etc, Schedule shows across multiple screens and time slots, Prevent scheduling conflicts and overlapping shows',
      'Ticket Booking System - Real-time seat availability check, Seat selection and reservation, Booking confirmation and ticket generation, Booking cancellation and refund logic',
    ],
    attributes: [
        {
          name: 'Start Date',
          value: 'Sep 2023',
        },
        {
          name: 'End Date',
          value: 'Nov 2023',
        },
        {
          name: 'Backend',
          value: 'Golang',
        },
        {
          name: 'DBMS',
          value: 'Postgres and Redis(Caching)',
        },
      ],
  },
  {
    id: 3,
    title: 'Quiz App',
    category: 'Full Stack Web App',
    thumbnailUrl: '/images/works/marketplace-website.png',
    description: `QuizApp is a web-based quiz application built using Go (Gin-Gonic) that allows admins to create and manage quizzes with ease. Admins can add questions, define correct answers, and launch timed quizzes. Participants receive a randomized set of questions to ensure fairness and reduce cheating. The app supports real-time quiz participation, scoring, and result tracking — ideal for online tests, competitions, or internal assessments.`,
    publishedAt: '01 July 2022',
    images: [],
    previewUrl: '',
    github: 'https://github.com/gokulsujan/Quiz-App',
    featureList: [
      'Admin Controls: Create quizzes, add questions, set timers, and manage results.',
      'Randomized Questions: Each participant gets a unique set to prevent cheating.',
      'Timed Quizzes: Automatic submission when time runs out.',
      'Real-Time Participation: Users can take active quizzes and see results instantly.',
      'Auto Scoring: Immediate score calculation and result tracking.',
      'Built with Go (Gin-Gonic): Fast, scalable, and efficient backend.'
    ],
    attributes: [
      {
        name: 'Start Date',
        value: 'Sep 2023',
      },
      {
        name: 'End Date',
        value: 'Sep 2023',
      },
      {
        name: 'Backend',
        value: 'Golang',
      },
      {
        name: 'DBMS',
        value: 'Postgres',
      },
    ],
  },
];
