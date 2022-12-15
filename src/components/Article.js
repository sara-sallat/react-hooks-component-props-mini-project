import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  const addEmoji = () => {
    let totalEmojis = "";
    if (minutes < 30) {
      let emoji = " ☕️ ";

      let length = Math.ceil(minutes / 5);
      for (let i = 0; i < length; i++) {
        totalEmojis += emoji;
      }

      return totalEmojis;
    } else {
      let emoji = " 🍱 ";

      let length = Math.ceil(minutes / 10);
      for (let i = 0; i < length; i++) {
        totalEmojis += emoji;
      }

      return totalEmojis;
    }
  };
  return (
    <article>
      <h3>{title}</h3>
      <small>{`${date} · ${addEmoji()} ${minutes} minutes read`}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;