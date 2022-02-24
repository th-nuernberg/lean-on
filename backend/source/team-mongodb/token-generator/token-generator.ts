import {ITokenGenerator} from "./itoken-generator";
import * as crypto from "crypto";

export class TokenGenerator implements ITokenGenerator{
    generateToken(length: number): string {
        return crypto.randomBytes(20).toString('hex');
    }

}
