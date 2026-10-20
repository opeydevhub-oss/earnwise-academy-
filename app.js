/*
 * Earnwise Academy course catalogue.
 * Replace each affiliateUrl with your real Earners Pay affiliate link.
 * Replace each priceLabel with the verified current course price.
 * Set contactUrl to your WhatsApp DM link before sharing this site.
 */
const SITE_CONFIG = {
  contactUrl: "",
  currencyLabel: "Confirm current price",
};

const courses = [
  {
    id: "web-development",
    title: "Web Development",
    category: "Technology",
    icon: "</>",
    description: "Learn how websites are structured, designed and built for real people and businesses.",
    opportunity: "Freelance website projects, junior web roles, internships and building your own digital products.",
    audience: "People who enjoy problem-solving and building things online.",
    priceLabel: "Confirm current price",
    affiliateUrl: ""
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Creative",
    icon: "✳",
    description: "Explore visual communication, layout, branding and design tools.",
    opportunity: "Freelance design services, social media graphics, brand assets and entry-level design work.",
    audience: "Creative learners who like visuals, composition and storytelling.",
    priceLabel: "Confirm current price",
    affiliateUrl: ""
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Business",
    icon: "↗",
    description: "Understand how businesses attract, reach and serve customers online.",
    opportunity: "Marketing assistant roles, campaign support, freelance services and promoting your own business.",
    audience: "People interested in business, communication and customer behaviour.",
    priceLabel: "Confirm current price",
    affiliateUrl: ""
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Creative",
    icon: "▶",
    description: "Explore editing workflows for short videos, social content and longer-form projects.",
    opportunity: "Editing for creators and small businesses, content production and portfolio-based freelance work.",
    audience: "Learners who enjoy visual storytelling and working with video.",
    priceLabel: "Confirm current price",
    affiliateUrl: ""
  },
  {
    id: "ai-productivity",
    title: "AI Tools & Productivity",
    category: "Technology",
    icon: "✧",
    description: "Learn practical ways to use AI tools for research, ideation and everyday workflows.",
    opportunity: "More efficient work in an existing role, content workflows and support for freelance or business tasks.",
    audience: "Curious beginners who want to use digital tools more effectively.",
    priceLabel: "Confirm current price",
    affiliateUrl: ""
  },
  {
    id: "affiliate-marketing",
    title: "Affiliate Marketing",
    category: "Business",
    icon: "⌁",
    description: "Explore referral links, useful content, audience building and ethical promotion.",
    opportunity: "Building a referral-based side project by connecting relevant products with the right audience. Commissions are not guaranteed.",
    audience: "People willing to learn content creation, trust-building and marketing fundamentals.",
    priceLabel: "Confirm current price",
    affiliateUrl: ""
  }
];

const grid = document.querySelector("#course-grid");
const searchInput = document.querySelector("#course-search");
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

  const opportunityLabel = document.createElement("p");
  opportunityLabel.className = "opportunity-label";
  opportunityLabel.textContent = "Possible opportunities";
  const opportunity = document.createElement("p");
  opportunity.className = "opportunity-text";
  opportunity.textContent = course.opportunity;

  const meta = document.createElement("div");
  meta.className = "course-meta";
  const price = document.createElement("div");
  const priceLabel = document.createElement("span");
  priceLabel.className = "price-label";
  priceLabel.textContent = "Course price";
  const priceValue = document.createElement("span");
  priceValue.className = "price-value";
  priceValue.textContent = course.priceLabel || SITE_CONFIG.currencyLabel;
  price.append(priceLabel, priceValue);
  const status = document.createElement("span");
  status.className = "course-status";
  status.textContent = "Check details";
  meta.append(price, status);

  const actions = document.createElement("div");
  actions.className = "course-actions";
  const affiliateUrl = safeExternalUrl(course.affiliateUrl);
  const enroll = document.createElement("a");
  enroll.className = "course-button";
  enroll.textContent = affiliateUrl ? "View course ↗" : "Course link pending";
  if (affiliateUrl) {
    enroll.href = affiliateUrl;
    enroll.target = "_blank";
    enroll.rel = "sponsored noopener noreferrer";
    enroll.setAttribute("aria-label", "View " + course.title + " course on the provider's website");
  } else {
    enroll.href = "#budget";
    enroll.classList.add("secondary");
    enroll.setAttribute("aria-label", course.title + " enrollment link is being set up; discuss your budget");
  }
  const details = document.createElement("a");
  details.className = "course-button secondary";
  details.href = "#how-it-works";
  details.textContent = "How it works";
  actions.append(enroll, details);

  card.append(top, title, description, opportunityLabel, opportunity, meta, actions);
  return card;
}

function renderCourses() {
  if (!grid) return;
  const query = (searchInput?.value || "").trim().toLowerCase();
  const visible = courses.filter(course => {
    const matchesCategory = activeFilter === "All" || course.category === activeFilter;
    const searchable = [course.title, course.category, course.description, course.opportunity, course.audience].join(" ").toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  grid.replaceChildren();
  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    const heading = document.createElement("strong");
    heading.textContent = "No matching learning paths";
    const message = document.createElement("p");
    message.textContent = "Try another search or choose a different category.";
    empty.append(heading, message);
    grid.append(empty);
  } else {
    visible.forEach(course => grid.append(makeCourseCard(course)));
  }

  if (count) count.textContent = visible.length + (visible.length === 1 ? " learning path" : " learning paths");
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
const contactUrl = safeExternalUrl(SITE_CONFIG.contactUrl);
if (budgetLink && contactUrl) {
  budgetLink.href = contactUrl;
  budgetLink.target = "_blank";
  budgetLink.rel = "noopener noreferrer";
}
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

renderCourses();
