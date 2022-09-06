
export interface HTMLProps {
    id?: string|(() => string),
    classes?: string|(() => string),
    attributes?: {
        [name: string]: any|(() => any)
    },
    onBlur?: (event: FocusEvent) => void,
    onInput?: (event: InputEvent) => void,
    onClick?: (event: Event) => void,
    onSubmit?: (event: SubmitEvent) => void
}

interface StoreMap {
    [key: string]: {
        element: HTMLElement,
        reload: () => void,
    }[]
}

const storeMap: StoreMap = {};

type renderHandler = (props: HTMLProps) => (string|HTMLElement)[];

const getValue = (value: any|(() => any)) => {
    if (typeof value === 'function') return value();
    if (typeof value !== 'function') return value;
};

export function createComponent<T extends HTMLProps>(tag: string, fn: renderHandler = () => [], stores: string[] = []): (props: T) => HTMLElement {
    return (props: T) => {
        const element = document.createElement(tag);
        let clickListener: EventListener;
        let blurListener: EventListener;
        let inputListener: EventListener;
        let submitListener: EventListener;

        const reload = () => {
            const children = fn(props);

            for (const child of Array.from(element.children)) child.remove();

            const elements = children.map(child => {
                if (typeof child === 'string') return child;
                return child;
            })

            element.append(...elements);

            if (props.id) element.id = getValue(props.id);
            if (props.classes) element.className = getValue(props.classes);
            if (props.attributes) {
                Object.entries(props.attributes).forEach(([key, value]) => element.setAttribute(key, getValue(value)));
            }

            if (props.onClick) {
                element.removeEventListener('click', clickListener);
                clickListener = props.onClick;
                element.addEventListener('click', clickListener);
            }

            if (props.onBlur) {
                element.removeEventListener('blur', blurListener);
                blurListener = props.onBlur;
                element.addEventListener('blur', blurListener);
            }

            if (props.onInput) {
                element.removeEventListener('input', inputListener);
                inputListener = props.onInput;
                element.addEventListener('input', inputListener);
            }

            if (props.onSubmit) {
                element.removeEventListener('submit', submitListener);
                submitListener = props.onSubmit;
                element.addEventListener('submit', submitListener);
            }
        };

        const component = {
            element,
            reload,
        };

        stores.forEach(store => {
            if (!storeMap[store]) storeMap[store] = [];

            storeMap[store].push(component);
        });

        reload();

        return element;
    };
}

interface App {
    reload: (id: string) => void,
    rootElem: HTMLElement,
}

const app: App = {
    reload: () => null,
    rootElem: null,
};

export function createApp(id: string, root: (props: HTMLProps) => HTMLElement) {
    const rootElem = document.getElementById(id);

    if (!rootElem) throw new Error(`Root element with id "${id}" couldn't be found`);

    const reload = (id: string) => {
        storeMap[id]?.forEach(child => child.reload());
    }

    rootElem.append(root({}));

    app.reload = reload;
    app.rootElem = rootElem;
};

export default app;
