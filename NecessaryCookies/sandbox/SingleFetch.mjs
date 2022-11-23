import fetch from 'node-fetch'

fetch("https://ux-interview-tax-aws.tax.intuit.com/v1/interview?topic=mint_add_property&cursor=property-details&outcome=Next", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,de;q=0.8,fr;q=0.7,nl;q=0.6,hu;q=0.5",
        "authorization": "Intuit_APIKey intuit_apikey=prdakyresYC6zv9z3rARKl4hMGycOWmIb4n8w52r,intuit_apikey_version=1.0",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "intuit_tid": "6d33dbc9-cc10-4122-8512-cd314b489dd3",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "cookie": "mint.authid=9130352601278836;mint.ticket=V1-241-X0kr2x4g9x9v7uxe9w4zeo",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"data\":{\"Account\":[],\"property\":{\"type\":\"CashOrDebt\",\"accountType\":\"OtherPropertyAccount\",\"propertySubType\":\"ASSET\",\"displayName\":\"Cash\",\"realEstate\":null,\"amount\":1.7,\"associatedLoanAccounts\":[],\"vehicle\":{\"estimatedValueByKBB\":\"undefined\"}},\"RealEstate\":{\"accountType\":\"RealEstateAccount\",\"subProperty\":[{\"UUID\":\"primary-residence-property\",\"value\":\"PRIMARY_RESIDENCE\",\"label\":\"Primary Residence\"},{\"UUID\":\"investment-property\",\"value\":\"INVESTMENT_PROPERTY\",\"label\":\"Investment\"},{\"UUID\":\"vacation-home-property\",\"value\":\"VACATION_HOME\",\"label\":\"Vacation Home\"},{\"UUID\":\"other-property\",\"value\":\"OTHER\",\"label\":\"Other\"}],\"primaryContent\":\"Edit your real estate's details\",\"defaultProperty\":\"PRIMARY_RESIDENCE\"},\"Vehicle\":{\"accountType\":\"VehicleAccount\",\"subProperty\":[{\"UUID\":\"automobile-property\",\"value\":\"AUTOMOBILE\",\"label\":\"Automobile\"},{\"UUID\":\"boat-property\",\"value\":\"BOAT\",\"label\":\"Boat\"},{\"UUID\":\"motorcycle-property\",\"value\":\"MOTORCYCLE\",\"label\":\"Motorcycle\"},{\"UUID\":\"snowmobile-property\",\"value\":\"SNOWMOBILE\",\"label\":\"Snowmobile\"},{\"UUID\":\"bicycle-property\",\"value\":\"BICYCLE\",\"label\":\"Bicycle\"},{\"UUID\":\"commercial-vehicle-property\",\"value\":\"COMMERICIAL\",\"label\":\"Commercial Vehicle\"},{\"UUID\":\"other-property\",\"value\":\"UNSUPPORTED\",\"label\":\"Other\"}],\"primaryContent\":\"Edit the details of your @[findProperty({{{{property.type}}.subProperty}}, 'value' , {{property.propertySubType}}, 'label', '' )]@\",\"defaultProperty\":\"AUTOMOBILE\"},\"CashOrDebt\":{\"accountType\":\"OtherPropertyAccount\",\"subProperty\":[{\"UUID\":\"cash-property\",\"value\":\"ASSET\",\"label\":\"Cash\"},{\"UUID\":\"debt-property\",\"value\":\"LOAN\",\"label\":\"Debt\"}],\"primaryContent\":\"Let's add your cash or debt\",\"defaultProperty\":\"LOAN\"},\"OtherProperty\":{\"accountType\":\"OtherPropertyAccount\",\"subProperty\":[{\"UUID\":\"other-property-1\",\"value\":\"ART\",\"label\":\"Artwork\"},{\"UUID\":\"other-property-2\",\"value\":\"APPLIANCE\",\"label\":\"Appliance\"},{\"UUID\":\"other-property-3\",\"value\":\"BEDDING\",\"label\":\"Bedding/Drapes/Linen\"},{\"UUID\":\"other-property-4\",\"value\":\"BOOK\",\"label\":\"Books/CDs/DVDs/Tapes\"},{\"UUID\":\"other-property-5\",\"value\":\"CAMERA\",\"label\":\"Camera\"},{\"UUID\":\"other-property-6\",\"value\":\"CLOTHING\",\"label\":\"Clothing\"},{\"UUID\":\"other-property-7\",\"value\":\"COLLECTIBLE\",\"label\":\"Collectible\"},{\"UUID\":\"other-property-8\",\"value\":\"COMPUTER\",\"label\":\"Computer\"},{\"UUID\":\"other-property-9\",\"value\":\"COOKING\",\"label\":\"Cooking\"},{\"UUID\":\"other-property-10\",\"value\":\"CUTLERY\",\"label\":\"Cutlery/Silverware\"},{\"UUID\":\"other-property-11\",\"value\":\"DECORATION\",\"label\":\"Decorations\"},{\"UUID\":\"other-property-12\",\"value\":\"CHINA\",\"label\":\"Dishes/Fine China\"},{\"UUID\":\"other-property-13\",\"value\":\"ELECTRONIC\",\"label\":\"Electronics\"},{\"UUID\":\"other-property-14\",\"value\":\"FURNITURE\",\"label\":\"Furniture\"},{\"UUID\":\"other-property-15\",\"value\":\"GARDENING\",\"label\":\"Gardening\"},{\"UUID\":\"other-property-16\",\"value\":\"GLASS\",\"label\":\"Glass/Crystal\"},{\"UUID\":\"other-property-17\",\"value\":\"GOLD\",\"label\":\"Gold\"},{\"UUID\":\"other-property-18\",\"value\":\"JEWELRY\",\"label\":\"Jewelry\"},{\"UUID\":\"other-property-19\",\"value\":\"MISCELLANEOUS\",\"label\":\"Miscellaneous Items\"},{\"UUID\":\"other-property-20\",\"value\":\"INSTRUMENT\",\"label\":\"Musical Instrument\"},{\"UUID\":\"other-property-21\",\"value\":\"RUG\",\"label\":\"Rug\"},{\"UUID\":\"other-property-22\",\"value\":\"SPORT\",\"label\":\"Sporting Goods\"},{\"UUID\":\"other-property-23\",\"value\":\"TOOL\",\"label\":\"Tools\"},{\"UUID\":\"other-property-24\",\"value\":\"TOY\",\"label\":\"Toys\"}],\"primaryContent\":\"What would you like to add?\",\"defaultProperty\":\"ART\"},\"currentDate\":[11,20,2022],\"_Modified\":[\"property/vehicle/estimatedValueByKBB\",\"property/amount\",\"property/propertySubType\",\"property/displayName\"],\"scope\":\"ADD_PROPERTY\"}}",
    "method": "POST"
}).then(response => {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        console.log(response.status)
        throw Error(response.statusText);
    }
}).then(data => console.log(data));
