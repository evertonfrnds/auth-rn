interface Response {
    token: string;
    user : {
        name: string;
        email: string;
    }
}
export function signIn(user: string, pass: string): Promise<Response>{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(user, pass);
            resolve({
                token: '0aisdiasd0iasdjjajsdnunasdh',
                user: {
                    name: user,
                    email: 'email@gmail.com'
                }
            })
        }, 1000);
    })
}
