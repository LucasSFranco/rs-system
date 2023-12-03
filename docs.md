-- Applicant Platform --

POST /auth/login
POST /auth/register
POST /auth/resend-confirmation
POST /auth/confirm-email
POST /auth/forgot-password
POST /auth/reset-password
PATCH /auth/change-email
PATCH /auth/change-password

GET /editions
GET /applications
POST /apply/:editionId

on: start-test
on: answer-question
on: finish-test

-- Admin Platform --

Questions
  - GET /questions
  - POST /questions
  - PUT /questions/:questionId
  - PATCH /questions/:questionId/status
  - DELETE /questions/:questionId
Applications
  - GET /applications
  - PATCH /applications/:applicationId/status
Editions
  - GET /editions
  - POST /editions
  - PUT /editions/:editionId
  - DELETE /editions/:editionId
Users
  - GET /users
  - POST /users
  - PUT /users/:userId
  - PATCH /users/:userId/email
  - PATCH /users/:userId/password
  - DELETE /users
