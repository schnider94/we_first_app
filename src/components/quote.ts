import { quote } from "utils/api";
import button from "./button";

const template = `
    <div class="quote-generator">
        <div class="left">
            <span class="quote">Quote loading…</span>
        </div>
        <div class="right">
        </div>
    </div>
`;

interface Props {
    onSaveToFavorite: (quote: string) => void,
};

export default (props: Props) => {
    let currentQuote = '';

    const reloadQuote = () => {
        quote().then(text => {
            currentQuote = text;
            quoteText.textContent = text;
        });
    };

    const saveQuote = () => {
        props.onSaveToFavorite(currentQuote);
        reloadQuote();
    };

    const element = document.createElement('div');
    element.innerHTML = template;

    const quoteText = element.querySelector('.quote-generator > .left > span');

    const generateBtn = button({
        text: 'Generate',
        onClick: reloadQuote,
    });

    const toggleBtn = button({
        text: 'Favorite',
        onClick: saveQuote,
    });

    element.querySelector('.quote-generator > .right').append(generateBtn);
    element.querySelector('.quote-generator > .right').append(toggleBtn);
    reloadQuote();

    return element;
}
