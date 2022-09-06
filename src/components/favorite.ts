import { createComponent, HTMLProps } from "utils/core";
import button from "./standard/button";

interface Props extends HTMLProps {
    onRemoveFromFavorite: (quote: string) => void,
    quote: string,
}

interface TextProps extends HTMLProps {
    text: string,
}

const left = createComponent<TextProps>('div', ({ text }: TextProps) => [
    createComponent<TextProps>('span', ({ text }: TextProps) => [text])({
        classes: 'quote',
        text,
    })
]);

const right = createComponent<Props>('div', (props: Props) => [
    button({
        onClick: () => props.onRemoveFromFavorite(props.quote),
        text: 'Remove',
    }),
]);

export default createComponent<Props>('div', (props: Props) => {
    return [
        left({
            classes: 'left',
            text: props.quote,
        }),
        right({
            classes: 'right',
            ...props,
        }),
    ];
});
