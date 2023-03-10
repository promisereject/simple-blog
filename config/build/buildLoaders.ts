import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = buildSvgLoader();
    // для раздельной обработки, делаем из одного лоадера два, поднимая нужный флаг
    const babelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const cssLoader = buildCssLoader(isDev);
    const fileLoader = buildFileLoader();

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsxBabelLoader,
        cssLoader,
    ];
}
