# Firebase setup — one-time (~10 minutes)

This connects the website to a free backend so **Garry can edit listings, photos and his contact details himself** at `admin.html`, with changes going live instantly. You (the developer) do this once.

## 1. Create the project
1. Go to **https://console.firebase.google.com** and sign in with a Google account.
2. **Add project** → name it `garry-real-estate` → you can turn Analytics **off** → **Create project**.

## 2. Add a Web app (gets your config)
1. On the project overview, click the **`</>`** (Web) icon.
2. Nickname it `garry-web` → **Register app**.
3. Firebase shows a `firebaseConfig = { ... }` block. Copy those 6 values into **`firebase-config.js`**, replacing each `PASTE_...`. (These values are safe to be public — access is controlled by the rules in step 5.)

## 3. Turn on Firestore (the database)
1. Left menu → **Build → Firestore Database → Create database**.
2. Choose **Start in production mode** → location **australia-southeast1** → Enable.

## 4. Turn on Storage (for photos)
1. **Build → Storage → Get started** → keep defaults → Done.

## 5. Set the security rules (important)
**Firestore → Rules** tab — paste this and **Publish**:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;            // anyone can view listings/details
      allow write: if request.auth != null;  // only signed-in Garry can edit
    }
  }
}
```
**Storage → Rules** tab — paste this and **Publish**:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 6. Create Garry's login
1. **Build → Authentication → Get started → Email/Password → Enable → Save**.
2. **Users** tab → **Add user** → enter **Garry's email** and a password → Add.
   (That email + password is how Garry signs in at `admin.html`.)

## 7. Go live with the data
1. Make sure the 6 values are saved in `firebase-config.js` and re-upload it to GitHub.
2. Open `admin.html`, sign in as Garry, and click **Import current listings** once — this loads the 9 real properties into the backend.
3. Done. From now on Garry just uses `admin.html`; the website updates automatically.

---
**Tip:** keep the admin URL private. Anyone who knows it still can't change anything without Garry's email + password.
