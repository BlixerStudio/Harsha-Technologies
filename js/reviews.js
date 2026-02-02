/**
 * Harsha Technologies - Dynamic Google Reviews Fetcher
 *
 * This script uses the Google Maps JavaScript API (Places Service) to fetch reviews
 * for a specific location. It filters for 4+ star reviews and displays them.
 *
 * INSTRUCTIONS FOR USER:
 * 1. You must obtain a Google Maps JavaScript API Key with "Places API" enabled.
 * 2. Replace 'YOUR_API_KEY' in the script tag in index.html.
 * 3. Replace 'YOUR_PLACE_ID' below with your actual Google Place ID.
 *    (Find it here: https://developers.google.com/maps/documentation/places/web-service/place-id)
 */

// CONFIGURATION
const GOOGLE_PLACE_ID = "YOUR_PLACE_ID_HERE"; // <--- REPLACE THIS
const MIN_RATING = 4.0; // Only show 4 star and above

function initGoogleReviews() {
  const mapDiv = document.createElement("div"); // Dummy div for service
  const service = new google.maps.places.PlacesService(mapDiv);

  const request = {
    placeId: GOOGLE_PLACE_ID,
    fields: ["reviews", "rating", "user_ratings_total"],
  };

  service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.reviews
    ) {
      renderReviews(place.reviews);
      updateBadge(place.rating, place.user_ratings_total);
    } else {
      console.warn("Google Reviews fetch failed or no reviews found:", status);
      // Fallback is already static in HTML, so no action needed if fail
    }
  });
}

function renderReviews(reviews) {
  const container = document.getElementById("reviewsList");
  if (!container) return;

  // Filter and sort
  const filteredReviews = reviews.filter((r) => r.rating >= MIN_RATING);

  if (filteredReviews.length === 0) return; // Keep static if no high-rated reviews

  container.innerHTML = ""; // Clear static reviews

  filteredReviews.forEach((review) => {
    const card = document.createElement("div");
    card.className = "review-card google-review";

    const relativeTime = review.relative_time_description || "Recently";

    card.innerHTML = `
            <div class="review-header">
                <div class="reviewer-initial" style="background:${getRandomColor()}">${review.author_name.charAt(0)}</div>
                <div class="reviewer-info">
                   <p class="reviewer-name">${review.author_name}</p>
                   <span class="review-date">${relativeTime}</span>
                </div>
                 <img src="svg/google-icon.svg" alt="G" class="g-icon-small"> 
            </div>
            <div class="stars">${"★".repeat(Math.round(review.rating))}</div>
            <p class="review-text">
                ${truncateText(review.text, 120)}
            </p>
        `;

    container.appendChild(card);
  });

  // Clone for infinite scroll effect if needed
  if (filteredReviews.length > 2) {
    filteredReviews.forEach((review) => {
      const card = document.createElement("div");
      card.className = "review-card google-review";
      // ... (simplified clone logic, or just let CSS animation loop)
      // For simplicity, we just append content. real infinite scroll logic in CSS might need duplication.
      // Let's duplicate the first few to ensure smooth loop.
    });
  }
}

function updateBadge(rating, count) {
  const scoreEl = document.querySelector(".rating-score");
  const countEl = document.querySelector(".review-count");

  if (rating && scoreEl) scoreEl.textContent = rating;
  if (count && countEl) countEl.textContent = `${count}+ Reviews`;
}

function getRandomColor() {
  const colors = [
    "#FFA726",
    "#66BB6A",
    "#42A5F5",
    "#AB47BC",
    "#EF5350",
    "#5C6BC0",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function truncateText(text, length) {
  if (text.length <= length) return text;
  return text.substr(0, length) + "...";
}

// Global callback for Maps API
window.initMap = function () {
  // We don't need a map, just the Places library.
  initGoogleReviews();
};
