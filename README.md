# Bazar Dor

Bazar Dor is a simple Next.js price tracking website for common daily products in Bangladesh. It shows current prices, price changes, category-based product lists and market-based product details.

## Technologies Used

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- Better Auth
- better-sqlite3
- react-hot-toast
- Lucide React

## Main Features

1. Product data is loaded from the provided Bazar Dor API, with local fallback data if the API is temporarily unavailable.
2. Home page shows price risers, price fallers and all products in a responsive grid.
3. Category pages support product filtering, loading skeletons and price sorting.
4. Product details use a protected dynamic route and show minimum, maximum, average and market-based prices.
5. Better Auth provides email/password authentication with Google and GitHub social login support.
6. Toast messages are shown for login, signup, logout, profile update and validation errors.
7. Logged-in users can view their profile and update their name.
8. Friendly empty and 404 states are included for invalid routes and categories.
9. The design is responsive for mobile, tablet and desktop screens.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file:

```bash
cp .env.example .env.local
```

3. Add a long value for `BETTER_AUTH_SECRET` in `.env.local`.

4. If you want Google or GitHub login, add the related OAuth client ID and client secret values. Email/password login works without those social provider keys.

5. Create the Better Auth database tables:

```bash
npm run auth:migrate
```

6. Start the project:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Live Website Link : https://ph-assignment-7-six.vercel.app/
GitHub Repository Link : https://github.com/metul001/PH_Assignment-7.git

## Routes

- `/` - Home page
- `/category/[slug]` - Category products
- `/product/[slug]` - Protected product details
- `/signin` - Sign in
- `/signup` - Sign up
- `/profile` - User profile
- `/profile/edit` - Update user name
