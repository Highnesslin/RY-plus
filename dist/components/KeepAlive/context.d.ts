import React from 'react';
declare type IsaveCache = (id: string, component: React.ReactNode) => Promise<unknown>;
declare const AliveContext: React.Context<IsaveCache>;
export declare const withALive: (Comp: React.ElementType) => (props: any) => JSX.Element;
export default AliveContext;
