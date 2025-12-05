# Interactive Shopping Bundle Interface

An elegant, interactive pricing widget that allows users to select product bundles with customizable size and color options. Built with vanilla HTML, CSS, and JavaScript for maximum performance and compatibility.

## ✨ Features

- **Dynamic Bundle Selection**: Choose between 1, 2, or 3 pair bundles with progressive discounts
- **Real-time Pricing**: Instant price updates based on selected bundle
- **Customization Options**: Individual size and color selection for each item
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Engaging micro-animations and transitions
- **Modern UI**: Clean, premium design with glassmorphism effects
- **Accessibility**: ARIA labels and keyboard navigation support

## 🎨 Design Highlights

- Premium gradient backgrounds
- Smooth accordion-style expansion for bundle details
- Interactive hover states and transitions
- Clear visual hierarchy with badges (Most Popular, Discounts)
- Mobile-first responsive design

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, flexbox, and animations
- **JavaScript (Vanilla)**: No frameworks - pure JavaScript for interactivity
- **No Dependencies**: Zero external libraries required

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! Just a modern web browser.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/juhidungrani/Interactive-Shopping-Bundle-Interface.git
```

2. Navigate to the project directory:
```bash
cd Interactive-Shopping-Bundle-Interface
```

3. Open `index.html` in your browser:
   - Double-click the file, or
   - Use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. Visit `http://localhost:8000` in your browser

## 📁 Project Structure

```
Interactive-Shopping-Bundle-Interface/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## 💡 Usage

1. **Select a Bundle**: Click on one of the three bundle options (1, 2, or 3 pairs)
2. **Customize Items**: Expand the selected bundle to choose size and color for each item
3. **Review Total**: See the total price update automatically
4. **Add to Cart**: Click the "Add to Cart" button to complete your selection

## 🎯 Key Functionality

### State Management
- Tracks selected bundle option
- Monitors size and color selections for each item
- Validates all selections before cart addition

### Dynamic Pricing
- 1 Pair: DKK 195.00 (50% OFF)
- 2 Pair: DKK 345.00 (40% OFF) - Most Popular
- 3 Pair: DKK 528.00 (60% OFF)

### Validation
- Ensures color selection is made before adding to cart
- Provides user feedback for incomplete selections

## 🌐 Hosting Options

This static site can be hosted on:

- **GitHub Pages** (Free) - [Enable in repo settings](https://pages.github.com/)
- **Netlify** (Free) - [netlify.com](https://netlify.com)
- **Vercel** (Free) - [vercel.com](https://vercel.com)
- **Surge.sh** (Free) - Quick CLI deployment
- **Cloudflare Pages** (Free)

### Quick Deploy to GitHub Pages

1. Go to repository Settings → Pages
2. Select branch: `main`
3. Select folder: `/ (root)`
4. Click Save
5. Your site will be live at: `https://juhidungrani.github.io/Interactive-Shopping-Bundle-Interface/`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-color: #667eea;
    /* ... other variables */
}
```

### Pricing
Update prices in `index.html` and ensure JavaScript state matches.

### Products
Modify the size and color options in the `<select>` elements within `index.html`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Juhi Dungrani**
- GitHub: [@juhidungrani](https://github.com/juhidungrani)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Design inspired by modern e-commerce best practices
- Built with accessibility and performance in mind

---

⭐ **Star this repo if you find it helpful!**
