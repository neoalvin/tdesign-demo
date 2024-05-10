import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

/**
 * 页面的所有的 FunctionComponent 统一替换为 PageFunctionComponent
 * @see {@link https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts}
 */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
