/*
 * Earnwise Academy course catalogue.
 * Prices and titles transcribed from the supplied EarnersPay screen recording.
 * Prices are converted for display at the site owner's rate of $1 = ₦1,000; verify provider checkout prices.
 * Affiliate links are kept in the order supplied. Verify the repeated epr-212440 ID
 * (one /buy URL and one /vsl URL) before promoting both adjacent listings.
 */
const courses = [
  { id: "newbie-affiliate-guide", title: "The Newbie Affiliate Guide (NAG)", category: "Affiliate & Income", icon: "↗", price: 8.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-579281&a=epa-169139", description: "A beginner-friendly introduction to affiliate marketing and how referral-based promotion works.", opportunity: "Use the fundamentals to plan helpful content and recommend products relevant to a specific audience." },
  { id: "affiliate-marketing-beginners", title: "Affiliate Marketing for Beginners (AMB)", category: "Affiliate & Income", icon: "↗", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-140762&a=epa-169139", description: "Explore the building blocks of choosing offers, sharing useful content and understanding affiliate links.", opportunity: "A starting point for developing a referral-content strategy. Commissions depend on real sales and program terms." },
  { id: "digital-skills-toolkit", title: "Digital Skills Toolkit Program", category: "Other Skills", icon: "✳", price: 10.50, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-499790&a=epa-169139", description: "A digital-skills toolkit for learners exploring practical online work and tools.", opportunity: "Use what fits your goals to build work samples or support a personal project." },
  { id: "ghostwriting-earning-vault", title: "The Ghostwriting Earning Vault", category: "Content & Creator", icon: "✎", price: 40.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-706975&a=epa-169139", description: "A writing-focused resource for learning about ghostwriting and the business behind client writing.", opportunity: "Practise writing samples and explore services such as articles, scripts or business content." },
  { id: "affiliate-marketing-made-simple", title: "Affiliate Marketing Made Simple", category: "Affiliate & Income", icon: "↗", price: 7.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-240775&a=epa-169139", creatorHook: "Here’s the online income model helping beginners aim for ₦300,000 monthly, with affiliate marketing made simple: a step-by-step guide to earning online.", description: "A step-by-step affiliate-marketing guide promoted for beginners who want to learn how online referrals can become an income stream.", opportunity: "Learn the creator’s approach to promoting offers and building an affiliate-marketing routine." },
  { id: "simplified-online-survey-guide", title: "Simplified Online Survey Guide (Get Paid in Pounds)", category: "Affiliate & Income", icon: "◎", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-254218&a=epa-169139", description: "A guide centred on online survey platforms and the process of participating in them.", opportunity: "Understand eligibility and payout rules before spending time on survey sites; rewards are not guaranteed." },
  { id: "chat-foreigners-livestream", title: "Get Paid to Chat and Talk to Foreigners (Livestream)", category: "Content & Creator", icon: "◉", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-955516&a=epa-169139", description: "An introduction to online conversation and livestream-style platforms shown in the course listing.", opportunity: "Explore online communication formats while reviewing each platform's requirements, safety and payout terms." },
  { id: "live-streaming-blueprint", title: "Live Streaming Blueprint (LSB)", category: "Content & Creator", icon: "▶", price: 12.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-609388&a=epa-169139", description: "A blueprint for getting started with livestreaming and developing a consistent on-camera format.", opportunity: "Practise live presentation, audience interaction and content planning. Results depend on the platform and audience." },
  { id: "whatsapp-sales-blueprint", title: "WhatsApp Sales Blueprint", category: "Marketing & Ads", icon: "◌", price: 7.50, affiliateUrl: "https://app.earnerspay.com/get?p=epr-552793&a=epa-169139", description: "A sales-focused guide to organising product conversations and follow-ups on WhatsApp.", opportunity: "Apply the ideas to customer communication for a small business, while respecting WhatsApp policies." },
  { id: "fundz-magnet-automated", title: "Fundz Magnet Automated", category: "Automation & Tools", icon: "✧", price: 10.00, affiliateUrl: "https://app.earnerspay.com/get?p=epr-912841&a=epa-169139", description: "A digital blueprint presented around automated online workflows and attracting prospects.", opportunity: "Review the curriculum to see whether its processes fit your business or audience-building goals." },
  { id: "female-virtual-cyber-blueprint", title: "Female Virtual Cyber Blueprint", category: "Other Skills", icon: "◇", price: 8.00, affiliateUrl: "https://app.earnerspay.com/get?p=epr-790409&a=epa-169139", description: "A specialist online blueprint. Check the detailed syllabus to understand the specific skills and audience it targets.", opportunity: "Compare its content with your interests and verify what training, tools or experience it expects." },
  { id: "jjis-jesjenn-income-system", title: "JJIS Jesjenn Income System", category: "Affiliate & Income", icon: "↗", price: 10.00, affiliateUrl: "https://app.earnerspay.com/get?p=epr-348181&a=epa-169139", description: "An online-income system presented as a guided learning resource for beginners.", opportunity: "Review the lessons and costs carefully, then focus on practical skills rather than income promises." },
  { id: "ultimate-yt-guide-smoke", title: "Ultimate YT Guide by $moke", category: "Content & Creator", icon: "▶", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-773444&a=epa-169139", description: "A YouTube-focused guide for people exploring channel content and creator workflows.", opportunity: "Plan videos, develop a publishing habit and learn the basics of building an audience over time." },
  { id: "jbis-2", title: "JBIS 2.0", category: "Affiliate & Income", icon: "↗", price: 20.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-750081&a=epa-169139", description: "A second-version income-system blueprint listed on EarnersPay.", opportunity: "Inspect the outline, requirements and any additional costs to decide whether it fits your goals." },
  { id: "youtube-automation-blueprint", title: "The YouTube Automation Blueprint", category: "Content & Creator", icon: "▶", price: 20.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-742551&a=epa-169139", description: "A course about structuring repeatable steps in a YouTube channel's content workflow.", opportunity: "Learn planning and production processes that may help organise a channel; growth and monetisation are not guaranteed." },
  { id: "foreign-tiktok-account", title: "Foreign TikTok Account Creation and Monetization", category: "Content & Creator", icon: "◎", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-69224&a=epa-169139", description: "A TikTok-focused guide covering account setup and monetisation topics.", opportunity: "Check eligibility carefully and follow TikTok's current rules and local laws; do not assume every region or account qualifies." },
  { id: "beginners-automated-cashflow", title: "Beginners Automated Cashflow Formula", category: "Affiliate & Income", icon: "↗", price: 20.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-780815&a=epa-169139", description: "A beginner-oriented framework focused on automated online business and cash-flow concepts.", opportunity: "Use it to evaluate business models and workflows critically; the title is not a promise of earnings." },
  { id: "snapchat-ads-mastery", title: "Snapchat Ads Mastery Course", category: "Marketing & Ads", icon: "◎", price: 15.50, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-174191&a=epa-169139", description: "A Snapchat advertising course for learning campaign concepts and audience-focused promotion.", opportunity: "Build a foundation for planning and reviewing paid campaigns; advertising spend is separate from course fees." },
  { id: "ai-telegram-automation", title: "AI Telegram Automation Blueprint (ATAB)", category: "Automation & Tools", icon: "✧", price: 11.90, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-212440&a=epa-169139", description: "A blueprint focused on AI-assisted automation and Telegram-based workflows.", opportunity: "Explore ways to organise repetitive communication or bot workflows, subject to platform rules and the course's actual syllabus." },
  { id: "100x-youtube-automation", title: "100X YouTube Automation Guide", category: "Content & Creator", icon: "▶", price: 30.50, affiliateUrl: "https://app.earnerspay.com/vsl?p=epr-212440&a=epa-169139", description: "A YouTube automation guide positioned around streamlining channel planning and production.", opportunity: "Learn to structure a repeatable publishing process. Confirm the product identity on the sales page before checkout." },
  { id: "digital-hustler-blueprint", title: "Digital Hustler Blueprint (DHB)", category: "Affiliate & Income", icon: "↗", price: 7.50, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-980886&a=epa-169139", creatorHook: "How to Earn ₦50K – ₦100K Weekly with Affiliate Marketing Using Just Your Phone", description: "A creator-promoted affiliate marketing program. Read the creator’s full sales page to understand what is included and how it works.", opportunity: "Explore the creator’s original explanation of affiliate marketing and the steps they recommend for promoting offers." },
  { id: "gas-grow-affiliate-sales", title: "G-A-S: Grow with Affiliate Sales", category: "Affiliate & Income", icon: "↗", price: 7.50, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-893164&a=epa-169139", description: "A guide focused on improving how affiliate offers are presented and promoted.", opportunity: "Practise ethical product recommendations and learn to measure which content attracts relevant buyers." },
  { id: "survey-income-machine", title: "Survey Income Machine (SIM) Blueprint", category: "Affiliate & Income", icon: "◎", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-723001&a=epa-169139", description: "A survey-focused blueprint for learning how online survey opportunities work.", opportunity: "Check geographic eligibility, minimum payout rules and time requirements before using survey platforms." },
  { id: "jwealth-beginner-income", title: "Jwealth Beginner Income System", category: "Affiliate & Income", icon: "↗", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-925052&a=epa-169139", description: "A beginner income-system course listed for learners exploring online earning topics.", opportunity: "Review the full curriculum and apply any useful steps as small, measurable experiments." },
  { id: "ultimate-survey-income", title: "Ultimate Survey Income (USI): Earn in Pounds", category: "Affiliate & Income", icon: "◎", price: 14.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-996060&a=epa-169139", description: "A guide focused on survey platforms with pound-denominated rewards.", opportunity: "Verify country eligibility, conversion fees and withdrawal methods; survey earnings are uncertain." },
  { id: "beginner-digital-blueprint", title: "The Beginner Digital Blueprint (BDB)", category: "Other Skills", icon: "✳", price: 15.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-519262&a=epa-169139", description: "A beginner-friendly digital blueprint for people exploring skills and online work.", opportunity: "Choose one relevant skill to practise and build evidence of your work before offering services." },
  { id: "facebook-ads-nigerian-business", title: "Facebook Ads for Nigerian Business Owners", category: "Marketing & Ads", icon: "◎", price: 19.50, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-306728&a=epa-169139", description: "An advertising course presented for Nigerian business owners using Facebook ads.", opportunity: "Learn campaign-planning basics and test small, measured campaigns only when you have an approved budget." },
  { id: "multiple-income-accelerator", title: "Multiple Income Accelerator Program", category: "Affiliate & Income", icon: "↗", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-443380&a=epa-169139", description: "A course presented around exploring more than one online income model.", opportunity: "Compare the time, skills and costs involved in each model before deciding where to focus." },
  { id: "income-generator-program", title: "Income Generator Program (IGP)", category: "Affiliate & Income", icon: "↗", price: 7.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-394224&a=epa-169139", description: "An introductory program listed for learners interested in digital income topics.", opportunity: "Use the course outline to evaluate its practical steps; no earnings or results are guaranteed." },
  { id: "cyber-companion-friend", title: "Cyber Companion Friend Premium Blueprint", category: "Other Skills", icon: "◇", price: 11.50, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-135593&a=epa-169139", description: "A specialised digital blueprint. Read the provider's outline to understand the service model and expectations.", opportunity: "Review privacy, safety, workload and platform rules before pursuing any companion-style online service." },
  { id: "digital-income-blueprint", title: "Digital Income Blueprint", category: "Affiliate & Income", icon: "↗", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-948671&a=epa-169139", description: "A general digital-income blueprint for exploring online business and skill-based options.", opportunity: "Use it to compare approaches and identify a realistic, skills-led next step." },
  { id: "affiliate-marketing-maestro", title: "Affiliate Marketing Maestro", category: "Affiliate & Income", icon: "↗", price: 7.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-611834&a=epa-169139", description: "An affiliate marketing resource for learners who want to understand offer promotion.", opportunity: "Build experience with relevant content, honest recommendations and basic performance tracking." },
  { id: "irreplaceable-copywriter-bundle", title: "The Irreplaceable Copywriter Course Bundle", category: "Content & Creator", icon: "✎", price: 50.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-630080&a=epa-169139", description: "A copywriting bundle for developing persuasive, audience-focused business writing.", opportunity: "Practise product descriptions, landing-page copy and email campaigns for a writing portfolio." },
  { id: "tiktok-monetization-blueprint", title: "TikTok Monetization Blueprint", category: "Content & Creator", icon: "◎", price: 45.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-471459&a=epa-169139", description: "A TikTok-focused course about creator monetisation and channel strategy.", opportunity: "Learn about content planning and possible monetisation routes while checking current account eligibility rules." },
  { id: "youtube-automation-launchpad", title: "YouTube Automation LaunchPad", category: "Content & Creator", icon: "▶", price: 50.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-910323&a=epa-169139", description: "A launch-oriented resource for organising a YouTube channel and its production workflow.", opportunity: "Build repeatable planning and publishing habits; monetisation depends on content quality, audience and platform eligibility." },
  { id: "google-ads-game-course", title: "Google Ads for Marketers Expo (GAME) Course", category: "Marketing & Ads", icon: "◎", price: 20.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-332662&a=epa-169139", description: "A Google Ads-focused learning resource for marketers and business owners.", opportunity: "Understand campaign structure, keywords and measurement before managing a real advertising budget." },
  { id: "tiktok-ads-manager-beginners", title: "TikTok Ads Manager for Beginners (TAMB)", category: "Marketing & Ads", icon: "◎", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-739995&a=epa-169139", description: "An introductory resource for learning TikTok Ads Manager and paid-campaign concepts.", opportunity: "Practise audience and creative planning, then test with a budget you can afford to lose." },
  { id: "youtube-income-generator", title: "YouTube Income Generator", category: "Content & Creator", icon: "▶", price: 50.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-189540&a=epa-169139", description: "A YouTube-focused course about creator activity and possible income pathways.", opportunity: "Learn to plan content and understand eligibility requirements; income is not automatic or guaranteed." },
  { id: "dollar-growth-blueprint", title: "Dollar Growth Blueprint (DGB Formula)", category: "Other Skills", icon: "◎", price: 25.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-906998&a=epa-169139", description: "A finance-oriented blueprint covering money mindset, saving and growth concepts, according to its listing.", opportunity: "Use it for general financial learning, not as personalised investment advice or a promise of returns." },
  { id: "trend-kobo-made-easy", title: "Trend and Kobo Made Easy (TKME)", category: "Content & Creator", icon: "✎", price: 25.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-921555&a=epa-169139", description: "A digital-publishing resource focused on finding niches and publishing through Amazon KDP and Kobo.", opportunity: "Explore ebook research and publishing workflows; sales depend on demand, quality and promotion." },
  { id: "ghostwriting-profit-system", title: "The Ghostwriting Profit System (TGPS)", category: "Content & Creator", icon: "✎", price: 40.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-720209&a=epa-169139", description: "A writing-focused program presented around launching a ghostwriting service.", opportunity: "Practise writing and client communication, then build a small portfolio before seeking paid work." },
  { id: "digital-freedom-code", title: "Digital Freedom Code (DFC)", category: "Affiliate & Income", icon: "↗", price: 10.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-167886&a=epa-169139", description: "A digital-business blueprint for people exploring online work and independent projects.", opportunity: "Review the steps and choose practical skills you can develop; results vary by effort and market." },
  { id: "global-affiliate-marketing-expo", title: "Global Affiliate Marketing Expo (G.A.M.E.)", category: "Affiliate & Income", icon: "↗", price: 20.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-470854&a=epa-169139", description: "An affiliate-marketing resource focused on promotion and referral-based business concepts.", opportunity: "Learn to communicate product value clearly and track meaningful audience engagement and conversions." },
  { id: "soap-making-secret-formula", title: "Soap Making Secret (SMS) Formula", category: "Other Skills", icon: "✳", price: 6.50, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-945275&a=epa-169139", description: "A soap-making formula course for learners exploring handmade product creation.", opportunity: "Explore a small craft-business idea, following appropriate product-safety, labelling and handling guidance." },
  { id: "sell-like-a-pro", title: "Sell Like a Pro", category: "Marketing & Ads", icon: "↗", price: 20.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-129792&a=epa-169139", description: "A sales-focused course for improving how you present offers and communicate with prospective buyers.", opportunity: "Practise clear product explanations, listening and ethical follow-up for a business or service." },
  { id: "affiliate-beginners-course", title: "Affiliate Beginners Course", category: "Affiliate & Income", icon: "↗", price: 9.90, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-291624&a=epa-169139", description: "An entry-level course covering the basics of affiliate marketing.", opportunity: "Learn the core terms and plan a simple, transparent way to recommend relevant products." },
  { id: "unique-affiliate-guide", title: "Unique Affiliate Guide (UAG)", category: "Affiliate & Income", icon: "↗", price: 15.00, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-305712&a=epa-169139", description: "An affiliate-marketing guide for exploring referral content and audience building.", opportunity: "Use the concepts to test content ideas and create a sustainable, trust-based promotion approach." },
  { id: "whatsapp-automation-mastery", title: "WhatsApp Automation Mastery Course", category: "Automation & Tools", icon: "✧", price: 6.70, affiliateUrl: "https://app.earnerspay.com/buy?p=epr-585085&a=epa-169139", description: "A WhatsApp automation resource focused on streamlining repeated business communication.", opportunity: "Explore compliant follow-up and customer-service workflows for a small business." }
];

const grid = document.querySelector("#course-grid");
const searchInput = document.querySelector("#course-search");
const sortSelect = document.querySelector("#course-sort");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const count = document.querySelector("#course-count");
let activeFilter = "All";

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(value * 1000);
}

function makeCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card";

  const top = document.createElement("div");
  top.className = "course-card-top";
  const icon = document.createElement("span");
  icon.className = "course-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = course.icon;
  const category = document.createElement("span");
  category.className = "category-label";
  category.textContent = course.category;
  top.append(icon, category);

  const title = document.createElement("h3");
  title.textContent = course.title;
  const description = document.createElement("p");
  description.className = "course-description";
  description.textContent = course.description;

  const hook = document.createElement("p");
  hook.className = course.creatorHook ? "creator-hook" : "creator-hook creator-hook-prompt";
  const hookCopy = {
    "Affiliate & Income": "How much could you make monthly with " + course.title + "? Explore the earning model, learn the steps, and see what it may take to turn clicks and referrals into commissions.",
    "Marketing & Ads": "Could " + course.title + " help you build a monthly income skill? Learn how businesses use this skill and how you could work toward paid client projects.",
    "Content & Creator": "What could " + course.title + " mean for your monthly income goals? Explore ways creators build an audience, develop content, and work toward monetisation.",
    "Automation & Tools": "Could you use " + course.title + " to create a useful service or income stream? Explore the workflow, the problem it solves, and ways people may put it to work.",
    "Other Skills": "How could " + course.title + " fit into your monthly earning plan? Explore the skill or model it teaches and how you might apply it to real opportunities."
  };
  hook.textContent = course.creatorHook || hookCopy[course.category] || "What monthly earning potential could " + course.title + " help you work toward? Open the course page to understand the method, requirements, and creator's claims.";

  const opportunityLabel = document.createElement("p");
  opportunityLabel.className = "opportunity-label";
  opportunityLabel.textContent = "Your monthly earning potential";
  const opportunity = document.createElement("p");
  opportunity.className = "opportunity-text";
  opportunity.textContent = course.opportunity;

  const guidance = document.createElement("p");
  guidance.className = "course-guidance";
  guidance.textContent = "Next step: tap View course, read the course page, then scroll to the Order Now button and tap it to continue.";

  const meta = document.createElement("div");
  meta.className = "course-meta";
  const price = document.createElement("div");
  const priceLabel = document.createElement("span");
  priceLabel.className = "price-label";
  priceLabel.textContent = "Course price estimate";
  const priceValue = document.createElement("span");
  priceValue.className = "price-value";
  priceValue.textContent = formatPrice(course.price);
  price.append(priceLabel, priceValue);
  const status = document.createElement("span");
  status.className = "course-status";
  status.textContent = "Naira estimate";
  meta.append(price, status);

  const actions = document.createElement("div");
  actions.className = "course-actions";
  const affiliateUrl = safeExternalUrl(course.affiliateUrl);
  const enroll = document.createElement("a");
  enroll.className = "course-button";
  enroll.textContent = "View course ↗";
  if (affiliateUrl) {
    enroll.href = affiliateUrl;
    enroll.target = "_blank";
    enroll.rel = "sponsored noopener noreferrer";
    enroll.setAttribute("aria-label", "View " + course.title + " course on EarnersPay");
  } else {
    enroll.href = "#courses";
    enroll.classList.add("secondary");
    enroll.textContent = "Link unavailable";
  }
  const details = document.createElement("a");
  details.className = "course-button secondary";
  details.href = "#how-it-works";
  details.textContent = "How it works";
  actions.append(enroll, details);

  card.append(top, title, hook, description, opportunityLabel, opportunity, meta, guidance, actions);
  return card;
}

function getVisibleCourses() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  const sort = sortSelect?.value || "price-asc";
  const visible = courses.filter(course => {
    const matchesCategory = activeFilter === "All" || course.category === activeFilter;
    const searchable = [course.title, course.category, course.description, course.opportunity, course.creatorHook || ""].join(" ").toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  visible.sort((a, b) => {
    if (sort === "price-desc") return b.price - a.price || a.title.localeCompare(b.title);
    if (sort === "name") return a.title.localeCompare(b.title);
    return a.price - b.price || a.title.localeCompare(b.title);
  });
  return visible;
}

function renderCourses() {
  if (!grid) return;
  const visible = getVisibleCourses();
  grid.replaceChildren();

  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    const heading = document.createElement("strong");
    heading.textContent = "No matching courses";
    const message = document.createElement("p");
    message.textContent = "Try another search or choose a different category.";
    empty.append(heading, message);
    grid.append(empty);
  } else {
    visible.forEach(course => grid.append(makeCourseCard(course)));
  }

  if (count) {
    count.textContent = visible.length + (visible.length === 1 ? " course" : " courses") + " · lowest price first";
    if (sortSelect?.value === "price-desc") count.textContent = visible.length + (visible.length === 1 ? " course" : " courses") + " · highest price first";
    if (sortSelect?.value === "name") count.textContent = visible.length + (visible.length === 1 ? " course" : " courses") + " · A–Z";
  }
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "All";
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderCourses();
  });
});

searchInput?.addEventListener("input", renderCourses);
sortSelect?.addEventListener("change", renderCourses);

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#main-nav");
menuToggle?.addEventListener("click", () => {
  const open = nav?.classList.toggle("open") || false;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
}));

const budgetLink = document.querySelector("#budget-link");
budgetLink?.addEventListener("click", () => {
  if (sortSelect) sortSelect.value = "price-asc";
  if (searchInput) searchInput.value = "";
  activeFilter = "All";
  filterButtons.forEach(item => {
    const selected = (item.dataset.filter || "All") === "All";
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  renderCourses();
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

renderCourses();
