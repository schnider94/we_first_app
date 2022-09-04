
interface Store {
    quotes: string[],
}

const quoteHandler: ProxyHandler<string[]> = {
    set(target, prop, value) {
        if (prop !== 'length') localStorage.setItem('quotes', JSON.stringify([...target, value]));

        return Reflect.set(target, prop, value);
    },
    deleteProperty(target, prop) {
        const index = parseInt(prop.toString());
        const newArray = [...target];
        newArray.splice(index, 1);

        localStorage.setItem('quotes', JSON.stringify(newArray));

        delete target[index];

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
};

export default store;
