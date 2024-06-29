import "./App.css";
import { useState } from "react";

const data = [
  { siteName: "yahoo", url: "https://yahoo.com", keyword: "yahoo" },
];

function App() {
  const [numSites, setNumSites] = useState(0);

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
      <p>Currently {numSites} sites are blocked!</p>
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
