import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sentiment.css'
const Sentiment = () => {
  const cardsData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.",
      icon: "📰", // Replace with the appropriate icon or use an <img> tag
      bgColor: "#e8fff3", // Light blue background
    },
    {
      id: 2,
      title: "Dui vel quis dignissim",
      description:
        "Amet sapien quam viverra adipiscing condimentum. Sed vitae nisi viverra libero enim.",
      icon: "📈", // Replace with the appropriate icon
      bgColor: "#e8fff3", // Light green background
    },
    {
      id: 3,
      title: "Consectetur adipiscing",
      description:
        "Consectetur et pretium in a bibendum. Sed vitae nisl vivamus lorem ipsum dolor.",
      icon: "💼", // Replace with the appropriate icon
      bgColor: "#e8fff3", // Light orange background
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sentiment-section">
        <h1>Sentiment</h1>
        <p>Key events</p>
    <div className="carousel-section">
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div key={card.id} style={{ padding: "10px" }}>
            <div
              style={{
                background: card.bgColor,
                borderRadius: "10px",
                padding: "20px",
                textAlign: "left",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                margin:"10px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ margin: "0 0 10px 0" }}>{card.title}</h3>
              <p style={{ color: "#666" }}>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    <p>Analyst estimates</p>

    <div className="analyst-section">
        <div className="percentage-element">
     <h1 className="percentage">76%</h1>
     </div>
     <div >
        <img className="ranking-image" src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1736590244/anaest_qrn8kq.png"/>
     </div>
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

export default Sentiment;
