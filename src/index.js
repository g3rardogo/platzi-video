import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";
import App from "./routes/App";

const initialState = {
  user: {},
  playing: {},
  myList: [],
  trends: [
    {
      id: 2,
      slug: "tvshow-2",
      title: "Big Buck Bunny",
      type: "Scripted",
      language: "English",
      year: 2009,
      contentRating: "16+",
      duration: 164,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 3,
      slug: "tvshow-3",
      title: "Elephant Dream",
      type: "Adventure",
      language: "English",
      year: 2002,
      contentRating: "16+",
      duration: 137,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 4,
      slug: "tvshow-4",
      title: "For Bigger Blazes",
      type: "Comedy",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 163,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 5,
      slug: "tvshow-5",
      title: "For Bigger Escape",
      type: "Scripted",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 194,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: 6,
      slug: "tvshow-6",
      title: "For Bigger Fun",
      type: "Scripted",
      language: "English",
      year: 2017,
      contentRating: "16+",
      duration: 124,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      id: 7,
      slug: "tvshow-7",
      title: "For Bigger Joyrides",
      type: "Drama",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 179,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
  ],
  originals: [
    {
      id: 8,
      slug: "tvshow-8",
      title: "For Bigger Meltdowns",
      type: "Action",
      language: "English",
      year: 2012,
      contentRating: "16+",
      duration: 148,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
    {
      id: 9,
      slug: "tvshow-9",
      title: "Sintel",
      type: "Action",
      language: "English",
      year: 2019,
      contentRating: "16+",
      duration: 128,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
    {
      id: 10,
      slug: "tvshow-10",
      title: "Tears of Steel",
      type: "Animation",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 346,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    },
    {
      id: 11,
      slug: "tvshow-11",
      title: "Subaru Outback On Street And Dirt",
      type: "War",
      language: "English",
      year: 2015,
      contentRating: "16+",
      duration: 226,
      cover:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
