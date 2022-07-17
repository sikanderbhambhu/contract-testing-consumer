"use strict"

const { boolean, string, integer, eachLike } = require('@pact-foundation/pact').Matchers;

exports.expRespBodyForGetProductApiPostRequest = {
    "products": [{
        "url": string(''),
        "type": string(''),
        "code": string(''),
        "title": string(''),

        "images": [{
            "url": string(''),
            "altText": string('')
        }
        ],

        "brand": {
            "label": string(''),
            "url": string('')
        },

        "rating": integer(),
        "ratingsCount": integer(),
        "numberOfReviews": integer(),

        "currentPrice": {
            "value": integer(),
            "maxPrice": integer(),
            "minPrice": integer()
        },

        "originalPrice": {
            "value": integer(),
            "maxPrice": integer(),
            "minPrice": integer()
        },

        "displayWasLabel": boolean(),

        "discount": {
            "value": integer(),
            "maxPrice": integer(),
            "minPrice": integer()
        },

        "coreChargeIncluded": boolean(),

        "coreCharge": {
            "value": integer(),
            "maxPrice": integer(),
            "minPrice": integer()
        },

        "ecoFeeIncluded": boolean(),

        "ecoFee": {
            "value": integer(),
            "maxPrice": integer(),
            "minPrice": integer()
        },

        "badges": [string(), string(), string(), string(), string(), string(), string()],

        "variantColour": [{
            "name": string(),
            "code": string(),
            "swatch": [{
                "url": string(),
                "altText": string()
            }],
            "images": [{
                "url": string(),
                "altText": string()
            }]
        },
        {
            "name": string(),
            "code": string(),
            "swatch": [{
                "url": string(),
                "altText": string()
            }],
            "images": [{
                "url": string(),
                "altText": string()
            }]
        }],

        "featureBullets": [{
            "description": string()
        }, {
            "description": string()
        }, {
            "description": string()
        }],
        "priceMessage": [{
            "label": string(),
            "tooltip": string()
        }],

        "breadcrumbList": [{
            "label": string(),
            "url": string()
        }, {
            "label": string(),
            "url": string()
        }, {
            "label": string(),
            "url": string()
        }, {
            "label": string(),
            "url": string()
        }],

        "roadRating": {
            "value": integer(),
            "description": string(),
            "ratings": [{
                "roadRatedID": string(),
                "priority": integer(),
                "label": string(),
                "color": string(),
                "value": integer(),
                "iconUrl": string()
            }]
        },

        "rearVariant": {
            "code": string(),
            "specification": {
                "value": string(),
                "label": string()
            },

            "currentPrice": {
                "value": integer(),
                "maxPrice": integer(),
                "minPrice": integer()
            },

            "originalPrice": {
                "value": integer(),
                "maxPrice": integer(),
                "minPrice": integer()
            },

            "displayWasLabel": boolean(),

            "discount": {
                "value": integer(),
                "maxPrice": integer(),
                "minPrice": integer()
            },

            "coreCharge": {
                "value": integer(),
                "maxPrice": integer(),
                "minPrice": integer()
            },

            "ecoFee": {
                "value": integer(),
                "maxPrice": integer(),
                "minPrice": integer()
            },

            "badges": [string(), string(), string(), string(), string(), string(), string()]
        },

        "isTire": boolean(),
        "tireCategory": string(),
        "mailInRebateDiscount": integer(),
        "mailInRebateMsg": string(),
        "instantRebateAmt": {
            "value": integer(),
            "maxPrice": integer(),
            "minPrice": integer()
        },
        "instantRebateIncluded": boolean(),
        "iumapp": boolean(),

        "rebate": {
            "greyCopyMsg": string(),
            "tooltipHeader": string(),
            "tooltipMessage": string(),
            "message": string(),
            "quantityPer": integer(),
            "priceAfterRebate": integer(),
            "endDate": string(),
            "startDate": string(),
            "value": integer(),
            "instant": boolean()
        }
    }],

    "notFoundIds": []
}