/// <reference types="react" />
export declare type IContext = {
    pageName: string;
    navigate: (page: string) => any;
};
export declare const RouterContext: import("react").Context<{
    pageName: string;
    navigate: (pageName: string) => void;
}>;
