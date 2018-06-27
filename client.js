'use strict';

const {createConnection, TextDocuments} = require('vscode-languageserver');

const connection = createConnection(process.stdin, process.stdout);
const documents = new TextDocuments();
