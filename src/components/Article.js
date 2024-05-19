export default function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) {
  function minutesReadEmoji(minutes) {
    const t = Math.ceil(minutes / 5);
    const emojiArr = [];
    if (t < 6) {
      for (let i = 0; i < t; i++) {
        emojiArr.push("☕️");
      }
    } else {
      const t = Math.ceil(minutes / 10);
      for (let i = 0; i < t; i++) {
        emojiArr.push("🍱");
      }
    }
    return emojiArr.map((emoji) => emoji);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {minutesReadEmoji(minutes)} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}
