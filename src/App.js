import React, { useState } from "react";
import "./App.css";

const animes = [
  {
    title: "Naruto",
    image:
      "https://i2.wp.com/librairielabourse.com/wp-content/uploads/2016/11/naruto-wallpaper-Naruto-HD-Wallpaper-in-HD.jpg?fit=1170%2C731&ssl=1",
    quote: "¡Nunca me doy por vencido, ese es mi camino ninja!",
    motivational: "Sé fuerte y valiente como un ninja",
    review:
      "Naruto es un anime que sigue la historia de un joven ninja con un gran sueño: convertirse en el Hokage, el líder de su aldea.",
    colors: "Naranja, Negro, Blanco",
  },
  {
    title: "One Piece",
    image:
      "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/10/05/one-piece-film-red.jpeg",
    quote: "¡Voy a ser el Rey de los Piratas!",
    motivational: "Nunca te rindas en la búsqueda de tus sueños",
    review:
      'One Piece sigue las aventuras de Monkey D. Luffy y su tripulación en busca del tesoro definitivo, el "One Piece".',
    colors: "Rojo, Amarillo, Azul",
  },
  {
    title: "Dragon Ball",
    image:
      "https://imgmedia.larepublica.pe/640x371/larepublica/migration/images/LJE4TYPS6VA6JOOTO4MRKWHDAM.webp",
    quote: "¡Yo soy la esperanza del universo!",
    motivational: "Con perseverancia, puedes superar cualquier obstáculo",
    review:
      "Dragon Ball narra las aventuras de Goku, un guerrero Saiyan, en su búsqueda de las esferas del dragón para proteger la Tierra.",
    colors: "Naranja, Azul, Amarillo",
  },
  {
    title: "Kimetsu no Yaiba",
    image: "https://i.ebayimg.com/images/g/ZaIAAOSwc69iKZcO/s-l1200.webp",
    quote: "¡Mata demonios con un corazón puro!",
    motivational: "La pureza de corazón vence cualquier maldad",
    review:
      "Kimetsu no Yaiba sigue a Tanjiro Kamado en su misión para salvar a su hermana y derrotar a los demonios que amenazan a la humanidad.",
    colors: "Negro, Verde, Blanco",
  },
  {
    title: "Digimon",
    image: "https://pics.filmaffinity.com/digimon_adventure-763330122-mmed.jpg",
    quote: "¡Digievolucionar!",
    motivational: "La evolución personal es la clave del éxito",
    review:
      "Digimon es una serie sobre un grupo de niños que se encuentran en el mundo digital, donde deben entrenar a sus Digimon para salvar ambos mundos.",
    colors: "Azul, Naranja, Blanco",
  },
  {
    title: "Super Campeones",
    image:
      "https://phantom-marca-mx.unidadeditorial.es/edd7cbe71001dfc7faa9abdb2e775303/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/10/15/16974032874906.jpg",
    quote: "¡Un balón y un campo de fútbol son todo lo que necesito!",
    motivational: "El trabajo en equipo te lleva a la victoria",
    review:
      "Super Campeones sigue las aventuras de Oliver Atom y su sueño de convertirse en el mejor jugador de fútbol del mundo.",
    colors: "Blanco, Azul, Rojo",
  },
  {
    title: "One Punch Man",
    image: "https://es.web.img3.acsta.net/pictures/17/02/27/17/41/046707.jpg",
    quote: "¡Soy un héroe por diversión!",
    motivational: "La verdadera fuerza viene del interior",
    review:
      "One Punch Man cuenta la historia de Saitama, un héroe que puede derrotar a cualquier enemigo con un solo golpe pero busca un verdadero desafío.",
    colors: "Amarillo, Rojo, Blanco",
  },
  {
    title: "Pokémon",
    image:
      "https://internovam.com/blog/wp-content/uploads/2016/07/Screenshot_3.jpg",
    quote: "¡Atrápalos ya!",
    motivational: "Nunca dejes de explorar y aprender",
    review:
      "Pokémon sigue las aventuras de Ash Ketchum y su compañero Pikachu en su viaje para convertirse en el mejor entrenador Pokémon.",
    colors: "Amarillo, Negro, Rojo",
  },
  {
    title: "Caballeros del Zodiaco",
    image:
      "https://www.mundodeportivo.com/alfabeta/hero/2021/07/Cual-es-el-orden-para-ver-Los-Caballeros-del-Zodiaco.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    quote: "¡Mi cosmos arde como el sol!",
    motivational: "El poder del cosmos está en tu interior",
    review:
      "Los Caballeros del Zodiaco narra las aventuras de los caballeros que luchan por proteger a la diosa Atenea y salvar al mundo.",
    colors: "Azul, Dorado, Blanco",
  },
  {
    title: "Fairy Tail",
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/11/92/1192dc9ad4bf695e242fbdcf8f72a72c.jpg",
    quote: "Nosotros somos Fairy Tail, y no hay nadie que pueda detenernos.",
    motivational: "La fuerza de la amistad puede superar cualquier obstáculo.",
    review:
      "Fairy Tail sigue las aventuras del gremio de magos más famoso y poderoso de Fiore, en su lucha contra las fuerzas del mal.",
    colors: "Azul, Blanco, Rojo",
  },
  {
    title: "Death Note",
    image:
      "https://img.lazcdn.com/g/p/a28f1c178e7c102cb4a85f4d1a144d43.jpg_720x720q80.jpg",
    quote: "El humano cuyo nombre sea escrito en este cuaderno morirá.",
    motivational: "El poder de cambiar el mundo está en tus manos.",
    review:
      "Death Note sigue la historia de Light Yagami, un estudiante que descubre un cuaderno con el poder de matar a cualquiera cuyo nombre sea escrito en él.",
    colors: "Negro, Blanco, Rojo",
  },
  {
    title: "Sakura Card Captor",
    image:
      "https://m.media-amazon.com/images/I/71tdjWr51xL._AC_UF894,1000_QL80_.jpg",
    quote: "¡Libérate, carta mágica!",
    motivational: "El coraje y la magia están en tu corazón.",
    review:
      "Sakura Card Captor narra la historia de Sakura Kinomoto, una niña que debe recuperar las cartas mágicas que ha liberado accidentalmente.",
    colors: "Rosa, Blanco, Amarillo",
  },
  {
    title: "Sailor Moon",
    image:
      "https://www.mundodeportivo.com/alfabeta/hero/2023/04/sailor-moon.1682035591.1428.jpeg?width=1200",
    quote: "¡En el nombre de la luna, te castigaré!",
    motivational: "La justicia y el amor prevalecerán siempre.",
    review:
      "Sailor Moon sigue las aventuras de Usagi Tsukino, una chica que se transforma en la guerrera Sailor Moon para luchar contra las fuerzas del mal.",
    colors: "Azul, Blanco, Amarillo",
  },
  {
    title: "Boku no Hero",
    image:
      "https://www.mundodeportivo.com/alfabeta/hero/2023/05/descubre-como-ver-my-hero-academia-sin-relleno.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    quote: "¡Voy a ser un héroe que salva a todos con una sonrisa!",
    motivational:
      "No necesitas un poder para ser un héroe, solo un corazón valiente.",
    review:
      "Boku no Hero sigue a Izuku Midoriya, un chico sin poderes en un mundo donde todos tienen habilidades especiales, en su viaje para convertirse en el héroe más grande.",
    colors: "Verde, Blanco, Negro",
  },
];

