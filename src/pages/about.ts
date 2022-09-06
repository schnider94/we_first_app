import "styles/style.scss";

import { createApp, createComponent } from "utils/core";
import store from "utils/store";

import navbar, { Page } from "components/navbar";
import aboutForm from "components/about-form";

const main = createComponent('main', () => {
    const validateName = () => {
        if (!store.form.name) {
            store.form.hasErrorName = true;
            return false;
        }

        store.form.hasErrorName = false;
        return true;
    };

    const validateEmail = () => {
        if (!store.form.email) {
            store.form.hasErrorEmail = true;
            return false;
        }

        store.form.hasErrorEmail = false;
        return true;
    };

    const validateRating = () => {
        if (!store.form.rating || store.form.rating < 1 || store.form.rating > 10) {
            store.form.hasErrorRating = true;
            return false;
        }

        store.form.hasErrorRating = false;
        return true;
    };

    const validateSecret = () => {
        if (!store.form.secret) {
            store.form.hasErrorSecret = true;
            return false;
        }

        store.form.hasErrorSecret = false;
        return true;
    };

    const submit = (event: SubmitEvent) => {
        event.preventDefault();

        let isValid = true;

        isValid = validateName() ? isValid : false;
        isValid = validateEmail() ? isValid : false;
        isValid = validateRating() ? isValid : false;
        isValid = validateSecret() ? isValid : false;

        if (isValid) {
            let mail = 'mailto:fabian.ladenstein@stud.fh-campuswien.ac.at?'
            mail += `subject=New Rating&`;
            mail += `cc=${store.form.email}&`;
            mail += `body=My Name: ${store.form.name}; Rating: ${store.form.rating}; Secret: ${store.form.secret}`;

            location.href = mail;
        }
    };

    return [
        createComponent('h1', () => ['Give some Feedback'])({}),
        aboutForm({
            classes: 'form',
            onSubmit: submit,
            onBlurName: value => {
                store.form.name = value;
                validateName();
            },
            onBlurRating: value => {
                store.form.rating = parseInt(value);
                validateRating();
            },
            onBlurEmail: value => {
                store.form.email = value;
                validateEmail();
            },
            onBlurSecret: value => {
                store.form.secret = value;
                validateSecret();
            },
        }),
    ];
});

const root = createComponent('div', () => [
    navbar({ page: Page.about }),
    main({}),
]);

createApp('app', root);
