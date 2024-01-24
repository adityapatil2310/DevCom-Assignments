import React from "react";

export default function Rubik() {
  return (
    <div className="container my-5 hobby-content">
      <h1>Rubik's Cube</h1>
      <img
        id="rubik-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTMRcL87OGsnsNZ4ZiOjaIQlGBwO50_xNkQ&usqp=CAU"
        alt=""
      />
      <div className="hobby-text">
        <p>
          Solutions to complex problems are most simple, but that does not mean
          they are easy. Rubik's Cube helps to uncomplicate thinking, declutter
          the mind, and build patience, perspective, and process. Solving a
          Rubik's cube requires and also improves reflexes and brain-eye-hand
          coordination. Especially speed-cubing increases finger dexterity.
          Solving the Rubik's Cube often requires unconventional thinking and
          creative problem-solving.
        </p>
        <p>
          At first I didn't know what it actually meant to solve a Rubik's cube,
          I used to think solving the cube only means to bring one colour on one
          side. Later I discovered that all colours should have its own face.
          One of my friends knew how to solve it, he then taught me the basics
          and I further developed my skills in it by watching a few YouTube
          videos. Now I can solve the cube within 1 min.
        </p>
      </div>
    </div>
  );
}
