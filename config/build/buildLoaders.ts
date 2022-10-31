import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { buildFileLoader } from './loaders/buildFileLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const babelLoader = buildBabelLoader(isDev);
    const cssLoader = buildCssLoader(isDev);
    const typescriptLoader = buildTypescriptLoader(); // Если не используем typescript - нужен babel-loader
    const fileLoader = buildFileLoader();

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
