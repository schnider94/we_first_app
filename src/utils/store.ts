import app from 'utils/core';

interface Config {
    currentQuote: string,
}

interface Form {
    name: string,
    email: string,
    secret: string,
    rating: number,
}

interface Store {
    config: Config,
    form: Form,
    quotes: string[],
}

const configHandler: ProxyHandler<Config> = {
    set(target, prop, value) {
        const result = Reflect.set(target, prop, value);

        app.reload();

        return result;
    },
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop);

        app.reload();

        return true;
    },
};

const formHandler: ProxyHandler<Form> = {
    set(target, prop, value) {
        const result = Reflect.set(target, prop, value);

        app.reload();

        return result;
    },
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop);

        app.reload();

        return true;
    },
};

const quoteHandler: ProxyHandler<string[]> = {
    set(target, prop, value) {
        if (prop !== 'length') localStorage.setItem('quotes', JSON.stringify([...target, value]));

        const result = Reflect.set(target, prop, value);

        app.reload();

        return result;
    },
    deleteProperty(target, prop) {
        const index = parseInt(prop.toString());
        const newArray = [...target];
        newArray.splice(index, 1);

        localStorage.setItem('quotes', JSON.stringify(newArray));

        delete target[index];

        app.reload();

        return true;
    },
    get(target, prop, receiver) {
        const current = Reflect.get(target, prop);

        if (prop === 'length' && current === 0) Object.assign(target, JSON.parse(localStorage.getItem('quotes')));

        return Reflect.get(target, prop, receiver);
    }
};

const store: Store = {
    quotes: new Proxy([], quoteHandler),
    config: new Proxy({
        currentQuote: '',
    }, configHandler),
    form: new Proxy({
        name: '',
        email: '',
        secret: '',
        rating: 10,
    }, formHandler),
};

export default store;
