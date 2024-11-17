import React, { useState } from "react";

import Textarea from "./Textarea";
import Stats from "./Stats";
import { FACEBOOK_MAX_CHAR, INSTAGRAM_MAX_CHAR } from "./constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHAR - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHAR - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
