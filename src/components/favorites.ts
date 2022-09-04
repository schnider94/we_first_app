import favorite from "./favorite";

const template = `
    <h1>
        Favorites
    </h1>
`;

interface Props {
    quotes: string[],
    onRemoveFromFavorite: (quote: string) => void,
};

export default (props: Props) => {
    const element = document.createElement('div');
    element.innerHTML = template;

    const elements = props.quotes.map(quote => favorite({
        quote,
        onRemoveFromFavorite: props.onRemoveFromFavorite,
    }));

    element.append(...elements);

    return element;
};
