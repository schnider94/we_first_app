import { createComponent, HTMLProps } from "utils/core";

interface Props extends HTMLProps {
    text: string,
}

export default createComponent<Props>('a', (props: Props) => {
    return [
        props.text,
    ];
});
