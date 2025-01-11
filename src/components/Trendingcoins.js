import React, { useState, useEffect } from 'react';
import './Trendingcoins.css'

const Trendingcoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
        try {
          const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
          const data = await response.json();
          console.log(data);
          const top3Coins = data.coins.slice(0, 3).map((coin) => ({
            name: coin.item.name,
            symbol: coin.item.symbol,
            price: parseFloat(coin.item.data.price).toFixed(2),
            image:coin.item.thumb
            
          }));
          setTrendingCoins(top3Coins);
        } catch (error) {
          console.error('Error fetching trending coins:', error);
        } finally {
          setLoading(false);
        }
      };
      
    fetchTrendingCoins();
  }, []);

  return (
    <aside className="trending-coins">
      <h3 >Trending Coins (24h)</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trendingCoins.map((coin, index) => (
            <li key={index}>
                <img className="tcsymbol" src={coin.image}/>
              <p className="para1">{coin.name}</p>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Trendingcoins;
