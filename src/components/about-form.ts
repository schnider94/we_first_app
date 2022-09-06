import { createComponent, HTMLProps } from "utils/core";
import store from "utils/store";
import button from "./standard/button";

interface Props extends HTMLProps {
    onBlurName: (value: string) => void,
    onBlurRating: (value: string) => void,
    onBlurEmail: (value: string) => void,
    onBlurSecret: (value: string) => void,
}

export default createComponent<Props>('form', (props: Props) => {
    return [
        createComponent('input', undefined, ['form'])({
            classes: () => store.form.hasErrorName ? 'has-error' : undefined,
            onBlur: event => props.onBlurName((event.target as HTMLInputElement).value),
            attributes: {
                placeholder: 'How can we call you?',
                type: 'text',
            },
        }),
        createComponent('input', undefined, ['form'])({
            classes: () => store.form.hasErrorRating ? 'has-error' : undefined,
            onBlur: event => props.onBlurRating((event.target as HTMLInputElement).value),
            attributes: {
                placeholder: 'What are you rating us?',
                min: 1,
                max: 10,
                type: 'number',
            },
        }),
        createComponent('input', undefined, ['form'])({
            classes: () => store.form.hasErrorEmail ? 'has-error' : undefined,
            onBlur: event => props.onBlurEmail((event.target as HTMLInputElement).value),
            attributes: {
                placeholder: 'E-Mail',
                type: 'email',
            },
        }),
        createComponent('input', undefined, ['form'])({
            classes: () => store.form.hasErrorSecret ? 'has-error' : undefined,
            onBlur: event => props.onBlurSecret((event.target as HTMLInputElement).value),
            attributes: {
                placeholder: 'Little secret you want to share with us',
                type: 'password',
            },
        }),
        button({
            text: 'Write Email',
            attributes: {
                type: 'submit'
            },
        }),
    ];
});
