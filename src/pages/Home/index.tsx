import {
  IonContent,
  IonPage,
  IonIcon,
  IonCard,
  IonCardSubtitle,
} from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";
import { menu, searchSharp } from "ionicons/icons";
import Food from "../../assets/food.jpeg";

const Home: React.FC = () => {
  const [foods] = useState([
    {
      id: 1,
      image: Food,
      name: "comida 01",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 2,
      image: Food,
      name: "comida 02",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 21,
      image: Food,
      name: "comida 02",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 3,
      image: Food,
      name: "comida 03",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 4,
      image: Food,
      name: "comida 04",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 5,
      image: Food,
      name: "comida 05",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 6,
      image: Food,
      name: "comida 06",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 7,
      image: Food,
      name: "comida 07",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 8,
      image: Food,
      name: "comida 08",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 9,
      image: Food,
      name: "comida 09",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 10,
      image: Food,
      name: "comida 010",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 11,
      image: Food,
      name: "comida 011",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 12,
      image: Food,
      name: "comida 012",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 13,
      image: Food,
      name: "comida 013",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 14,
      image: Food,
      name: "comida 014",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 15,
      image: Food,
      name: "comida 015",
      price: 200.01,
      description: "é uma comida muito boa",
    },
    {
      id: 16,
      image: Food,
      name: "comida 016",
      price: 200.01,
      description: "é uma comida muito boa",
    },
  ]);

  return (
    <IonPage>
      <IonContent fullscreen style={{ backgroundColor: "#666" }}>
        <div className="content">
          <div className="header">
            <button>
              <IonIcon icon={menu} size="large" style={{ color: "#666" }} />
            </button>
            <button>
              <IonIcon
                icon={searchSharp}
                size="large"
                style={{ color: "#666" }}
              />
            </button>
          </div>

          <div className="itens">
            {foods.map((item) => {
              return (
                <IonCard class="item__card">
                  <img src={item.image} alt={item.name} />
                  <IonCardSubtitle color="white">{item.name}</IonCardSubtitle>
                </IonCard>
              );
            })}
          </div>

          <h2 style={{ color: "#fff", paddingLeft: "20px" }}>Principais</h2>
          <div className="foods">
            {foods.map((item) => {
              return (
                <IonCard class="foods__card">
                  <img src={item.image} alt={item.name} />
                  <IonCardSubtitle color="white" className="foods__title">
                    {item.name}{" "}
                  </IonCardSubtitle>
                </IonCard>
              );
            })}
          </div>

          
          <h2 style={{ color: "#fff", paddingLeft: "20px" }}>Ofertas do dia</h2>
          <div className="foods">
            {foods.map((item) => {
              return (
                <IonCard class="foods__card">
                  <img src={item.image} alt={item.name} />
                  <IonCardSubtitle color="white" className="foods__title">
                    {item.name}{" "}
                  </IonCardSubtitle>
                </IonCard>
              );
            })}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;