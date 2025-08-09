# Spiritual Guidance Web Application

## Overview
A spiritual guidance platform designed to connect users with authorized spiritual advisors.  
The application ensures secure and private question-answer interactions, session scheduling, and access to resources (books, slides, videos) with role-based permissions and blockchain-backed access logging.

## Key Goals
- Provide a trusted platform for faith-based guidance.
- Ensure content and answers align with the church’s teachings.
- Secure interactions using blockchain.
- Support role-based access for contributors and admins.

## Main Features
1. **Authentication**
   - Sign up and login
   - Edit and delete account
2. **Authorization**
   - Authorized members answer user questions.
   - Admins assign permissions for answering or uploading content.
3. **Resources**
   - Books, slides, videos uploaded by authorized contributors.
   - Content verified before publishing.
4. **Question Handling**
   - AI moderation filters inappropriate questions before submission.
   - Users can request a specific responder or any authorized person.
   - Evaluation requests for ambiguous answers.
5. **Privacy**
   - Users cannot see who asked or answered, only the Q&A content.
6. **Integration**
   - Blockchain used to log and verify interactions.

## Tech Stack (Planned)
- **Frontend:** Next.js + shadcn/ui
- **Backend:** Django + Django REST Framework
- **Database:** PostgreSQL via Supabase
- **Hosting:** Render (Backend), Vercel (Frontend)
- **CI/CD:** GitHub Actions
- **Blockchain:** Ethereum testnet / Polygon Mumbai

---
