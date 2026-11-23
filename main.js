// IT4Trades shared scripts
// Change this placeholder to Sebastian's real LinkedIn profile URL.
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/your-profile-here";

document.addEventListener("DOMContentLoaded", function () {
  setupMobileNav();
  setupAccordions();
  setupTabs();
  setupContactForm();
  setLinkedInLinks();
});

// Mobile hamburger menu
function setupMobileNav() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function () {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Accordion: buttons with aria-controls pointing at a panel
function setupAccordions() {
  document.querySelectorAll(".accordion-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });
}

// Tabs: arrow keys move between tabs, Home/End jump to ends
function setupTabs() {
  document.querySelectorAll("[role='tablist']").forEach(function (list) {
    const tabs = Array.from(list.querySelectorAll("[role='tab']"));
    function activate(tab) {
      tabs.forEach(function (t) {
        const selected = t === tab;
        t.setAttribute("aria-selected", String(selected));
        t.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !selected;
      });
      tab.focus();
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { activate(tab); });
      tab.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") activate(tabs[(i + 1) % tabs.length]);
        if (e.key === "ArrowLeft") activate(tabs[(i - 1 + tabs.length) % tabs.length]);
        if (e.key === "Home") activate(tabs[0]);
        if (e.key === "End") activate(tabs[tabs.length - 1]);
      });
    });
  });
}

// Contact form: validate only, never send data anywhere
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach(function (field) {
      const err = document.getElementById(field.id + "-error");
      const empty = field.value.trim() === "";
      const badEmail = field.type === "email" && !/^\S+@\S+\.\S+$/.test(field.value);
      const problem = empty ? "This field is required." : badEmail ? "Please enter a valid email address." : "";
      if (err) err.textContent = problem;
      if (problem) valid = false;
    });
    const status = document.getElementById("form-status");
    if (valid && status) {
      form.hidden = true;
      status.hidden = false;
      status.focus();
    }
  });
}

// Fill any element marked data-linkedin with the profile URL
function setLinkedInLinks() {
  document.querySelectorAll("[data-linkedin]").forEach(function (el) {
    el.setAttribute("href", LINKEDIN_PROFILE_URL);
  });
}
