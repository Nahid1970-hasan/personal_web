# Personal Portfolio Website - Jane Cooper

A stunning, fully-featured personal portfolio website built with React and Vite. This is a complete portfolio solution with multiple sections showcasing your work, experience, education, and more.

## ✨ Features

### Sections Included:
1. **Hero Section** - Professional introduction with profile image
2. **Experience & Solutions** - Years of experience badge with business solutions
3. **Inspiring Projects** - Showcase your best projects
4. **Portfolio Gallery** - Filterable project gallery with categories
5. **Education** - Display your educational background
6. **Experience Timeline** - Work experience with detailed descriptions
7. **Pricing Plans** - Three-tier pricing cards for services
8. **Blog Section** - Recent articles and insights
9. **Contact Form** - Full contact form with location details
10. **Footer** - Complete footer with links and social media

### Design Features:
- 🎨 Modern and clean pink/red color scheme (#FF1654)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations and hover effects
- 🔗 Social media integration throughout
- ⚡ Fast loading with Vite
- 🎯 Professional UI/UX design
- 🌟 Floating action buttons
- 📊 Interactive portfolio filters
- 💳 Pricing cards with featured option
- 📝 Contact form ready for integration

## 🚀 Tech Stack

- **React 18** - Modern React with Hooks
- **Vite 4** - Fast build tool (compatible with Node 16+)
- **React Icons** - Beautiful icon library
- **CSS3** - Modern CSS with Grid & Flexbox
- **Responsive Design** - Mobile-first approach

## 📦 Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Quick Start

1. Navigate to the project directory:
   ```bash
   cd profile_1
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: **http://localhost:5173** (or the port shown in terminal)

## 🎨 Customization Guide

### 1. Personal Information

**Edit `src/App.jsx`:**

- **Line 66-79**: Change your name, role, and greeting
  ```jsx
  <h1>
    <span className="intro">I'm [Your Name]</span>
    <span className="role">
      A <span className="highlight">[Your Role]</span>
    </span>
  </h1>
  ```

- **Line 83**: Replace profile image URL with your photo
  ```jsx
  src="YOUR_IMAGE_URL_HERE"
  ```

### 2. Color Scheme

**Edit `src/App.css`:**

Find and replace the primary color (lines 12-14):
```css
--primary-color: #FF1654; /* Change to your color */
```

### 3. Social Media Links

Search for `href="#"` throughout `App.jsx` and replace with your actual links:
- Facebook
- Twitter
- Instagram
- LinkedIn
- YouTube

### 4. Portfolio Images

**Lines 15-24 in App.jsx:**
Replace the Unsplash URLs with your actual project images:
```jsx
const portfolioItems = [
  { id: 1, category: 'Design', image: 'YOUR_IMAGE_URL' },
  // ... more items
]
```

### 5. Blog Posts

**Lines 26-40 in App.jsx:**
Update blog post information:
```jsx
const blogPosts = [
  {
    id: 1,
    image: 'YOUR_BLOG_IMAGE',
    title: 'Your Blog Title',
    date: 'Publication Date'
  },
  // ... more posts
]
```

### 6. Contact Information

**Lines 420-450 in App.jsx:**
Update your contact details:
- Phone number
- Email address
- Physical address

### 7. Experience & Education

Edit the relevant sections in `App.jsx`:
- Lines 110-130: Experience timeline
- Lines 280-320: Education cards
- Lines 340-380: Work experience details

## 🛠️ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment Options

Deploy your portfolio to:

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Drag and drop the `dist` folder to Netlify

3. **GitHub Pages**
   - Push to GitHub and enable GitHub Pages

4. **Any Static Host**
   - Upload the `dist` folder contents

## 📝 Form Integration

The contact form is ready for integration. Options:

1. **Formspree**: Add action URL to form tag
2. **EmailJS**: Add EmailJS service
3. **Netlify Forms**: Add `netlify` attribute
4. **Backend API**: Connect to your own API

## 🎯 Sections Overview

### Hero Section
- Greeting message
- Name and role
- Profile image
- Call-to-action button

### Experience Badge
- Years of experience
- Designer info card
- Business solutions

### Projects
- Numbered project list
- Circular profile image
- Project descriptions

### Portfolio Gallery
- 6-category filter
- Grid layout
- Hover effects
- Project categories

### Education
- 4 education cards
- Icon-based design
- Institution details

### Pricing
- 3 pricing tiers
- Feature lists
- Popular badge
- CTA buttons

### Blog
- 3 blog cards
- Featured images
- Category badges
- Dates

### Contact
- Contact information
- Full contact form
- Location details

### Footer
- Quick links
- Product links
- Social media
- Copyright info

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🎨 Color Variables

```css
--primary-color: #FF1654 (Pink/Red)
--secondary-color: #FFE5EC (Light Pink)
--text-dark: #1a1a1a (Almost Black)
--text-gray: #666 (Gray)
--white: #ffffff (White)
```

## 📄 File Structure

```
profile_1/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # All styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🐛 Troubleshooting

**Port already in use?**
- Vite will automatically use the next available port (5174, 5175, etc.)

**Images not loading?**
- Make sure image URLs are accessible
- Use https:// URLs for external images

**Styling issues?**
- Clear browser cache
- Check browser console for errors

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Icons](https://react-icons.github.io/react-icons/)

## 💡 Tips

1. Replace all placeholder images with your own
2. Update all text content to match your profile
3. Test on multiple devices before deploying
4. Optimize images for web (use WebP format)
5. Add your own favicon in `public` folder
6. Set up proper SEO meta tags in `index.html`

## 🎉 What's Next?

- Add smooth scroll to navigation
- Implement dark mode toggle
- Add loading animations
- Connect contact form to backend
- Add blog CMS integration
- Implement portfolio lightbox
- Add testimonials section
- Create case studies for projects

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Make sure you're using Node.js 16+

## 🎨 Design Credits

Design inspired by modern portfolio trends with a focus on clean, professional aesthetics.

---

**Ready to impress?** Customize this template and launch your professional portfolio today! 🚀
