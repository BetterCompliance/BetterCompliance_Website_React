# Better Compliance Website - React + Vite

This project is a modern React application (using Vite) that replicates the original Better Compliance static HTML website, with modular components and a focus on maintainability and performance.

## 🚀 Features

- **React Components**: Modular, reusable components for all sections
- **Vite Build Tool**: Fast development and optimized production builds
- **AOS Animations**: Smooth scroll animations for select sections (not the Knowledge section)
- **Splide Carousel**: Interactive carousel for industry showcase
- **Testimonials Marquee**: Auto-scrolling testimonials with hover pause
- **Responsive Design**: Mobile-first responsive layout
- **Smooth Scrolling**: Enhanced navigation experience
- **Font Awesome Icons**: Complete icon library integration

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation with mega menus
│   ├── Hero.jsx        # Hero section
│   ├── Marquee.jsx     # Logo marquee
│   ├── HeroSection3.jsx # Services overview
│   ├── LaunchSection.jsx # Launch faster section
│   ├── ScaleSection.jsx # Scale section
│   ├── MainContent.jsx # Main content (includes Knowledge section)
│   ├── SplideCarousel.jsx # Industry carousel
│   ├── Testimonials.jsx # Testimonials marquee
│   ├── SectionSeparator.jsx # CTA section
│   └── Footer.jsx      # Footer
├── hooks/              # Custom React hooks
│   └── useSmoothScroll.js # Smooth scrolling functionality
├── styles/             # CSS files
│   ├── main.css        # Main styles
│   ├── header.css      # Header/navigation styles
│   └── footer.css      # Footer styles
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🛠 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📦 Dependencies

### Core
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server

### Libraries
- **@splidejs/react-splide**: Carousel component
- **AOS (Animate On Scroll)**: Scroll animations (not used in Knowledge section)
- **Font Awesome**: Icon library

## 🎨 Styling

The project maintains the exact same visual design as the original HTML version:

- **CSS Architecture**: Modular CSS files for different sections
- **Responsive Design**: Mobile-first approach with breakpoints
- **Animations**: AOS animations and custom CSS transitions (not in Knowledge section)
- **Typography**: Google Fonts (Inter, Raleway, Plus Jakarta Sans)

## 🔧 Key Features Implemented

### Navigation
- ✅ Mega menu dropdowns for Solutions and Engagement Suits
- ✅ Company dropdown menu
- ✅ Smooth scroll to top on logo click
- ✅ Mobile responsive navigation

### Animations
- ✅ AOS scroll animations (not in Knowledge section)
- ✅ Testimonials auto-scroll marquee with hover pause
- ✅ Logo marquee animation
- ✅ Hover effects on service cards

### Interactive Elements
- ✅ Splide carousel for industries
- ✅ CTA buttons with hover effects
- ✅ Dropdown menus with click outside to close
- ✅ Smooth scrolling for anchor links

### Performance
- ✅ Optimized asset loading
- ✅ Code splitting with Vite
- ✅ Fast development with HMR
- ✅ Production-ready builds

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Deployment

The project is ready for deployment to any static hosting service:

1. Run `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure your server to serve `index.html` for all routes

## 🔄 Migration Notes

This React conversion maintains 100% visual and functional parity with the original HTML version:

- All animations and interactions preserved (except Knowledge section, which is static)
- Exact same styling and layout
- All external dependencies maintained
- Performance optimized with modern tooling

## 📞 Support

For any issues or questions regarding this React conversion, please refer to the original project documentation or contact the development team.
