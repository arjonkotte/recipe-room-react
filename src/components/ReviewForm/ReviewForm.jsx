import { useState } from 'react';
import './ReviewForm.css'

export default function ReviewForm({ user, handleReviewSubmit }) {
  const [name, setName] = useState(user ? user.name : '');
  const [review, setReview] = useState('');
  const [starRating, setStarRating] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleReviewSubmit({ name, review, starRating });
    setName(user ? user.name : '');
    setReview('');
    setStarRating(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        {user ? (
          <span>{user.name}</span>
        ) : (
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        )}
      </div>
      <div>
        <label>Comment:</label>
        <textarea id="comment" value={review} onChange={(event) => setReview(event.target.value)} />
      </div>
      <div>
        <label>Rating:</label>
        <select id="rating" value={starRating} onChange={(event) => setStarRating(Number(event.target.value))}>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}
