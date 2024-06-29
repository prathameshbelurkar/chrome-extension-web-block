const sites = [
  { siteName: "yahoo", url: "https://yahoo.com", keyword: "yahoo" },
];

const currentUrl = window.location.href;

const siteIsBlocked = sites.some((obj) => {
  const cond = currentUrl.includes(obj.keyword) || currentUrl.includes(obj.url);
  if (cond) return true;
  return false;
});

if (siteIsBlocked) {
  document.body.innerHTML = "This page is blocked.";
  document.body.style.textAlign = "center";
}
