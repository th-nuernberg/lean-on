export {}

export class User{

    constructor(
        readonly id: number,
        readonly firstname: string,
        readonly lastname: string,
        readonly eMail: string,
        readonly token: string
    ) {
    }


}

module.exports = {
    User
}
