import {Fragment, ReactElement} from 'react';
import {useRouter} from "next/router";
import {AppPropsWithLayout} from "@/layout/layout";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const router = useRouter()

    // 如果页面组件有 getLayout 函数，则使用它，否则使用默认布局（即页面本身）
    const getLayout = Component.getLayout || ((page: ReactElement) => page);

    // 调用 getLayout 函数，并传递页面组件作为参数
    return (
        <Fragment >
            {getLayout(<Component {...pageProps} />)}
        </Fragment>)
}