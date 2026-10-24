---
title: Barking Spot
description: Created a platform where dog owners can find a safe and trusted place to leave their dogs temporarily when they need to be away.
pubDate: 2025-09-28
heroImage: ../../assets/BarkingSpot/Screenshot 2026-10-21 221545.png
gallery:
  - ../../assets/BarkingSpot/Screenshot 2026-10-21 221657.png
  - ../../assets/BarkingSpot/Screenshot 2026-10-21 221727.png
  - ../../assets/BarkingSpot/Screenshot 2026-10-21 221756.png
tags: [TypeScript, Node.js, Express, MongoDB, EJS]
---

BarkingSpot is a platform that connects dog owners with a trusted place where they can safely leave their dogs for a short period when they need to be away. The website focuses on clear information, easy navigation, and a friendly interface that helps owners quickly find a reliable temporary stay for their pets.

The backend is written in TypeScript with Node.js and Express, and pages are rendered server-side with EJS templates. Data is stored in MongoDB, and the initial data is fetched from an external JSON source with the Fetch API. Users can register and log in, with passwords hashed using bcrypt and sessions managed by express-session and stored in MongoDB.
