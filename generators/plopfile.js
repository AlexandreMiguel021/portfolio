module.exports = function (plop) {
	// component generator
	plop.setGenerator('component', {
		description: 'application component logic',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'component name please 🤖'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.ts',
				templateFile: 'templates/index.ts.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
				templateFile: 'templates/example.spec.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
				templateFile: 'templates/example.module.scss.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: 'templates/example.tsx.hbs'
			}
		]
	})
}
