import button from "./button";

const template = (text: string) => `
    <div class="quote-favorite">
        <div class="left">
            <span class="quote">${text}</span>
        </div>
        <div class="right">
        </div>
    </div>
`;

interface Props {
    onRemoveFromFavorite: (quote: string) => void,
    quote: string,
};

export default (props: Props) => {
    const removeQuote = () => props.onRemoveFromFavorite(props.quote);

    const element = document.createElement('div');
    element.innerHTML = template(props.quote);

    const removeBtn = button({
        text: 'Remove',
        onClick: removeQuote,
    });

    element.querySelector('.quote-favorite > .right').append(removeBtn);

    return element;
}
