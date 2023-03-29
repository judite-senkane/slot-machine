var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var prompts = require('prompts');
var playerCash = 100;
var board = [];
var SYMBOLS = [
    { value: ' A', price: 5 },
    { value: ' K', price: 4 },
    { value: ' Q', price: 3 },
    { value: ' J', price: 2 },
    { value: '10', price: 1 },
];
var lines = [
    {
        positions: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
        ],
    },
    {
        positions: [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
        ],
    },
    {
        positions: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
        ],
    },
    {
        positions: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 0, y: 4 },
        ],
    },
    {
        positions: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 1, y: 2 },
            { x: 0, y: 3 },
            { x: 0, y: 4 },
        ],
    },
];
var BOARD_ROWS = 3;
var BOARD_COLUMNS = 5;
var COST_PER_SPIN = 1;
function generateBoard() {
    for (var row = 0; row < BOARD_ROWS; row++) {
        board[row] = [];
        for (var index = 0; index < BOARD_COLUMNS; index++) {
            board[row].push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
        }
    }
    board.forEach(function (row) {
        var elements = [];
        row.forEach(function (symbol) {
            elements.push(symbol.value);
        });
        console.log(elements.join(' - '));
    });
}
(function () { return __awaiter(_this, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 2];
                return [4 /*yield*/, prompts({
                        type: 'toggle',
                        name: 'answer',
                        message: 'Spin?',
                        initial: true,
                        active: 'yes',
                        inactive: 'no',
                    })];
            case 1:
                response = _a.sent();
                if (!response.answer) {
                    console.log('See you next time!');
                    return [3 /*break*/, 2];
                }
                playerCash -= COST_PER_SPIN;
                generateBoard();
                lines.forEach(function (line) {
                    var lineValues = [];
                    line.positions.forEach(function (position) {
                        lineValues.push(board[position.x][position.y]);
                    });
                    if (lineValues.every(function (value, i, values) { return value === values[0]; })) {
                        console.log("We've got a line!");
                        playerCash += lineValues[0].price;
                    }
                });
                console.log('Player cash: ' + playerCash + '$');
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}); })();
