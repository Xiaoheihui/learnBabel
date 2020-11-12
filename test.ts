// const t = require('babel-types');
// const {transform} = require('babel-core');

// const codes = "log('Hello, world!');";

// const visitor = {
//   Identifier(path) {
//     const {node} = path;
//     if(node && node.name === 'log') {
//       path.replaceWith(createMemberExpression());
//       path.stop();
//     }
//   }
// }

// function createMemberExpression() {
//   return t.memberExpression(
//     t.identifier('console'),
//     t.identifier('log')
//   );
// }

// let result = transform(codes, {
//     plugins:[
//         {visitor}
//     ]
// })

// console.log(result)

const c :number = 1;