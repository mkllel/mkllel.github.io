# Environment Variables Guide

This project uses Firebase for authentication and data storage. To run this project, you need to set up Firebase and configure the necessary environment variables.

## Setting Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (and add Email/Password, Google, and GitHub providers)
4. Create a Firestore database
5. Create a Storage bucket
6. Register your app in Firebase (Web app)
7. Get your Firebase configuration

## Environment Variables

For development, you can create a `.env.local` file in the root of the project with the following variables:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Update Firebase Configuration

After setting up your environment variables, update the `src/utils/firebase.ts` file to use these variables:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## For Production

In production environments, make sure to set these environment variables on your hosting platform. 