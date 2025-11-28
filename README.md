# 🎂 Akshita's 22nd Birthday Portfolio

A beautiful, animated birthday website celebrating Akshita Reddy Bolusani with an image slideshow, portfolio, and heartfelt family wishes.

## ✨ Features

- **Animated Hero Section** with floating balloons and confetti
- **10-Image Slideshow** with smooth transitions and captions
- **Interactive Portfolio** showcasing her MIT journey and Deloitte career
- **Birthday Wishes** with floating hearts and animations
- **Fully Responsive** design for all devices
- **Touch/Swipe Support** for mobile slideshow navigation
- **Automatic Slideshow** with manual controls
- **Birthday Surprise Popup** on first visit

## 📸 Required Images

Add these 11 images to the `assets/` folder:

### Slideshow Images (10 required):
- `image1.jpg` - Family photo or childhood memory
- `image2.jpg` - MIT graduation day
- `image3.jpg` - Family celebration moment
- `image4.jpg` - Fun/adventure photo
- `image5.jpg` - Achievement celebration
- `image6.jpg` - Sister bonding moment
- `image7.jpg` - Group photo with friends/family
- `image8.jpg` - Candid happy moment
- `image9.jpg` - Inspirational/professional photo
- `image10.jpg` - Recent birthday or celebration

### Additional Images:
- `profile.jpg` - Professional/recent photo for portfolio (square, 800x800px recommended)
- `favicon.ico` - Small site icon (32x32px)

### Image Optimization Tips:
- Keep images under 500KB each for faster loading
- Slideshow images: 1200x800px recommended
- Profile photo: Square format works best
- Use JPEG format for photos, PNG for graphics

## 🚀 Quick Deploy to Vercel (30 minutes total)

### Step 1: Add Your Images (10 minutes)
1. Collect 10+ photos of Akshita from your phone/computer
2. Rename them as `image1.jpg`, `image2.jpg`, etc.
3. Add one profile photo as `profile.jpg` 
4. Copy all images to the `assets/` folder
5. Optional: Add a `favicon.ico` (or use a free generator online)

### Step 2: Deploy to GitHub & Vercel (10 minutes)

```bash
# Initialize Git repository
git init
git add .
git commit -m "Akshita's 22nd birthday site"
git branch -M main

# Create GitHub repo and push (replace USERNAME with your GitHub username)
git remote add origin git@github.com:USERNAME/akshita-birthday.git
git push -u origin main
```

**Alternative - Using Vercel CLI:**
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy directly
vercel --prod
```

### Step 3: Connect Your GoDaddy Domain (10 minutes)

#### In Vercel Dashboard:
1. Go to your project → Settings → Domains
2. Add your domain: `yourdomain.com`
3. Vercel will show you DNS instructions

#### In GoDaddy DNS Manager:
1. Login to GoDaddy → My Products → DNS
2. **Delete any existing A or CNAME records for @ and www**
3. Add these records:
   - **A Record**: Name: `@`, Value: `76.76.21.21`, TTL: 1 Hour
   - **CNAME Record**: Name: `www`, Value: `cname.vercel-dns.com`, TTL: 1 Hour

#### Wait & Verify (5-15 minutes):
- DNS changes take 5-15 minutes to propagate
- Vercel will automatically provision SSL certificate
- Check both `yourdomain.com` and `www.yourdomain.com`

## 🎨 Customization Options

### Update Text Content:
- Edit family message in `index.html` (search for "family-message")
- Modify birthday wishes and nicknames
- Update slide captions for each image

### Change Colors:
- Edit the gradient colors in `styles.css`
- Current theme: Purple-blue gradient (`#667eea` to `#764ba2`)

### Slideshow Settings:
- Change auto-advance timing in `script.js` (currently 4 seconds)
- Modify transition effects in `styles.css`

## 📱 Features & Controls

- **Auto-slideshow**: Changes every 4 seconds
- **Navigation**: Click arrows or dots to navigate
- **Keyboard**: Use arrow keys to control slideshow
- **Touch**: Swipe left/right on mobile
- **Pause**: Hover over slideshow to pause auto-advance

## 🎉 Special Features

- Birthday surprise popup on first visit
- Floating animation elements (balloons, hearts, confetti)  
- Smooth scroll animations when sections come into view
- Interactive skill bars with loading animations
- Click ripple effects on buttons
- Responsive design for all screen sizes

## 🛠 Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **Google Fonts** - Poppins font family
- **CSS Animations** - Keyframe-based animations
- **Intersection Observer** - For scroll-triggered animations
- **Local Storage** - Remembers birthday surprise viewed
- **Touch Events** - Mobile swipe support

## 🚨 Troubleshooting

**Images not loading?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `assets/` folder
- Try refreshing browser cache (Ctrl+F5 / Cmd+Shift+R)

**Domain not working?**
- Wait 15-30 minutes for DNS propagation
- Clear browser DNS cache: `chrome://net-internals/#dns`
- Check GoDaddy DNS records match instructions exactly

**Slideshow not working?**
- Check browser console for JavaScript errors
- Ensure all image files exist with correct names
- Try opening in incognito/private browsing mode

## 💝 Made with Love

Created for Akshita's 22nd birthday celebration - November 2025
From family with endless love and pride! 🌟

---

**Need help?** Check that all images are added and file names match exactly. The site will work beautifully once images are in place!