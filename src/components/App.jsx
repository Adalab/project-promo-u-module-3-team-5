//imports dependencias, imagenes, componentes, stylos

import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";

import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import Form from "./Project/Form";
import CardPreview from "./Project/CardPreview";

function App() {
  //funciones, variables, handles,

  const dataObject = {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "https://placedog.net/480/580?r",
    photo: "https://placekitten.com/600/500",
  };
  const [data, setData] = useState(dataObject);

  const [error, setError] = useState("");
  const [cardSectionIsVisible, setCardSectionIsVisible] = useState(false);
  const [cardUrl, setCardUrl] = useState("https://enlace-de-muestra.es/");

  const handleInput = (ev) => {
    setCardSectionIsVisible(false);
    const inputId = ev.target.id;
    const inputValue = ev.target.value;

    setData({ ...data, [inputId]: inputValue });
  };

  const fetchInfoCard = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        if (responseJSON.success === false) {
          setError("Error en el servidor");
        } else {
          setError("");
          setCardUrl(responseJSON.cardURL);
          // localStorage.setItem('datainfo', JSON.stringify(data));
        }
      });
  };

  const handleClickCreateCard = () => {
    if (
      data.name === "" ||
      data.slogan === "" ||
      data.repo === "" ||
      data.demo === "" ||
      data.technologies === "" ||
      data.desc === "" ||
      data.autor === "" ||
      data.job === ""
    ) {
      setError("Te has dejado campos por rellenar");
    } else {
      fetchInfoCard();
      // setError("");
    }
    setCardSectionIsVisible(true);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  //html
  return (
    <div className="container">
      <Header />
      <main className="main">
        <CardPreview />
        <Form />
      </main>
    </div>
  );
}

export default App;
