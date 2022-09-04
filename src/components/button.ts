
const template = (text: string) => `
    <button class="generate">
        ${text}
    </button>
`;

interface Props {
    onClick: (event: Event) => void,
    text: string,
}

export default (props: Props) => {
    const element = document.createElement('div');
    element.innerHTML = template(props.text);

    element.addEventListener('click', props.onClick);

    return element;
};
