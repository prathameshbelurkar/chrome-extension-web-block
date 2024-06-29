import { useState, useEffect } from "react";
import "./App.css";

import data from "./sites";

function App() {
  const [numSites, setNumSites] = useState(data.length);

  useEffect(() => {
    const currentUrl = window.location.href;

    const siteIsBlocked = data.some((obj) => {
      const cond =
        currentUrl.includes(obj.keyword) || currentUrl.includes(obj.url);
      if (cond) return true;
      return false;
    });

    if (siteIsBlocked) {
      document.body.innerHTML = "This page is blocked.";
      document.body.style.textAlign = "center";
    }
  }, [numSites]);

  const onSubmit = (e) => {
    e.preventDefault();
    const { siteName, url, keyword } = e.target;

    if (!siteName.value || !url.value || !keyword.value) return;

    data.unshift({
      siteName: siteName.value,
      url: url.value,
      keyword: keyword.value,
    });
    setNumSites((num) => num + 1);
  };

  return (
    <div className="app-container">
      <h1>Web Blocker</h1>

      <p>Blocked sites: {numSites}</p>
      {data.map((obj) => (
        <p key={`${obj.url}-${Math.random()}`}>{obj.url}</p>
      ))}

      <h1>Add Sites</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="siteName">Website name</label>
          <input id="siteName" type="text" />
        </div>

        <div>
          <label htmlFor="url">URL</label>
          <input id="url" type="url" />
        </div>

        <div>
          <label htmlFor="keyword">Keyword</label>
          <input id="keyword" type="text" />
        </div>

        <button type="submit">Add</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default App;
