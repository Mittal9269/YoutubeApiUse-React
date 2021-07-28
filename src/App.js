import "./styles.css";
import YouTube from "react-youtube";
import { useState } from "react";
// import youtubeApi from "./youtube";

export default function App() {
  const [data, setData] = useState([]);
  const seachOne = () => {
    let val = "education loan";
    fetch(
      "https://www.googleapis.com/youtube/v3/search?q=" +
        val +
        "&part=snippet&maxResults=5&key=AIzaSyC5trB7ouOy__tKhG0d9-Ip4SxdSf-4C0M",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then((res) => res.json())
      .then((fetchedata) => {
        console.log(fetchedata);
        // let data = ;
        setData(fetchedata.items);
        // data.map((val, index) => {
        //   return (
        //     <div>
        //       <YouTube
        //         videoId={val.id.videoId}
        //         opts={opts}
        //         onReady={_onReady}
        //       />
        //     </div>
        //   );
        // });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={seachOne}></button>
      {data !== undefined &&
        data.length !== 0 &&
        data.map((item) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;

          return (
            <li key={id} className="card">
              <a href={`https://www.youtube.com/watch?v=${id.videoId}`}>
                <p>
                  <img
                    width={medium.width}
                    height={medium.height}
                    src={medium.url}
                    alt="sometinth"
                  />
                </p>
              </a>
              <h1>{title}</h1>
            </li>
          );
        })}
    </div>
  );
}
