export function configureFakeBackend() {
    let users = [
        {
            id: 1,
            username: 'ryan.vrba@bluemodomedia.com',
            password: 'pleasework',
            firstName: 'Ryan',
            lastName: 'Vrba',
            role: 'Admin'
        },
        {
            id: 2,
            username: 'abanoub@bluemodomedia.com',
            password: '',
            firstName: 'Abanoub',
            lastName: '',
            role: 'Mailer'
        },
        {
            id: 3,
            username: 'james.baertschi@bluemodomedia.com',
            password: '',
            firstName: 'James',
            lastName: '',
            role: 'Mailer'
        },
        {
            id: 4,
            username: 'taylor.mackintosh@bluemodomedia.com',
            password: '',
            firstName: 'Taylor',
            lastName: '',
            role: 'Mailer'
        },
        {
            id: 5,
            username: 'mikayla@bluemodomedia.com',
            password: '',
            firstName: 'Mika',
            lastName: '',
            role: 'Mailer'
        },
        {
            id: 6,
            username: 'matt@bluemodomedia.com',
            password: '',
            firstName: 'Matt',
            lastName: '',
            role: 'Mailer'
        },
        {
            id: 7,
            username: 'joey@bluemodomedia.com',
            password: '',
            firstName: 'Joey',
            lastName: '',
            role: 'Mailer'
        },
        {
            id: 8,
            username: 'romano@bluemodomedia.com',
            password: '',
            firstName: 'Romano',
            lastName: '',
            role: 'Admin'
        },
        {
            id: 9,
            username: 'tyler@bluemodomedia.com',
            password: '',
            firstName: 'Tyler',
            lastName: '',
            role: 'Admin'
        },
        {
            id: 10,
            username: 'ravi@bluemodomedia.com',
            password: '',
            firstName: 'Rav',
            lastName: '',
            role: 'Admin'
        },
        {
            id: 11,
            username: 'mahmoud@bluemodomedia.com',
            password: '',
            firstName: 'Mahmoud',
            lastName: '',
            role: 'Mailer'
        }
    ];
    let realFetch = window.fetch;
    window.fetch = function(url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.uid,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            role: user.role,
                            token:
                                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlcnRoZW1lIiwiaWF0IjoxNTU1NjgyNTc1LCJleHAiOjE1ODcyMTg1NzUsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InRlc3QiLCJmaXJzdG5hbWUiOiJIeXBlciIsImxhc3RuYW1lIjoiVGVzdCIsIkVtYWlsIjoidGVzdEBoeXBlci5jb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4ifQ.8qHJDbs5nw4FBTr3F8Xc1NJYOMSJmGnRma7pji0YwB4',
                        };
                        resolve({ ok: true, json: () => responseJson });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }
                    return;
                }

                // register
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // add new users
                    let { firstName, lastName } = params.fullname.split(' ');
                    let newUser = {
                        id: users.length + 1,
                        username: firstName,
                        password: params.password,
                        firstName: firstName,
                        lastName: lastName,
                        role: 'Admin',
                    };
                    users.push({ newUser });

                    let responseJson = {
                        id: newUser.id,
                        username: newUser.username,
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        role: newUser.role,
                        token:
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlcnRoZW1lIiwiaWF0IjoxNTU1NjgyNTc1LCJleHAiOjE1ODcyMTg1NzUsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InRlc3QiLCJmaXJzdG5hbWUiOiJIeXBlciIsImxhc3RuYW1lIjoiVGVzdCIsIkVtYWlsIjoidGVzdEBoeXBlci5jb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4ifQ.8qHJDbs5nw4FBTr3F8Xc1NJYOMSJmGnRma7pji0YwB4',
                    };
                    resolve({ ok: true, json: () => responseJson });
                    return;
                }

                // forget password
                if (url.endsWith('/users/password-reset') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username;
                    });

                    if (filteredUsers.length) {
                        let responseJson = {
                            message: "We've sent you a link to reset password to your registered email.",
                        };
                        resolve({ ok: true, json: () => responseJson });
                    } else {
                        // else return error
                        reject('Sorry, we could not find any registered user with entered username');
                    }
                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (
                        opts.headers &&
                        opts.headers.Authorization ===
                            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlcnRoZW1lIiwiaWF0IjoxNTU1NjgyNTc1LCJleHAiOjE1ODcyMTg1NzUsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InRlc3QiLCJmaXJzdG5hbWUiOiJIeXBlciIsImxhc3RuYW1lIjoiVGVzdCIsIkVtYWlsIjoidGVzdEBoeXBlci5jb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4ifQ.8qHJDbs5nw4FBTr3F8Xc1NJYOMSJmGnRma7pji0YwB4'
                    ) {
                        resolve({ ok: true, json: () => users });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));
            }, 500);
        });
    };
}
