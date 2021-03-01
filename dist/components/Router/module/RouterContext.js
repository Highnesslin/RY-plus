import { createContext } from 'react';
var router = {
    pageName: '',
    navigate: function (pageName) {
        router.pageName = pageName;
    },
};
export var RouterContext = createContext(router);
