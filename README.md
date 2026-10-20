# Earnwise Academy

A responsive, accessible-first course discovery and affiliate landing page built with plain HTML, CSS and vanilla JavaScript.

## Configure before promoting

Open `app.js` and update:

1. `SITE_CONFIG.contactUrl` with your WhatsApp click-to-chat URL, for example `https://wa.me/234XXXXXXXXXX`. Use your own number and international format without the leading plus sign.
2. Each course's `priceLabel` with the verified current price from Earners Pay/the course provider.
3. Each course's `affiliateUrl` with the matching, real Earners Pay affiliate URL.
4. Edit the `courses` array so it lists only courses you have verified are actually available to promote. Update each course's description and opportunities to match its real curriculum.

Until these are set, the course cards intentionally show that links/prices need confirmation and the budget button falls back to the page section. Do not share the site as a ready-to-buy catalogue until configuration and testing are complete.

## Publish with GitHub Pages

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then save.
4. Wait for the Pages build and open the URL GitHub provides.

## Responsible affiliate promotion

- Clearly disclose affiliate relationships. Some links may earn a commission at no additional cost to the buyer.
- Do not promise guaranteed jobs, earnings, or financial results.
- Verify the provider, curriculum, price, access terms, and refund policy before promoting a course.
- Do not imply that Earnwise Academy owns or delivers third-party courses unless that is true.
- Never request a buyer's payment PIN, password, or one-time code.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive visual design and reduced-motion support
- `app.js` — catalogue data, search, category filters and link configuration
