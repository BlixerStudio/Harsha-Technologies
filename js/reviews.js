/**
 * Harsha Technologies - Dynamic Google Reviews Fetcher (Secure Vercel API Version)
 *
 * This script fetches Google Reviews securely from our Vercel Serverless Function (/api/reviews)
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reviewsList");
  const fallbackComments = container ? container.innerHTML : ""; // Save static reviews in case of API failure

  async function fetchGoogleReviews() {
    if (!container) return;

    try {
      // Show loading state
      container.innerHTML = `<div class="review-card" style="text-align:center"><p class="review-text">Loading verified Google Reviews...</p></div>`;

      // Fetch from our secure Vercel API endpoint
      const response = await fetch('/api/reviews');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data && data.reviews && data.reviews.length > 0) {
        renderGoogleReviews(data.reviews);
      } else {
        // Fallback to static if no reviews found but API succeeded
        container.innerHTML = fallbackComments;
      }
    } catch (error) {
      console.error("Failed to fetch dynamic Google Reviews, falling back to static reviews.", error);
      // Fallback to static HTML if the API fails or is not configured yet
      container.innerHTML = fallbackComments;
    }
  }

  function renderGoogleReviews(reviews) {
    if (!container) return;

    container.innerHTML = ""; // Clear loader/static

    // Filter for 4+ star reviews
    const highRated = reviews.filter(r => r.rating >= 4);
    const reviewsToShow = highRated.length > 0 ? highRated : reviews;

    reviewsToShow.forEach(review => {
      const card = document.createElement("div");
      card.className = "review-card google-review";

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
          <div>
            <div class="stars" style="color: #fbbc04; font-size: 1.2rem; margin-bottom: 5px;">${"★".repeat(Math.round(review.rating))}</div>
            <p class="review-author" style="margin: 0; font-weight: 600; color: #333;">${review.author_name}</p>
            <span style="font-size: 0.8rem; color: #777;">${review.relative_time_description}</span>
          </div>
          ${review.profile_photo_url
          ? `<img src="${review.profile_photo_url}" alt="${review.author_name}" style="width: 40px; height: 40px; border-radius: 50%;">`
          : `<div style="width: 40px; height: 40px; border-radius: 50%; background: #0056b3; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">${review.author_name.charAt(0)}</div>`
        }
        </div>
        <p class="review-text" style="font-size: 0.95rem; line-height: 1.5; color: #555;">
            "${truncateText(review.text, 150)}"
        </p>
      `;
      container.appendChild(card);
    });

    // Duplicate reviews to create the continuous scrolling effect
    // We append the same array again to the DOM
    if (reviewsToShow.length > 0) {
      reviewsToShow.forEach(review => {
        const card = document.createElement("div");
        card.className = "review-card google-review";

        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div>
              <div class="stars" style="color: #fbbc04; font-size: 1.2rem; margin-bottom: 5px;">${"★".repeat(Math.round(review.rating))}</div>
              <p class="review-author" style="margin: 0; font-weight: 600; color: #333;">${review.author_name}</p>
              <span style="font-size: 0.8rem; color: #777;">${review.relative_time_description}</span>
            </div>
            ${review.profile_photo_url
            ? `<img src="${review.profile_photo_url}" alt="${review.author_name}" style="width: 40px; height: 40px; border-radius: 50%;">`
            : `<div style="width: 40px; height: 40px; border-radius: 50%; background: #0056b3; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">${review.author_name.charAt(0)}</div>`
          }
          </div>
          <p class="review-text" style="font-size: 0.95rem; line-height: 1.5; color: #555;">
              "${truncateText(review.text, 150)}"
          </p>
        `;
        container.appendChild(card);
      });
    }
  }

  function truncateText(text, length) {
    if (!text) return "";
    if (text.length <= length) return text;
    return text.substr(0, length) + "...";
  }

  // Execute the fetch
  fetchGoogleReviews();
});
