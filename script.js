fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(response => response.json())
  .then(data => {
    renderTable(data);
  })
  .catch(error => {
    // check for error
    console.error(error);
  });

function renderTable(data) {
  
  const table = document.getElementById('table');

  data.forEach(coin => {
    const row = document.createElement('tr');
    const rankCell = document.createElement('td');
    rankCell.textContent = coin.market_cap_rank;
    row.appendChild(rankCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = coin.name;
    row.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = coin.current_price;
    row.appendChild(priceCell);

    const marketCapCell = document.createElement('td');
    marketCapCell.textContent = coin.market_cap;
    row.appendChild(marketCapCell);

    table.appendChild(row);
  });

  // Append the table to the document body or a container element
  document.body.appendChild(table);
}