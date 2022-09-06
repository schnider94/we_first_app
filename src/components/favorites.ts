import { createComponent, HTMLProps } from "utils/core";
import favorite from "./favorite";

interface Props extends HTMLProps {
    quotes: string[],
    onRemoveFromFavorite: (quote: string) => void,
};

export default createComponent<Props>('div', (props: Props) => {
    const favorites = props.quotes.map(quote => favorite({
        classes: 'row',
        quote,
        onRemoveFromFavorite: props.onRemoveFromFavorite,
    }));

    return [
        createComponent('h1', () => ['Favorites'])({}),
        ...favorites,
    ];
});
