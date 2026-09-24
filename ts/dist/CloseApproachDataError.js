"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseApproachDataError = void 0;
class CloseApproachDataError extends Error {
    isCloseApproachDataError = true;
    sdk = 'CloseApproachData';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloseApproachDataError = CloseApproachDataError;
//# sourceMappingURL=CloseApproachDataError.js.map