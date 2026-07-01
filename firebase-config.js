/* ============================================================
   FIREBASE CONFIG  —  fill this in ONCE, then never touch again
   ============================================================

   This connects the website to Garry's free backend so he can edit
   listings, contact details and photos himself (no code, no git).

   HOW TO GET THESE VALUES (about 5 minutes — full guide in
   FIREBASE-SETUP.md):
     1. Go to https://console.firebase.google.com and create a
        free project (e.g. "garry-real-estate").
     2. Add a "Web app" to the project.
     3. Firebase shows you a config block — copy the values into
        the fields below, replacing each PASTE_... placeholder.
     4. Turn on Firestore Database, Storage, and Email/Password
        Authentication (the guide walks you through it).

   Until this is filled in, the website simply uses the built-in
   listings in properties.js — so it always works.
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey:            "PASTE_API_KEY",
  authDomain:        "PASTE_PROJECT.firebaseapp.com",
  projectId:         "PASTE_PROJECT_ID",
  storageBucket:     "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId:             "PASTE_APP_ID"
};
