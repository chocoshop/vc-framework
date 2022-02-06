import Action from "../../Http/Action";
import { RouteResolver } from "../../Resolver/RouteResolver";
jest.mock("../../Support/FileLoader");
const load = require("../../Support/FileLoader");

describe('createAction', () => {
    test('登録されたルーティングではなければ例外を投げる', () => {
        expect(() => (new RouteResolver()).createAction('/test', {'/': 'TestController@index'}))
        .toThrowError(new Error('Route Not Registered'));
    });

    test('ルーティング存在する場合はActionクラスのインスタンスを生成する', () => {
        expect((new RouteResolver()).createAction('/test', {'/test': 'TestController@index'})).toBeInstanceOf(Action);
    });
});