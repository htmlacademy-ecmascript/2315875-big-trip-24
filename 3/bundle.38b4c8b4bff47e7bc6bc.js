(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class n{getTemplate(){return'<section class="trip-main__trip-info trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const i=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],s=["Amsterdam","Geneva","Chamonix"],l=["everyting","future","present","past"],a=["day","event","time","price","offer"];class r{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n      ${l.map((e=>function(e){return`<div class="trip-filters__filter">\n      <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value=${e} checked>\n      <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n    </div>`}(e))).join("")}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class o{getTemplate(){return'<ul class="trip-events__list">\n    </ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class p{getTemplate(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${a.map((e=>function(e){return`<div class="trip-sort__item  trip-sort__item--${e}">\n      <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" checked>\n      <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n    </div>`}(e))).join("")}\n   </form>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class v{getTemplate(){return'<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">MAR 18</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">Taxi Amsterdam</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n          </p>\n          <p class="event__duration">30M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">20</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers"><li class="event__offer">\n        <span class="event__offer-title">Order Uber</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">20</span>\n      </li></ul>\n        <button class="event__favorite-btn event__favorite-btn--active" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />\n      </svg>\n    </button>\n        <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n      </div>\n    </li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function c(e){return`<fieldset class="event__type-group">\n      <legend class="visually-hidden">Event type</legend>\n      ${e.map((e=>{return`<div class="event__type-item">\n      <input id="event-type-${t=e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${t}</label>\n    </div>`;var t})).join("")}\n    </fieldset>`}function _(e){return`<div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-1">\n        Flight\n      </label>\n      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n        <datalist id="destination-list-1">\n        ${e.map((e=>function(e){return`<option value=${e}></option>`}(e))).join("")}\n        </datalist>\n    </div>`}const d=[{title:"Add luggage",type:"luggage",price:50},{title:"Switch to comfort",type:"comfort",price:80},{title:"Add meal",type:"meal",price:15},{title:"Choose seats",type:"seats",price:5},{title:"Travel by train",type:"train",price:40}],u=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];function m(){return`<section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      <div class="event__available-offers">\n        <div class="event__offer-selector">\n          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n            <label class="event__offer-label" for="event-offer-luggage-1">\n              <span class="event__offer-title">Add luggage</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">30</span>\n            </label>\n        </div>\n        ${d.map((e=>{return t=e.title,`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n=e.type}-1" type="checkbox" name="event-offer-${n}" checked>\n        <label class="event__offer-label" for="event-offer-${n}-1">\n          <span class="event__offer-title">${t}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n    </div>`;var t,n})).join("")}\n      </div>\n    </section>`}function h(e){var t;return`<section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n      ${e?`<div class="event__photos-container">${t=e,`<div class="event__photos-tape">\n      ${t.map((e=>`<img class="event__photo" src="img/photos/${e}" alt="Event photo">`)).join("")}\n    </div>`}</div>`:""}\n    </section>`}class f{getTemplate(){return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            ${c(i)}\n          </div>\n        </div>\n\n        ${_(s)}\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Cancel</button>\n      </header>\n      <section class="event__details">\n        ${m()}\n        ${h(u)}\n      </section>\n    </form>\n  </li>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class g{getTemplate(){return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n            <div class="event__type-list">\n              ${c(i)}\n            </div>\n          </div>\n\n          ${_(s)}\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n              &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n        </header>\n        <section class="event__details">\n          ${m()}\n          ${h()}\n        </section>\n      </form>\n    </li>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const b=document.querySelector(".trip-main"),y=document.querySelector(".trip-controls__filters"),$=document.querySelector(".trip-events"),E=new class{constructor(e,t){this.infoContainer=e,this.filterContainer=t}init(){t(new n,this.infoContainer,"afterbegin"),t(new r,this.filterContainer)}}(b,y),T=new class{eventListComponent=new o;constructor(e){this.sortingContainer=e}init(){t(new p,this.sortingContainer),t(this.eventListComponent,this.sortingContainer),t(new f,this.eventListComponent.getElement()),t(new g,this.eventListComponent.getElement());for(let e=0;e<3;e++)t(new v,this.eventListComponent.getElement())}}($);E.init(),T.init()})();
//# sourceMappingURL=bundle.38b4c8b4bff47e7bc6bc.js.map