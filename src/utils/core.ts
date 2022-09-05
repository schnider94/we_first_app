
export interface HTMLProps {
    id?: string,
    classes?: string[],
    onClick?: (event: Event) => void,
    attributes?: {
        [name: string]: any
    }
}

type renderHandler = (props: HTMLProps) => (string|HTMLElement)[];

export function createComponent<T extends HTMLProps>(tag: string, fn: renderHandler): (props: T) => HTMLElement {
    return (props: T) => {
        const element = document.createElement(tag);
        const children = fn(props);

        const elements = children.map(child => {
            if (typeof child === 'string') return child;
            return child;
        })

        element.append(...elements);

        if (props.id) element.id = props.id;
        if (props.classes) element.classList.add(...props.classes);
        if (props.onClick) element.addEventListener('click', props.onClick);

        if (props.attributes) {
            Object.entries(props.attributes).forEach(([key, value]) => element.setAttribute(key, value));
        }

        return element;
    };
}

interface App {
    reload: () => void,
    rootElem: HTMLElement,
}

const app: App = {
    reload: () => null,
    rootElem: null,
};

export function createApp(id: string, root: (props: HTMLProps) => HTMLElement) {
    const rootElem = document.getElementById(id);

    if (!rootElem) throw new Error(`Root element with id "${id}" couldn't be found`);

    const reload = () => {
        if (rootElem.children && rootElem.children.length > 0) {
            rootElem.childNodes.forEach(child => child.remove());
        }

        rootElem.append(root({}));
    }

    reload();

    app.reload = reload;
    app.rootElem = rootElem;
};

export default app;
