import removeAttributesPlugin from '../../babel/removeAttributesPlugin';

interface BuildBabelLoaderProps {
    isTsx?: boolean;
    isDev?: boolean;
}

export function buildBabelLoader(props: BuildBabelLoaderProps) {
    const { isTsx, isDev } = props;
    return {
        // раздельная обработка tsx и ts по флагу
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && [
                        removeAttributesPlugin,
                        {
                            props: ['data-testid'],
                        },
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
