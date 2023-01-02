import removeAttributesPlugin from '../../babel/removeAttributesPlugin';

interface BuildBabelLoaderProps {
    isTsx?: boolean;
    isDev?: boolean;
}

export function buildBabelLoader(props: BuildBabelLoaderProps) {
    const { isTsx, isDev } = props;
    const isProd = !isDev;
    return {
        // раздельная обработка tsx и ts по флагу
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    // используем плагин только в прод-сборке
                    isTsx && isProd && [
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
