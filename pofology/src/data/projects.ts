import {  Projects } from '@/types';

export const projects: Projects[] = [
  {
    name: 'URLlite',
    shortlabel: 'A url shortner app',
    startDate: 'May 2025',
    endDate: 'May 2025',
    description: 'Urllite is a lightweight, self-hosted URL shortening app built with Golang and React. It supports fast link generation, click tracking, and IP-based geolocation — all running cost-effectively via Docker and Cloudflare Tunnel on a local machine.',
    livelink: 'https://app.urllite.com',
    github: 'https://github.com/gokulsujan/urllite'
  },{
    name: 'BroCinemas',
    shortlabel: 'An Cinemas Management System',
    startDate: 'Sep 2023',
    endDate: 'Nov 2023',
    description: 'BroCinemas is a cinema management system built with Go that supports both single-screen theaters and multiplexes. It handles movie scheduling, screen management, seat bookings, and showtime tracking, providing a scalable solution for managing multi-theater operations efficiently.',
    livelink: '',
    github: 'https://github.com/gokulsujan/movieBookingAPI'
  },
  {
    name: 'QuizApp',
    shortlabel: 'An app which can conduct competetive quizes',
    startDate: 'Sep 2023',
    endDate: 'Sep 2023',
    description: 'QuizApp is a web-based quiz application built using Go (Gin-Gonic) that allows admins to create and manage quizzes with ease. Admins can add questions, define correct answers, and launch timed quizzes. Participants receive a randomized set of questions to ensure fairness and reduce cheating. The app supports real-time quiz participation, scoring, and result tracking — ideal for online tests, competitions, or internal assessments.',
    livelink: '',
    github: 'https://github.com/gokulsujan/Quiz-App'
  },
];
