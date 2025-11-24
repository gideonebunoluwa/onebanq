# OneBanq

> The Future of Credit - Zero Interest on Cards

OneBanq is a modern financial technology platform built with Next.js, providing innovative, affordable, and accessible financial services to individuals and businesses in Nigeria. This project is the official website for ONEBANQ Technologies Limited, featuring a responsive design and comprehensive information about their financial solutions.

## 🚀 Features

- **Zero Interest Credit Cards**: Information about credit cards with zero interest rates
- **Financial Solutions**: Custom financial solutions tailored to individual and business needs
- **Digital Banking Platform**: Secure platform for saving, spending, and understanding spending patterns
- **Responsive Design**: Fully responsive website optimized for all devices
- **Legal Pages**: Comprehensive legal documentation including Privacy Policy and Terms of Use
- **Modern UI/UX**: Beautiful, modern interface built with Tailwind CSS
- **SEO Optimized**: Built-in SEO optimization with Next.js metadata
- **Analytics Integration**: Integrated with PageSense analytics
- **Customer Support**: Integrated Zoho SalesIQ chat widget

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Package Manager**: Yarn

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) package manager (or npm/pnpm/bun)

## 🏃 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd onebanq
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
onebanq/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── legal/             # Legal page
│   ├── privacy/           # Privacy policy page
│   └── terms-of-use/      # Terms of use page
├── components/            # React components
│   ├── cards.tsx          # Card components
│   ├── financial.tsx      # Financial services section
│   ├── footer.tsx         # Footer component
│   ├── header.tsx         # Header/Navigation component
│   ├── hero.tsx           # Hero section
│   ├── Privacy/           # Privacy page components
│   ├── Terms-of-use/      # Terms page components
│   └── ui/                # UI components (buttons, etc.)
├── public/                # Static assets
│   └── images/            # Image assets
├── styles/                # Global styles
├── LICENSE                # MIT License
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 📜 Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint to check for code issues

## 🔧 Configuration

### Environment Variables

If you need to configure environment variables, create a `.env.local` file in the root directory:

```env
# Add your environment variables here
```

### Analytics

The project includes PageSense analytics integration. The script is loaded in `app/layout.tsx`.

### Customer Support

Zoho SalesIQ chat widget is integrated for customer support. Configuration can be found in `app/layout.tsx`.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2023 gideonebunoluwa

## 🌍 Website

Visit the live website: [https://theonebanq.com/](https://theonebanq.com/)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js/) - Contribute to Next.js

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For inquiries about OneBanq services, please visit [https://theonebanq.com/](https://theonebanq.com/)

---

**Note**: This is a private project. Please ensure you have the necessary permissions before making any changes or deployments.
