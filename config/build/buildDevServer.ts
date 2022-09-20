import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
        // since webpack-dev-server v4.0.0, Hot Module Replacement is enabled by default
    }
}
