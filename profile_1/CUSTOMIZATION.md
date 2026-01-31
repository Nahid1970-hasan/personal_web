# Quick Customization Guide

## 🎯 5-Minute Setup

### 1. Replace Profile Image
**File**: `src/App.jsx`
**Line**: 83
```jsx
src="YOUR_PHOTO_URL_HERE"
```

### 2. Change Name & Title
**File**: `src/App.jsx`
**Lines**: 66-72
```jsx
<h1>
  <span className="intro">I'm [Your Name]</span>
  <span className="role">
    A <span className="highlight">[Your Title]</span>
  </span>
</h1>
```

### 3. Update Contact Info
**File**: `src/App.jsx`
**Lines**: 420-445

```jsx
// Phone
<p>+91 [Your Phone]</p>

// Email
<p>[your-email]@gmail.com</p>

// Address
<p>[Your Address]</p>
```

### 4. Change Primary Color
**File**: `src/App.css`
**Line**: 12
```css
--primary-color: #FF1654; /* Your color here */
```

### 5. Add Your Social Links
**File**: `src/App.jsx`

Search for: `href="#"`
Replace with your actual social media URLs

---

## 📸 Image Replacements Needed

1. **Hero Image** (Line 83): Your main profile photo
2. **Designer Avatar** (Line 106): Small circular photo
3. **Project Image** (Line 177): Professional photo
4. **Timeline Image** (Line 356): Another professional photo
5. **Portfolio Items** (Lines 15-24): Your project screenshots
6. **Blog Images** (Lines 26-40): Blog post images

---

## 🎨 Common Customizations

### Change Button Text
Search for:
- "Hire Me" → Your CTA text
- "DOWNLOAD CV" → Your preference
- "LET'S CONNECT" → Your message

### Update Section Titles
- Line 66: "HELLO" greeting
- Line 121: "Boost Business Strategic Solutions with Us"
- Line 160: "Inspiring The World One Project"
- Line 276: "Empowering Creativity through"

### Modify Footer Text
**Line 480**: "Get Ready To Create a Great Communication"

---

## 🔗 Social Media Links to Update

Find these lines and add your URLs:
- Facebook: Multiple locations
- Twitter: Multiple locations
- Instagram: Multiple locations
- LinkedIn: Multiple locations
- YouTube: Multiple locations

---

## 📝 Content Sections to Edit

1. **About Description** (Line 75)
2. **Solutions Text** (Line 123)
3. **Project Items** (Lines 162-174)
4. **Education Cards** (Lines 284-319)
5. **Experience Timeline** (Lines 331-349)
6. **Pricing Features** (Lines 384-405)
7. **Blog Posts** (Lines 413-432)

---

## 🚀 Ready to Launch Checklist

- [ ] Updated all personal information
- [ ] Replaced all images
- [ ] Added social media links
- [ ] Updated contact details
- [ ] Changed colors to match brand
- [ ] Tested on mobile devices
- [ ] Tested contact form
- [ ] Checked all links work
- [ ] Optimized images for web
- [ ] Built for production (`npm run build`)

---

## 💡 Pro Tips

1. **Use WebP format** for images (smaller file size)
2. **Keep images under 500KB** for fast loading
3. **Use consistent aspect ratios** for portfolio items
4. **Test on real devices**, not just browser resize
5. **Add your favicon** to public folder
6. **Update page title** in `index.html`

---

Need help? Check the full README.md for detailed instructions!
