import logo from 'assets/logo.webp';

const template = `
    <div class="left">
        <a href="/">Home</a>
        <a href="/contents">Contents</a>
        <a href="/about">About</a>
    </div>
    <div class="right">
        <img alt="Logo" src="${logo}" />
    </div>
`;

export enum Page {
    'home',
    'contents',
    'about'
}

interface Props {
    page: Page,
}

const pageIndex = (page: Page) => {
    switch (page) {
        case Page.home: return 0;
        case Page.contents: return 1;
        case Page.about: return 2;
    }
}

export default (props: Props) => {
    const element = document.createElement('nav');
    element.classList.add('flex-row');
    element.innerHTML = template;

    const activeLink = element.getElementsByTagName('a')[pageIndex(props.page)];
    activeLink.classList.add('is-active');

    return element;
};
