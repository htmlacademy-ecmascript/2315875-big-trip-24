import { createPhotosTape } from './photos-tape';

export function createPointDestination(photos) {
  const photosContainer = photos ? `<div class="event__photos-container">${createPhotosTape(photos)}</div>` : '';

  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
      ${photosContainer}
    </section>`
  );
}
