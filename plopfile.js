module.exports = plop => {
    plop.setGenerator('component', {
        description: 'create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'new component name',
                default: 'component'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'packages/{{name}}/src/{{name}}.vue',
                templateFile: 'template/src/component.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/__tests__/{{name}}.test.js',
                templateFile: 'template/__tests__/component.test.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/index.js',
                templateFile: 'template/index.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/LiCENSE',
                templateFile: 'template/LiCENSE'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/package.json',
                templateFile: 'template/package.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/README.md',
                templateFile: 'template/README.hbs'
            }
        ]
    })
}