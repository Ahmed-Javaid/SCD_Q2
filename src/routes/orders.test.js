const ordersRouter = require('./orders');

// test 1 should create order with valid data

test('Should create order with valid data', async () => {
    const req = {
        body: {
            userId: 1,
            productIds: [101, 102],
            totalAmount: 250.00
        }
    };
});

// test 2 should reject order wtih insufficient stock

test('Should reject order with insufficient stock', async () => {
    const req = {
        body: {
            userId: 2,
            productIds: [103, 104],
            totalAmount: 500.00
        }
    };
});

// test 3 shoukld reject order with invalid user ID
test('Should reject order with invalid user ID', async () => {
    const req = {
        body: {
            userId: 'invalid_id',
            productIds: [105],
            totalAmount: 100.00
        }
    };
});


