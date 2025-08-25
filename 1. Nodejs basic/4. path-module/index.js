const path = require("path")

console.log("Directory Name: " , path.dirname(__filename));
console.log("file Name: " , path.basename(__filename));
console.log("extension Name: " , path.extname(__filename));

const joinPath = path.join('user', 'document', 'node', 'project')

console.log(joinPath);

const resolvePath = path.resolve('user', 'document', 'main', 'project');

console.log(resolvePath);

const normalizePath = path.normalize('/user/.documents/../node/project');

console.log('Normalize path',normalizePath);