const effects = [
  "zoom",
  "slide-left",
  "slide-right",
  "rotate",
  "fade-in",
  "flip",
];

const getColorStyledText = (colors) => {
  const colorMap = {
    "Naranja": "orange",
    "Negro": "black",
    "Blanco": "white",
    "Rojo": "red",
    "Azul": "blue",
    "Verde": "green",
    "Amarillo": "yellow",
    "Dorado": "gold",
    "Rosa": "pink",
  };

  return colors.split(', ').map(color => {
    const colorLowerCase = color.toLowerCase();
    const colorName = colorLowerCase.charAt(0).toUpperCase() + colorLowerCase.slice(1);
    const styleColor = colorMap[colorName] || 'black';
    const backgroundColor = styleColor === 'white' ? 'black' : 'transparent';
    const textColorStyle = `color: ${styleColor}; font-weight: bold; background-color: ${backgroundColor}; padding: 0 4px; border-radius: 2px;`;
    return `<span style="${textColorStyle}">${color}</span>`;
  }).join(', ');
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [effect, setEffect] = useState("");

  const handleWelcomeClick = () => {
    setShowWelcome(false);
  };

  const handleAnimeClick = (anime, effect) => {
    setSelectedAnime(anime);
    setEffect(effect);
  };

  const handleBackClick = () => {
    setSelectedAnime(null);
  };

  if (showWelcome) {
    return (
      <div className="welcome">
        <div className="welcome-background"></div>
        <h1>¡Bienvenido a mi fiesta de cumpleaños!</h1>
        <h2>Ever Enrique Navarro Figueroa</h2>
        <p>Lugar: Mi residencia</p>
        <p>Hora: Desde las 9 pm</p>
        <button onClick={handleWelcomeClick} className="accept-button">
          Aceptar y descubrir más
        </button>
      </div>
    );
  }

  if (selectedAnime) {
    return (
      <div className="anime-detail">
       
        <div className={`anime-container ${effect}`}>
          <h1>{selectedAnime.title}</h1>
          <img src={selectedAnime.image} alt={selectedAnime.title} className="anime-img" />
          <div className="anime-details">
            <p><strong>Frase:</strong> "{selectedAnime.quote}"</p>
            <p>{selectedAnime.review}</p>
            <p>
              <strong>Colores sugeridos:</strong>
              <span dangerouslySetInnerHTML={{ __html: getColorStyledText(selectedAnime.colors) }} />
            </p>
            <p><strong>Frase motivacional:</strong> "{selectedAnime.motivational}"</p>
            <p><strong>Instrucción:</strong> Lleva tu suéter de {selectedAnime.title} para celebrar.</p>
            <p>Si no tienes el suéter del anime, lleva tu mejor outfit con los colores sugeridos que representan la esencia de ese anime.</p>
          </div>
          <button onClick={handleBackClick} className="change-anime-button">¿Quieres cambiar de anime?</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>¡Invitación de Cumpleaños Anime!</h1>
      <div className="anime-cards">
        {animes.map((anime, index) => (
          <div
            key={index}
            className="anime-card"
            onClick={() => handleAnimeClick(anime, effects[index % effects.length])}
          >
            <img src={anime.image} alt={anime.title} className="anime-img" />
            <h2>{anime.title}</h2>
            <p>"{anime.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
