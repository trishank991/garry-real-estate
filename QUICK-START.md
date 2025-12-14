# ⚡ Quick Start - Deploy to www.garryrealestate.co.nz

## 🚀 5-Minute Deployment (GitHub Pages)

### 1. Create GitHub Account
→ [github.com/signup](https://github.com/signup)

### 2. Create Repository
- Click **"New repository"**
- Name: `garry-real-estate`
- Visibility: **Public**
- Click **"Create"**

### 3. Upload Files
- Click **"uploading an existing file"**
- Drag these files:
  - `index.html`
  - `admin.html`
- Click **"Commit changes"**

### 4. Enable GitHub Pages
- Go to **Settings** → **Pages**
- Source: **main** branch, **/ (root)** folder
- Click **"Save"**
- Your site is now at: `https://YOUR-USERNAME.github.io/garry-real-estate/`

### 5. Add Custom Domain
- In Pages settings, add: `www.garryrealestate.co.nz`
- Check **"Enforce HTTPS"**

### 6. Configure DNS
Log into your domain provider and add:

**CNAME Record (for www):**
```
Type:  CNAME
Name:  www
Value: YOUR-USERNAME.github.io
```

**A Records (for root domain):**
```
Type: A,  Name: @,  Value: 185.199.108.153
Type: A,  Name: @,  Value: 185.199.109.153
Type: A,  Name: @,  Value: 185.199.110.153
Type: A,  Name: @,  Value: 185.199.111.153
```

### 7. Wait for DNS
- DNS takes 1-48 hours to propagate
- Check at: [dnschecker.org](https://dnschecker.org)

### 8. Done! 🎉
Your website is live at: **https://www.garryrealestate.co.nz**

---

## 📋 Important URLs

| Description | URL |
|-------------|-----|
| **Main Website** | https://www.garryrealestate.co.nz |
| **Admin Panel** | https://www.garryrealestate.co.nz/admin.html |
| **GitHub Signup** | https://github.com/signup |
| **DNS Checker** | https://dnschecker.org |

---

## 🔧 Update Contact Info

Before deploying, update these in `index.html`:

- **Phone**: Line 971 - `021 123 4567`
- **Email**: Line 980 - `info@garryrealestate.co.nz`
- **Office**: Line 989 - `Auckland, New Zealand`

---

## 🔒 Add Admin Password

Add this code at line 1022 in `admin.html` (inside `<script>` tag):

```javascript
// Password protection
const ADMIN_PASSWORD = "YourStrongPassword123!";
const entered = sessionStorage.getItem('adminAuth');
if (entered !== ADMIN_PASSWORD) {
    const pwd = prompt("Admin password:");
    if (pwd !== ADMIN_PASSWORD) {
        window.location.href = "index.html";
    } else {
        sessionStorage.setItem('adminAuth', pwd);
    }
}
```

---

## 🆘 Need Help?

Read the detailed guides:
- **DEPLOYMENT-GUIDE.md** - Step-by-step deployment
- **README.md** - Full documentation

---

## ✅ Checklist

- [ ] Created GitHub account
- [ ] Uploaded website files
- [ ] Enabled GitHub Pages
- [ ] Added custom domain
- [ ] Configured DNS records
- [ ] Updated contact information
- [ ] Added admin password
- [ ] Tested on multiple devices
- [ ] Added first property
- [ ] Shared website link

---

**Your Website: www.garryrealestate.co.nz** 🏠
