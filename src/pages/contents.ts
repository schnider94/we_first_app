import "styles/style.scss";

import { createApp, createComponent } from "utils/core";
import store from "utils/store";
import { quote as quoteAPI } from "utils/api";

import navbar, { Page } from "components/navbar";
import quote from "components/quote";
import favorites from "components/favorites";

const main = createComponent('main', () => {
    const addQuote = () => {
        const currentQuote = store.config.currentQuote;

        if (!currentQuote || store.quotes.includes(currentQuote)) {
            reloadQuote();

            return;
        }

        store.quotes.push(currentQuote);
        reloadQuote();
    };

    const removeQuote = (quote: string) => {
        const index = store.quotes.findIndex(text => quote === text);
        store.quotes.splice(index, 1);
    };

    const reloadQuote = () => {
        quoteAPI().then(response => {
            store.config.currentQuote = response;
        });
    }

    return [
        quote({
            classes: 'quote-generator',
            onReloadCurrentQuote: reloadQuote,
            onSaveToFavorite: addQuote,
            quote: store.config.currentQuote,
        }),
        favorites({
            classes: 'quote-favorite',
            onRemoveFromFavorite: removeQuote,
            quotes: store.quotes,
        })
    ];
}, ['config', 'quotes']);

const root = createComponent('div', () => [
    navbar({ page: Page.contents }),
    main({}),
]);

createApp('app', root);
