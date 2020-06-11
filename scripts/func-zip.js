const { zipFunctions } = require('@netlify/zip-it-and-ship-it');

zipFunctions('functions', 'functions-dist');
