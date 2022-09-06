import logoSrc from 'assets/logo.webp';
import { createComponent, HTMLProps } from 'utils/core';
import link from './standard/link';

export enum Page {
    'home',
    'contents',
    'about'
}

interface Props extends HTMLProps {
    page: Page,
}

const links = createComponent<Props>('div', (props: Props) => {
    return [
        link({
            classes: props.page === Page.home ? 'is-active' : undefined,
            text: 'Home',
            attributes: {
                href: '',
            },
        }),
        link({
            classes: props.page === Page.contents ? 'is-active' : undefined,
            text: 'Contents',
            attributes: {
                href: 'contents',
            },
        }),
        link({
            classes: props.page === Page.about ? 'is-active' : undefined,
            text: 'About',
            attributes: {
                href: 'about',
            },
        }),
    ];
});

const logo = createComponent('div', () => {
    return [
        createComponent('img')({
            attributes: {
                src: logoSrc,
                alt: 'Logo',
            },
        }),
    ];
});

export default createComponent<Props>('nav', (props: Props) => {
    return [
        links({
            classes: 'left',
            ...props,
        }),
        logo({}),
    ];
});
