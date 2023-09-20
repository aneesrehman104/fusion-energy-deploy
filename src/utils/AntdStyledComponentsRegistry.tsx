'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

type Props = { children: React.ReactNode }

export default function AntdStyledComponentsRegistry({ children }: Props) {
    const [cache] = React.useState(() => createCache()); // gets antd cached styles

    // innsert cache style on the server
    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}></style>
    ));

    return <StyleProvider cache={cache}>{children}</StyleProvider>;
}