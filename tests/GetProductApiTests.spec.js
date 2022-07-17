const { Pact } = require('@pact-foundation/pact');
const { createProduct } = require("../mockServerInteractions/GetProductApi")
const { expRespBodyForGetProductApiPostRequest } = require("../expectedResponseBodyForContract/GetProductApi_PostRequest")
const path = require('path');

const provider = new Pact({
    consumer: 'get-product-api-consumer',
    provider: 'get-product-api-provider',
    log: path.resolve(process.cwd(), 'logs/Logs_GetProductApi', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pactFiles/PactFiles_GetProductApi'),
    logLevel: 'DEBUG',
});

describe('Get Products API', () => {
    describe('When a post request to get products api is made', () => {
        beforeAll(() =>
            provider.setup().then(() => {
                provider.addInteraction({
                    uponReceiving: "a post request",
                    withRequest: {
                        method: 'POST',
                        path: '/product/products',
                        headers: {
                            'Content-Type': 'application/json',
                            'baseSiteId': 'ctr',
                            'Cache-Control': 'no-cache',
                            'Ocp-Apim-Subscription-Key': '1fe6f718b6cd4b178e9f394055656daa'
                        },
                        query: {
                            'storeName': 'ctr',
                            'baseStoreId': '144',
                            'lang': 'en',
                            'isKiosk': 'false',
                            'mock': 'true'
                        },
                        body: {
                            'productCodes': ['0603711']
                        },
                    },
                    willRespondWith: {
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        body: expRespBodyForGetProductApiPostRequest
                    },
                });
            })
        );

        test('GetProductAPI should return the expected response', async () => {
            await createProduct(provider.mockService.baseUrl);
            //const response = await createProduct(provider.mockService.baseUrl);
            //expect(response).toMatchSnapshot();
        });

        afterEach(() => provider.verify());
        afterAll(() => provider.finalize());
    });
});