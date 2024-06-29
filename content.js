const sites = [
  { siteName: "yahoo", url: "https://yahoo.com", keyword: "yahoo" },
];

const blockedStr = "\n\nThis page is blocked by web blocker.\n\n";

const currentUrl = window.location.href;

const siteIsBlocked = sites.some((obj) => {
  const cond = currentUrl.includes(obj.keyword) || currentUrl.includes(obj.url);
  if (cond) return true;
  return false;
});

if (siteIsBlocked) {
  document.body.innerHTML = blockedStr;
  document.body.style.textAlign = "center";
  document.body.style.padding = "20%";
}
