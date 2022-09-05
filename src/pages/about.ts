import "styles/style.scss";

import { createApp, createComponent } from "utils/core";
import store from "utils/store";

import navbar, { Page } from "components/navbar";
import aboutForm from "components/about-form";

const main = createComponent('main', () => {
    return [
        createComponent('h1', () => ['Give some Feedback'])({}),
        aboutForm({
            classes: ['form'],
            onSubmit: event => event.preventDefault(),
            name: store.form.name,
            rating: store.form.rating,
            email: store.form.email,
            secret: store.form.secret,
            onBlurName: value => store.form.name = value,
            onBlurRating: value => store.form.rating = parseInt(value),
            onBlurEmail: value => store.form.email = value,
            onBlurSecret: value => store.form.secret = value,
        }),
    ];
});

const root = createComponent('div', () => [
    navbar({ page: Page.about }),
    main({}),
]);

createApp('app', root);
