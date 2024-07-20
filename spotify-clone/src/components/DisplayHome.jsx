import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";

import SongItem from "./SongItem";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {

  const {songsData,albumsData} = useContext(PlayerContext)
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              nmae={item.name}
              image={item.image}
              id={item._id}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              nmae={item.name}
              image={item.image}
              id={item._id}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
