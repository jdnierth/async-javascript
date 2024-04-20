"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const titleDb = (0, rxjs_1.from)([
    { id: 1, title: 'Titel 1' },
    { id: 2, title: 'Titel 2' }
]).pipe((0, operators_1.delay)(500));
const historyDb = (0, rxjs_1.from)([
    { id: 1, history: {} },
    { id: 2, history: { created: '1990' } }
]).pipe((0, operators_1.delay)(500));
;
