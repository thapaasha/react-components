import { useState } from "react";

function StartRating({ maxRating = 5, defaultRating }) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const handleClick = (rating) => {
    setRating(rating);
  };
  return (
    <div className="flex gap-3">
      <div className="flex gap-2">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleClick(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            hoverDisplay={() => setTempRating(i + 1)}
            hoverLeave={() => setTempRating(0)}
          />
        ))}
      </div>
      <p>{tempRating || rating || ""}</p>
    </div>
  );
}

export default StartRating;

export function Star({ onRate, full, hoverDisplay, hoverLeave }) {
  return (
    <div>
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FBDC3E"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FBDC3E"
          class="w-6 h-6"
          onClick={onRate}
          onMouseEnter={hoverDisplay}
          onMouseLeave={hoverLeave}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FBDC3E"
          class="w-6 h-6"
          onClick={onRate}
          onMouseEnter={hoverDisplay}
          onMouseLeave={hoverLeave}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      )}
    </div>
  );
}
