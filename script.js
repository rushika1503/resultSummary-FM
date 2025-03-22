const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];
  
  const summaryList = document.getElementById('summary-list');
  
  data.forEach(item => {
    const div = document.createElement('div');
    div.classList.add(item.category.toLowerCase()); // e.g., .reaction, .memory
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${item.icon}" alt="${item.category}" width="20" />
        ${item.category}
      </div>
      <span><strong>${item.score}</strong> / 100</span>
    `;
    summaryList.appendChild(div);
  });
  