import { createComponent, HTMLProps } from "utils/core";
import button from "./standard/button";

interface Props extends HTMLProps {
    name: string,
    email: string,
    secret: string,
    rating: number,
    onBlurName: (value: string) => void,
    onBlurRating: (value: string) => void,
    onBlurEmail: (value: string) => void,
    onBlurSecret: (value: string) => void,
}

export default createComponent<Props>('form', (props: Props) => {
    return [
        createComponent('input')({
            onBlur: event => props.onBlurName((event.target as HTMLInputElement).value),
            attributes: {
                placeholder: 'How can we call you?',
                value: props.name,
                type: 'text',
            },
        }),
        createComponent('input')({
            onBlur: event => props.onBlurRating((event.target as HTMLInputElement).value),
            attributes: {
                placeholder: 'What are you rating us?',
                value: props.rating,
                min: 1,
                max: 10,
                type: 'number',
            },
        }),
        createComponent('input')({
            onBlur: event => props.onBlurEmail((event.target as HTMLInputElement).value),
            attributes: {
                placeholder: 'E-Mail',
                value: props.email,
                type: 'email',
            },
        }),
        createComponent('input')({
            onBlur: event => props.onBlurSecret((event.target as HTMLInputElement).value),
            attributes: {
                placeholder: 'Little secret you want to share with us',
                value: props.secret,
                type: 'password',
            },
        }),
        button({
            text: 'Send',
            attributes: {
                type: 'submit'
            },
        }),
    ];
});
