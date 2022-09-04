import "styles/style.scss";

import store from "utils/store";

import navbar, { Page } from "components/navbar";
import layout from "components/layout";
import quote from "components/quote";
import favorites from "components/favorites";

const navbarElem = navbar({ page: Page.contents });
const main = layout();
let favoritesElem: HTMLElement;

document.body.append(navbarElem, main);

const renderFavorites = () => {
    if (favoritesElem) favoritesElem.remove();
    favoritesElem = favorites({ quotes: store.quotes, onRemoveFromFavorite: removeQuote });

    main.append(favoritesElem);
};

const addQuote = (quote: string) => {
    if (store.quotes.includes(quote)) return;
    store.quotes.push(quote);

    renderFavorites();
};

const removeQuote = (quote: string) => {
    const index = store.quotes.findIndex(text => quote === text);
    store.quotes.splice(index, 1);

    renderFavorites();
};

const quoteElem = quote({ onSaveToFavorite: addQuote });

main.append(quoteElem);

renderFavorites();
