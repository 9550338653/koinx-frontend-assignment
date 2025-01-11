import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sentiment.css";
import './Youmaylike.css'
const Youmaylike = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from CoinGecko API
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        console.log(data);
        const formattedData = data.coins.map((coin) => ({
          id: coin.item.id,
          name: coin.item.name,
          price: (coin.item.price_btc * 30000).toFixed(2), // Approx. BTC to USD conversion
          symbol: coin.item.symbol.toUpperCase(),
          marketCapRank: coin.item.market_cap_rank,
          image: coin.item.large,
          sparkline: coin.item.data.sparkline,
        }));
        setCoinsData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="sentiment-section">
      <h2>You May also like</h2>
      <p>Check out the most trending cryptocurrencies!</p>

      <div className="carousel-section">
        <Slider {...settings}>
          {coinsData.map((coin) => (
            <div key={coin.id} className="coin-card">
              <div
                style={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  margin:"10px"
                }}
              >
                <div className="logocon">
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "10px",
                  }}
                  className="imageeee"
                />
                
                <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                  {coin.symbol}
                </p>
                </div>
                <p style={{ margin: "5px 0", color: "#666" }}>
                   ${coin.price}
                </p>
                
                <img src={coin.sparkline} alt="sparkline" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <h2>Trending Coins</h2>
      <div className="carousel-section">
        <Slider {...settings}>
          {coinsData.map((coin) => (
            <div key={coin.id} className="coin-card">
              <div
                style={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  margin:"10px"

                }}
              >

            <div className="logocon">

                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "10px",
                    
                  }}
                  className="imageeee"
                />
                <p className="paraaelement" style={{margin: "5px 0", fontWeight: "bold" }}>
                  {coin.symbol}
                </p>
                </div>
                <p style={{ margin: "5px 0", color: "#666" }}>
                  ${coin.price}
                </p>
                
                <img src={coin.sparkline} alt="sparkline" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom Arrow Component
const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [direction === "left" ? "left" : "right"]: "10px",
        zIndex: 2,
        cursor: "pointer",
        fontSize: "20px",
        padding: "10px",
        background: "#fff",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {direction === "left" ? "⬅️" : "➡️"}
    </div>
  );
};

export default Youmaylike;
