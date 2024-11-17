import React from "react";

export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} lable="Words" />
      <Stat number={stats.numberOfCharacters} lable="Characters" />
      <Stat number={stats.instagramCharactersLeft} lable="Instagram" />
      <Stat number={stats.facebookCharactersLeft} lable="Facebook" />
    </section>
  );
}

function Stat({ number, lable }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{lable}</h2>
    </section>
  );
}
