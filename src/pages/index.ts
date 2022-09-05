import "styles/style.scss";

import { createApp, createComponent } from "utils/core";

import navbar, { Page } from "components/navbar";

const main = createComponent('main', () => {
    return [
        'Home',
    ];
});

const root = createComponent('div', () => [
    navbar({ page: Page.home }),
    main({}),
]);

createApp('app', root);
