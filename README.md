# ScrapWise — Fresh Build (CSE326)

This is a **new frontend project built from scratch** based on the assigned Doorstep Scrap / Paper / Recyclables Pickup Scheduler brief.

## How to open
1. Extract the ZIP file.
2. Open `index.html` in Chrome/Edge.
3. Use the links at the top to visit the other pages.

All required CSS and illustrations are inside the folder. **No installation or internet connection is required.**

## Project structure
```
ScrapWise-Fresh/
  index.html             Home page
  rates.html             Searchable scrap rate table
  calculator.html        Multi-material earnings calculator
  booking.html           Pickup form and demo confirmation
  how-it-works.html      Steps, weighing assurance, FAQs
  style.css              Simple custom styles (mostly colors and visual polish)
  script.js              Small JavaScript functions
  assets/
    bootstrap.min.css    Locally bundled Bootstrap 5 stylesheet
    hero-illustration.svg
    favicon.svg
  VIVA-GUIDE.md          How to understand/demo your project
```

## Functionality (actually implemented)
- Navigation between five pages.
- Search/filter scrap categories in the rate table.
- Enter weights for five materials; JavaScript adds earnings and totals the weight live.
- Clear all calculator inputs.
- Booking form with browser-side required field, 10-digit phone, six-digit PIN and minimum-weight validation.
- Preferred date selection with earlier dates disabled.
- Demo confirmation appears after a valid form submission.
- FAQs open and close with native HTML `<details>` elements.

## Scope and honesty
- Sample rates are fixed manually, NOT updated daily from a server.
- Booking form DOES NOT send or store user information. Confirmation is for demonstration only.
- A digital scale is proposed in the process, NOT connected to the website.
- No backend, collector account, payment integration or database.
- If launched as a real service, it would need a backend, privacy protections, verified collectors and live pricing.

## Update rates
Change the five prices in `rates.html` and the matching numbers in `script.js` in `calculateTotal()`. Keep those values consistent.

## External dependencies
Bootstrap CSS is provided locally; the bundled vendor file is a separate third-party framework under the MIT License. No copied application code from the LinkedIn sample or earlier ScrapWise versions is used.
