import { createComponent, HTMLProps } from "utils/core";
import button from "./standard/button";

interface Props extends HTMLProps {
    quote: string,
    onReloadCurrentQuote: () => void,
    onSaveToFavorite: () => void,
};

export default createComponent<Props>('div', (props: Props) => {
    return [
        createComponent('div', () => [
            createComponent('span', () => [
                !!props.quote ? props.quote : 'Click `Generate` to start generating quotes ---->',
            ])({
                classes: 'quote'
            })
        ])({
            classes: 'left',
        }),
        createComponent('div', () => [
            button({
                text: 'Generate',
                onClick: props.onReloadCurrentQuote,
            }),
            button({
                text: 'Favorite',
                onClick: props.onSaveToFavorite,
            }),
        ])({
            classes: 'right',
        }),
    ];
});
