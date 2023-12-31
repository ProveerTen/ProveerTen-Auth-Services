"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function comparePassword(password, storedPassword) {
    // if (bcrypt.compareSync(password, claveAlmacenada)) { toca descomentar esta linea hasta que se compruebe con claves hasheadas
    if (password == storedPassword) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = comparePassword;
