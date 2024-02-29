"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.verifyCompany = exports.verifyGrocer = void 0;
//import connection from "../config/db-config";
const bcrypt_1 = __importDefault(require("bcrypt"));
/*

export const verifyGrocer = (emailGrocer: any, callback: any) => {
  const grocerExisting = "call getGrocerEmailExist(?,@message_text);";
  try {
    connection.query(
      grocerExisting,
      emailGrocer,
      (error: any, results: any) => {
        if (error) {
          return callback(error);
        }
        callback(null, results);
      }
    );
  } catch (error) {
    return callback(error);
  }
};

export const verifyCompany = (emailProvider: any, callback: any) => {
  const providerExisting = "call getCompany_EmailExist (?,@message_text);";
  try {
    connection.query(
      providerExisting,
      emailProvider,
      (error: any, result: any) => {
        if (error) {
          return callback(error);
        }
        callback(null, result);
      }
    );
  } catch (error) {
    return callback(error);
  }
};

export const updatePassword = async (
  email: any,
  role: any,
  password: any,
  callback: any
) => {
  const password_hash = await bcrypt.hash(password, 10);

  const data: { email: string; password: string }[] = [
    { email: email, password: password_hash },
  ];

  const updatePasswordGrocer = "call updatePassword_Grocer(?,?,@message_text);";
  const updatePasswordCompany = "call updatePasswordCompany(?,?,@message_text);";
  try {
    if (role == "grocer") {
      connection.query(
        updatePasswordGrocer,
        [email, password_hash],
        (error: any, result: any) => {
          if (error) {
            return callback(error);
          }
          callback(null, result);
        }
      );
    } else {
      connection.query(
        updatePasswordCompany,
        [email, password_hash],
        (error: any, result: any) => {
          if (error) {
            return callback(error);
          }
          callback(null, result);
        }
      );
    }
  } catch (error) {
    return callback(error);
  }
};
*/
const db_config_1 = __importDefault(require("../config/db-config"));
const verifyGrocer = (emailGrocer, callback) => {
    db_config_1.default.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        const grocerExisting = "call getGrocerEmailExist(?,@message_text);";
        try {
            connection.query(grocerExisting, emailGrocer, (error, results) => {
                connection.release();
                if (error) {
                    return callback(error);
                }
                callback(null, results);
            });
        }
        catch (error) {
            return callback(error);
        }
    });
};
exports.verifyGrocer = verifyGrocer;
const verifyCompany = (emailProvider, callback) => {
    db_config_1.default.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        const providerExisting = "call getCompany_EmailExist (?,@message_text);";
        try {
            connection.query(providerExisting, emailProvider, (error, result) => {
                connection.release();
                if (error) {
                    return callback(error);
                }
                callback(null, result);
            });
        }
        catch (error) {
            return callback(error);
        }
    });
};
exports.verifyCompany = verifyCompany;
const updatePassword = (email, role, password, callback) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("ENTRS");
    const password_hash = yield bcrypt_1.default.hash(password, 10);
    const data = [
        { email: email, password: password_hash },
    ];
    db_config_1.default.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        const updatePasswordGrocer = "call updatePassword_Grocer(?,?,@message_text);";
        const updatePasswordCompany = "call updatePasswordCompany(?,?,@message_text);";
        try {
            if (role == "grocer") {
                connection.query(updatePasswordGrocer, [email, password_hash], (error, result) => {
                    connection.release();
                    if (error) {
                        return callback(error);
                    }
                    callback(null, result);
                });
            }
            else {
                connection.query(updatePasswordCompany, [email, password_hash], (error, result) => {
                    connection.release();
                    if (error) {
                        return callback(error);
                    }
                    callback(null, result);
                });
            }
        }
        catch (error) {
            return callback(error);
        }
    });
});
exports.updatePassword = updatePassword;
