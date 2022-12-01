import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            // глобальная нода, с которой работаем
            Program(path, state) {
                // получаем массив аттрибутов из пропсов для выпиливания из прода
                // usage: babelPlugin(['data-testid', 'class', 'id'])
                const attributesToExclude = state.opts.props || [];
                // traverse - метод прохода по всем нодам AST дерева
                path.traverse({
                    // тип интересующей нас ноды
                    // JSXIdentifier по факту и есть тот самый аттрибут, который мы хотим выпилить
                    JSXIdentifier(current) {
                        // JSXIdentifierов может быть много, поэтому получаем имя конкретной ноды, которая нам нужна
                        const nodeName = current.node.name;

                        // тут понятно чего происходит
                        if (attributesToExclude.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
