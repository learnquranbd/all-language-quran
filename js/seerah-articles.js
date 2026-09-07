/**
 * Long-form articles for Seerah events — keyed by the SEERAH_EVENTS id.
 *
 * The event records carry a 60-word description and a one-line lesson. That is
 * a caption: a reader tapping Badr got 41 words, while every one of the 127
 * Companions around him has an 856-word article. These are the full accounts
 * behind each event — what led to it, what happened, what the Quran says about
 * it, and what the sirah writers draw from it.
 *
 * Fetched by js/article-view.js only when a reader opens an event, never when
 * the tab is opened. js/article-index.js says which events have one.
 *
 * `var`, not `const`: article-view.js reads this off `window`, and a top-level
 * const in a classic script is not a window property.
 *
 * Conventions enforced by `npm test`: sections of {h:{en,bn}, p:[{en,bn}]},
 * bare verse references in the prose (the autolinker makes them tappable),
 * no HTML, and every reference bounds-checked in both languages.
 */

var SEERAH_ARTICLES = {
};

if (typeof module !== 'undefined' && module.exports) module.exports = { SEERAH_ARTICLES };
