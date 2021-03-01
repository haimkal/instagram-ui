import * as yup from 'yup';

export const registerSchema = yup.object().shape ({
    username: yup.string()
        .min(3)
        .max(60)
        .required()
        .test('isUnique', 'Username is already taken', (value)=> isUnique('username', value)), //how does it work?
    password: yup.string()
        .min(6)
        .max(26)
        .required(),
    email: yup.string()
        .max(100)
        .email()
        .required()
        .test ('isUnique', 'Email is in use', (value)=> isUnique('email', value)),
    agreeToTerms: yup.mixed().oneOf([true])

});

const memo = {
    email: {},
    username: {}
};
// value = ss@gmail.com
async function isUnique(field, value) { //Would be glad for explanation for this and for the tests above- it doesn't work
    if (memo[field].hasOwnProperty(value)) { //this part connected to the next part or the return take me out?
        return memo[field][value];
    }
    return await fetch(`http://localhost:4000/user/check?${field}=${value}`, {method: 'POST'})
        .then(res=> res.json())
        .then(res=> {
            memo[field][value] = !res; //didn't understand this part and the conncetion to the backend, the res equals to true/false?
            return memo[field][value];
        })
}