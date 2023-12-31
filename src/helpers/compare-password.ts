import bcrypt from 'bcrypt';

function comparePassword(password: string, storedPassword: string): boolean {
    // if (bcrypt.compareSync(password, claveAlmacenada)) { toca descomentar esta linea hasta que se compruebe con claves hasheadas
    if (password == storedPassword) {
        return true;
    } else {
        return false;
    }
}

export default comparePassword;

