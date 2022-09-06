import app from 'utils/core';

interface Config {
    currentQuote: string,
}

interface Form {
    name: string,
    hasErrorName: boolean,
    email: string,
    hasErrorEmail: boolean,
    secret: string,
    hasErrorSecret: boolean,
    rating: number,
    hasErrorRating: boolean,
}

interface Store {
    config: Config,
    form: Form,
    quotes: string[],
}

const configHandler: ProxyHandler<Config> = {
    set(target, prop, value) {
        const result = Reflect.set(target, prop, value);

        app.reload('config');

        return result;
    },
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop);

        app.reload('config');

        return true;
    },
};

const formHandler: ProxyHandler<Form> = {
    set(target, prop, value) {
        const result = Reflect.set(target, prop, value);

        app.reload('form');

        return result;
    },
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop);

        app.reload('form');

        return true;
    },
};

const quoteHandler: ProxyHandler<string[]> = {
    set(target, prop, value) {
        if (prop !== 'length') localStorage.setItem('quotes', JSON.stringify([...target, value]));

        const result = Reflect.set(target, prop, value);

        app.reload('quotes');

        return result;
    },
    deleteProperty(target, prop) {
        const index = parseInt(prop.toString());
        const newArray = [...target];
        newArray.splice(index, 1);

        localStorage.setItem('quotes', JSON.stringify(newArray));

        delete target[index];

        app.reload('quotes');

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
        hasErrorName: false,
        hasErrorEmail: false,
        hasErrorSecret: false,
        hasErrorRating: false,
    }, formHandler),
};

export default store;
