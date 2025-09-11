import React, { useContext, useState } from "react";
import { getImageUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import Modal from "./Modal";
import { MovieContext } from "../context";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [showMovieDetail, setShowMovieDetail] = useState(null);

  const { cartValue, setCartValue } = useContext(MovieContext);

  function handleModalClose() {
    setShowModal(false);
  }

  function handleShowMovieDetail(movie) {
    setShowMovieDetail(movie);
    setShowModal(true);
  }

  function handleAddToCart(e, movie) {
    e.stopPropagation();
    console.log(movie);

    const found = cartValue.find((item) => {
      return item.id === movie.id;
    });
    

    if (!found) {
      setCartValue([...cartValue, movie]);
    } else {
      alert("Movie already added");
    }
  }

  return (
    <>
      {showModal && (
        <Modal movie={showMovieDetail} onClose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleShowMovieDetail(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={movie.rating} />
            </div>
            <a
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
