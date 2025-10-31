const usersRouter = require('./users');

// test 1 should validate correct user object

test('Should validate correct user object', async () => {
    const req = {
        body: {
            email: 'john.doe@example.com',
            name: 'John Doe',
            age: 30
        }

        
    };
});

// test 2 should reject user withhh missing email

test('Should reject user with missing email', async () => {
    const req = {
        body: {
            name: 'Jane Doe',
            age: 25
        }
    };
});


// test 3 should reject user under 18 
test('Should reject user under 18', async () => {
    const req = {
        body: {
            email: 'jane.doe@example.com',
            name: 'Jane Doe',
            age: 17
        }
    };
}); 