const globalDev = {
  NEXT_ENV: 'dev',
  AUTH_HOSTNAME:
    'https://svcs.us-west-2.dev.aws.nexttrucking.com/bes',
  LAUNCH_DARKLY_CLIENT_ID: '5d36097b7abd8106bc90925e',
  WEB_HOSTNAME: 'http://atlas-dev.nexttrucking.com',
  AMPLITUDE_KEY: '1c440d57146c26bd4ad4c2c7e5bcfbf2',
  ACCOUNTING_BFF_HOSTNAME:
    'https://svcs.us-west-2.dev.aws.nexttrucking.com/accounting-bff',
  SHIPPERS_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.dev.aws.nexttrucking.com/shippers',
  TRIPS_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.dev.aws.nexttrucking.com/trips',
  AP_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.dev.aws.nexttrucking.com/ap',
  EQUIPMENT_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.dev.aws.nexttrucking.com/equipment',
}

const globalTest = {
  NEXT_ENV: 'test',
  AUTH_HOSTNAME:
    'https://svcs.us-west-2.test.aws.nexttrucking.com/bes',
  LAUNCH_DARKLY_CLIENT_ID: '5d30e53e3f5baf07b856c884',
  WEB_HOSTNAME: 'http://atlas-test.nexttrucking.com',
  ACCOUNTING_BFF_HOSTNAME:
    'https://svcs.us-west-2.test.aws.nexttrucking.com/accounting-bff',
  SHIPPERS_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.test.aws.nexttrucking.com/shippers',
  TRIPS_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.test.aws.nexttrucking.com/trips',
  AP_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.test.aws.nexttrucking.com/ap',
  EQUIPMENT_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.test.aws.nexttrucking.com/equipment',
}

const globalDemo = {
  NEXT_ENV: 'demo',
  AUTH_HOSTNAME:
    'https://svcs.us-west-2.demo.aws.nexttrucking.com/bes',
  LAUNCH_DARKLY_CLIENT_ID: '5d3609657abd8106bc909259',
  WEB_HOSTNAME: 'http://atlas-demo.nexttrucking.com',
  ACCOUNTING_BFF_HOSTNAME:
    'https://svcs.us-west-2.demo.aws.nexttrucking.com/accounting-bff',
  SHIPPERS_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.demo.aws.nexttrucking.com/shippers',
  TRIPS_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.demo.aws.nexttrucking.com/trips',
  AP_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.demo.aws.nexttrucking.com/ap',
  EQUIPMENT_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.demo.aws.nexttrucking.com/equipment',
}

const globalProd = {
  NEXT_ENV: 'prod',
  AUTH_HOSTNAME:
    'https://svcs.us-west-2.prod.aws.nexttrucking.com/bes',
  LAUNCH_DARKLY_CLIENT_ID: '5d30e53e3f5baf07b856c885',
  WEB_HOSTNAME: 'http://admin-prod.nexttrucking.com',
  AMPLITUDE_KEY: 'd15e8094535161e33a870c26ea47eff2',
  ACCOUNTING_BFF_HOSTNAME:
    'https://svcs.us-west-2.prod.aws.nexttrucking.com/accounting-bff',
  SHIPPERS_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.prod.aws.nexttrucking.com/shippers',
  TRIPS_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.prod.aws.nexttrucking.com/trips',
  AP_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.prod.aws.nexttrucking.com/ap',
  EQUIPMENT_SERVICE_HOSTNAME:
    'https://svcs.us-west-2.prod.aws.nexttrucking.com/equipment',
}

module.exports = {
  shippers: {
    local: {
      ...globalDev,
      BOOKKEEPER_API_HOSTNAME: 'http://127.0.0.1:8080',
      USERS_API_HOSTNAME: 'http://127.0.0.1:8081',
      SHIPPERS_API_HOSTNAME: 'http://127.0.0.1:8080',
    },
    development: {
      ...globalDev,
      BOOKKEEPER_API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/bookkeeper',
      USERS_API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/users',
      SHIPPERS_API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/shippers-admin-bff/shippers',
      DATA_DOG__APPLICATION_ID:
        'de32db35-1960-4abe-9f90-45426a4b9bfd',
      DATA_DOG__CLIENT_TOKEN:
        'pub38ef842102f9a8fc28cf9e2eac08fcaf',
      AMPLITUDE_KEY: 'e4fef9c0ccb00223c319a2b9dead37f1',
    },
    test: {
      ...globalTest,
      BOOKKEEPER_API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/bookkeeper',
      USERS_API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/users',
      SHIPPERS_API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/shippers-admin-bff/shippers',
      DATA_DOG__APPLICATION_ID:
        'de32db35-1960-4abe-9f90-45426a4b9bfd',
      DATA_DOG__CLIENT_TOKEN:
        'pub38ef842102f9a8fc28cf9e2eac08fcaf',
      AMPLITUDE_KEY: '64ea1daf82dfd8daae4371d0bb6df164',
    },
    demo: {
      ...globalDemo,
      BOOKKEEPER_API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/bookkeeper',
      USERS_API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/users',
      SHIPPERS_API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/shippers-admin-bff/shippers',
      DATA_DOG__APPLICATION_ID:
        'de32db35-1960-4abe-9f90-45426a4b9bfd',
      DATA_DOG__CLIENT_TOKEN:
        'pub38ef842102f9a8fc28cf9e2eac08fcaf',
      AMPLITUDE_KEY: '33004394b1d57ea82c9818c47ee4e96f',
    },
    production: {
      ...globalProd,
      BOOKKEEPER_API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/bookkeeper',
      USERS_API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/users',
      SHIPPERS_API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/shippers-admin-bff/shippers',
      DATA_DOG__APPLICATION_ID:
        'de32db35-1960-4abe-9f90-45426a4b9bfd',
      DATA_DOG__CLIENT_TOKEN:
        'pub38ef842102f9a8fc28cf9e2eac08fcaf',
      AMPLITUDE_KEY: '49fd1c929ad035f8e6cbf39fcbf237dd',
    },
  },
  dashboard: {
    development: {
      ...globalDev,
      DASHBOARD_API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/dashboard',
      LANE_HOSTNAME:
        'http://admin-dev.nexttrucking.com/lane/',
      DATA_DOG__APPLICATION_ID:
        '88648e58-4528-4f6b-8ec3-809eb0c8d323',
      DATA_DOG__CLIENT_TOKEN:
        'pubd3e0c692f432471670c57e0b9e84ae06',
    },
    test: {
      ...globalTest,
      DASHBOARD_API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/dashboard',
      LANE_HOSTNAME:
        'http://admin-test.nexttrucking.com/lane/',
      DATA_DOG__APPLICATION_ID:
        '88648e58-4528-4f6b-8ec3-809eb0c8d323',
      DATA_DOG__CLIENT_TOKEN:
        'pubd3e0c692f432471670c57e0b9e84ae06',
    },
    demo: {
      ...globalDemo,
      DASHBOARD_API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/dashboard',
      LANE_HOSTNAME:
        'http://admin-demo.nexttrucking.com/lane/',
      DATA_DOG__APPLICATION_ID:
        '88648e58-4528-4f6b-8ec3-809eb0c8d323',
      DATA_DOG__CLIENT_TOKEN:
        'pubd3e0c692f432471670c57e0b9e84ae06',
    },
    production: {
      ...globalProd,
      DASHBOARD_API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/dashboard',
      LANE_HOSTNAME:
        'http://admin-prod.nexttrucking.com/lane/',
      DATA_DOG__APPLICATION_ID:
        '88648e58-4528-4f6b-8ec3-809eb0c8d323',
      DATA_DOG__CLIENT_TOKEN:
        'pubd3e0c692f432471670c57e0b9e84ae06',
    },
  },
  lane: {
    luke: {
      ...globalDev,
      API_HOSTNAME: 'http://192.168.0.222:8013/',
      WEB_HOSTNAME: 'http://192.168.0.222:8080',
      BRANCH_KEY:
        'key_live_kpv007E1YddE2T3G495T1miatDiAoFCu',
      DATA_DOG__APPLICATION_ID:
        '16372152-8498-4d34-808c-b6d885b93a41',
      DATA_DOG__CLIENT_TOKEN:
        'pubee16a5ffe3303d14834e328d4656274c',
    },
    development: {
      ...globalDev,
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/dashboard/',
      SMS_HOSTNAME: 'http://dev.nexttrucking.com',
      BRANCH_KEY:
        'key_live_kpv007E1YddE2T3G495T1miatDiAoFCu',
      DATA_DOG__APPLICATION_ID:
        '16372152-8498-4d34-808c-b6d885b93a41',
      DATA_DOG__CLIENT_TOKEN:
        'pubee16a5ffe3303d14834e328d4656274c',
    },
    test: {
      ...globalTest,
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/dashboard/',
      SMS_HOSTNAME: 'http://test.nexttrucking.com',
      BRANCH_KEY:
        'key_live_ieu6RRW1BdsZAbUoM25v7hkfAvaiFWY5',
      DATA_DOG__APPLICATION_ID:
        '16372152-8498-4d34-808c-b6d885b93a41',
      DATA_DOG__CLIENT_TOKEN:
        'pubee16a5ffe3303d14834e328d4656274c',
    },
    demo: {
      ...globalDemo,
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/dashboard/',
      SMS_HOSTNAME: 'http://demo.nexttrucking.com',
      BRANCH_KEY:
        'key_live_fkr1RP55uhSOiigOnorO9jgjqwdlHoI2',
      DATA_DOG__APPLICATION_ID:
        '16372152-8498-4d34-808c-b6d885b93a41',
      DATA_DOG__CLIENT_TOKEN:
        'pubee16a5ffe3303d14834e328d4656274c',
    },
    production: {
      ...globalProd,
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/dashboard/',
      SMS_HOSTNAME: 'http://nexttrucking.com',
      BRANCH_KEY:
        'key_live_naF4LK92CbGTFIhSz5qYAhmnDximNo3H',
      DATA_DOG__APPLICATION_ID:
        '16372152-8498-4d34-808c-b6d885b93a41',
      DATA_DOG__CLIENT_TOKEN:
        'pubee16a5ffe3303d14834e328d4656274c',
    },
  },
  quote: {
    development: {
      ...globalDev,
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/booking',
      DATA_DOG__APPLICATION_ID:
        'ae3e9d21-e273-46d2-b981-c67e76c6787e',
      DATA_DOG__CLIENT_TOKEN:
        'pub8f193dc78a97db62fb9c358d093d6307',
    },
    test: {
      ...globalTest,
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/booking',
      DATA_DOG__APPLICATION_ID:
        'ae3e9d21-e273-46d2-b981-c67e76c6787e',
      DATA_DOG__CLIENT_TOKEN:
        'pub8f193dc78a97db62fb9c358d093d6307',
    },
    demo: {
      ...globalDemo,
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/booking',
      DATA_DOG__APPLICATION_ID:
        'ae3e9d21-e273-46d2-b981-c67e76c6787e',
      DATA_DOG__CLIENT_TOKEN:
        'pub8f193dc78a97db62fb9c358d093d6307',
    },
    production: {
      ...globalProd,
      AUTH_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/bes',
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/booking',
      DATA_DOG__APPLICATION_ID:
        'ae3e9d21-e273-46d2-b981-c67e76c6787e',
      DATA_DOG__CLIENT_TOKEN:
        'pub8f193dc78a97db62fb9c358d093d6307',
    },
  },
  trips: {
    local: {
      ...globalDev,
      API_HOSTNAME: 'http://127.0.0.1:8080',
      GRAPHQL_SERVER: 'http://localhost:5990',
      ENTITY_REGION: 'local',
      PRICING_API: 'http://127.0.0.1:8080',
      DOCUMENT_MANAGEMENT_API: 'http://127.0.0.1:8080',
      FREIGHT_DOCS_API: 'http://127.0.0.1:8080',
      DOCUMENT_OBLIGATION_API: 'http://127.0.0.1:8080',
      RULE_ENGINE_HOSTNAME: 'http://127.0.0.1:8080',
      SHIPPER_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/shippers-admin-bff/shippers',
      ACCESSORIAL_HOSTNAME: 'http://127.0.0.1:8080',
      DELIVERY_ORDER_API: 'http://127.0.0.1:8080',
      EXCEPTION_MANAGEMENT_API: 'http://127.0.0.1:8080',
      ROUTING_API: 'http://127.0.0.1:8080',
      AMPLITUDE_KEY: '502c23f229ba8fc183509331173cb18a',
      ASSET_CARRIER_ID: '1657',
      LOADS_PAGE_REFRESH_INTERVAL_SEC: 60,
      YARD_ADDRESS_ID_LIST: ['71', '72'],
    },
    development: {
      ...globalDev,
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/trips',
      GRAPHQL_SERVER:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/admin-bff',
      PRICING_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/pricing-v2',
      DOCUMENT_MANAGEMENT_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/document',
      FREIGHT_DOCS_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/freight-doc',
      DOCUMENT_OBLIGATION_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/document-obligation',
      ACCOUNTING_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/accounting',
      DELIVERY_ORDER_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/delivery-order',
      RULE_ENGINE_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/rule-engine',
      SHIPPER_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/shippers-admin-bff/shippers',
      ACCESSORIAL_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/accessorial-event',
      EXCEPTION_MANAGEMENT_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/exception-management',
      ROUTING_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/routing',
      ENTITY_REGION: 'dev',
      AMPLITUDE_KEY: '502c23f229ba8fc183509331173cb18a',
      ASSET_CARRIER_ID: '1657',
      LOADS_PAGE_REFRESH_INTERVAL_SEC: 900,
      DATA_DOG__APPLICATION_ID:
        'be439a52-78f6-4a15-89c6-83212826e0a3',
      DATA_DOG__CLIENT_TOKEN:
        'pub53a27f758ecf2bd73af6eab722bd3b4e',
      YARD_ADDRESS_ID_LIST: ['71', '72'],
    },
    test: {
      ...globalTest,
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/trips',
      GRAPHQL_SERVER:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/admin-bff',
      PRICING_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/pricing-v2',
      DOCUMENT_MANAGEMENT_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/document',
      FREIGHT_DOCS_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/freight-doc',
      DOCUMENT_OBLIGATION_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/document-obligation',
      ACCOUNTING_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/accounting',
      DELIVERY_ORDER_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/delivery-order',
      RULE_ENGINE_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/rule-engine',
      SHIPPER_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/shippers-admin-bff/shippers',
      ACCESSORIAL_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/accessorial-event',
      EXCEPTION_MANAGEMENT_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/exception-management',
      ROUTING_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/routing',
      ENTITY_REGION: 'test',
      AMPLITUDE_KEY: 'bbcceec92acd9ac40c420ea1b9c6ff69',
      ASSET_CARRIER_ID: '1875',
      LOADS_PAGE_REFRESH_INTERVAL_SEC: 900,
      DATA_DOG__APPLICATION_ID:
        'be439a52-78f6-4a15-89c6-83212826e0a3',
      DATA_DOG__CLIENT_TOKEN:
        'pub53a27f758ecf2bd73af6eab722bd3b4e',
      YARD_ADDRESS_ID_LIST: ['20060', '20061'],
    },
    demo: {
      ...globalDemo,
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/trips',
      GRAPHQL_SERVER:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/admin-bff',
      PRICING_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/pricing-v2',
      DOCUMENT_MANAGEMENT_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/document',
      FREIGHT_DOCS_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/freight-doc',
      DOCUMENT_OBLIGATION_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/document-obligation',
      ACCOUNTING_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/accounting',
      DELIVERY_ORDER_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/delivery-order',
      RULE_ENGINE_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/rule-engine',
      SHIPPER_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/shippers-admin-bff/shippers',
      ACCESSORIAL_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/accessorial-event',
      EXCEPTION_MANAGEMENT_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/exception-management',
      ROUTING_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/routing',
      ENTITY_REGION: 'demo',
      AMPLITUDE_KEY: '08f5c2e5f245cb00bf27e462ab2faf06',
      ASSET_CARRIER_ID: '860',
      JOB_DETAILS_PAGE_REFRESH_INTERVAL_SEC: 10,
      LOADS_PAGE_REFRESH_INTERVAL_SEC: 60,
      DATA_DOG__APPLICATION_ID:
        'be439a52-78f6-4a15-89c6-83212826e0a3',
      DATA_DOG__CLIENT_TOKEN:
        'pub53a27f758ecf2bd73af6eab722bd3b4e',
      YARD_ADDRESS_ID_LIST: [
        '1212',
        '1213',
        '1214',
        '1215',
        '1216',
        '1220',
      ],
    },
    production: {
      ...globalProd,
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/trips',
      GRAPHQL_SERVER:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/admin-bff',
      PRICING_API:
        'https://svcs.us-west-1a.prod.gcp.nexttrucking.com/pricing-v2',
      DOCUMENT_MANAGEMENT_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/document',
      FREIGHT_DOCS_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/freight-doc',
      DOCUMENT_OBLIGATION_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/document-obligation',
      ACCOUNTING_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/accounting',
      DELIVERY_ORDER_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/delivery-order',
      RULE_ENGINE_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/rule-engine',
      SHIPPER_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/shippers-admin-bff/shippers',
      ACCESSORIAL_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/accessorial-event',
      EXCEPTION_MANAGEMENT_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/exception-management',
      ROUTING_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/routing',
      ENTITY_REGION: 'us',
      AMPLITUDE_KEY: 'b94ca162fabb0c142a39537105ba0f90',
      ASSET_CARRIER_ID: '4564',
      LOADS_PAGE_REFRESH_INTERVAL_SEC: 60,
      DATA_DOG__APPLICATION_ID:
        'be439a52-78f6-4a15-89c6-83212826e0a3',
      DATA_DOG__CLIENT_TOKEN:
        'pub53a27f758ecf2bd73af6eab722bd3b4e',
      YARD_ADDRESS_ID_LIST: [
        '2931',
        '2932',
        '2933',
        '2934',
        '2935',
        '3043',
        '3172',
        '3488',
        '3777',
        '4086',
        '4099',
      ],
    },
  },
  yards: {
    development: {
      ...globalDev,
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/yards',
      AMPLITUDE_KEY: 'cb2e821b2cd8764480ae3f665652919a',
      DATA_DOG__APPLICATION_ID:
        '4b4944ac-8958-4ea2-ae04-1b79af412e7f',
      DATA_DOG__CLIENT_TOKEN:
        'pubf7642adadd560916d2e4b705302dc787',
    },
    test: {
      ...globalTest,
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/yards',
      AMPLITUDE_KEY: 'c996d36f446c66b6b5fe33e372d8c2bd',
      DATA_DOG__APPLICATION_ID:
        '4b4944ac-8958-4ea2-ae04-1b79af412e7f',
      DATA_DOG__CLIENT_TOKEN:
        'pubf7642adadd560916d2e4b705302dc787',
    },
    demo: {
      ...globalDemo,
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/yards',
      AMPLITUDE_KEY: 'ba0295216860f6e318abdc649cfb3a0a',
      DATA_DOG__APPLICATION_ID:
        '4b4944ac-8958-4ea2-ae04-1b79af412e7f',
      DATA_DOG__CLIENT_TOKEN:
        'pubf7642adadd560916d2e4b705302dc787',
    },
    production: {
      ...globalProd,
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/yards',
      AMPLITUDE_KEY: 'bd523e28b853828becdc17b0cb41583d',
      DATA_DOG__APPLICATION_ID:
        '4b4944ac-8958-4ea2-ae04-1b79af412e7f',
      DATA_DOG__CLIENT_TOKEN:
        'pubf7642adadd560916d2e4b705302dc787',
    },
  },
  landing: {
    local: {
      ...globalDev,
    },
    development: {
      ...globalDev,
      DATA_DOG__APPLICATION_ID:
        '7a70c57f-b3ca-46a9-9de4-2c41a7396573',
      DATA_DOG__CLIENT_TOKEN:
        'pub66a3d67a72834c5b410897b009819ed3',
    },
    test: {
      ...globalTest,
      DATA_DOG__APPLICATION_ID:
        '7a70c57f-b3ca-46a9-9de4-2c41a7396573',
      DATA_DOG__CLIENT_TOKEN:
        'pub66a3d67a72834c5b410897b009819ed3',
    },
    demo: {
      ...globalDemo,
      DATA_DOG__APPLICATION_ID:
        '7a70c57f-b3ca-46a9-9de4-2c41a7396573',
      DATA_DOG__CLIENT_TOKEN:
        'pub66a3d67a72834c5b410897b009819ed3',
    },
    production: {
      ...globalProd,
      DATA_DOG__APPLICATION_ID:
        '7a70c57f-b3ca-46a9-9de4-2c41a7396573',
      DATA_DOG__CLIENT_TOKEN:
        'pub66a3d67a72834c5b410897b009819ed3',
    },
  },
  accounting: {
    development: {
      ...globalDev,
      FREIGHT_HOSTNAME:
        'http://atlas-dev.nexttrucking.com/trips',
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/accounting-bff',
      API_HOSTNAME_SERVICE:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/accounting',
      API_DOCUMENT_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/document',
      ACCESSORIAL_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/accessorial-event',
      AMPLITUDE_KEY: '1c440d57146c26bd4ad4c2c7e5bcfbf2',
      DATA_DOG__APPLICATION_ID:
        'f6c92f2a-824f-4948-a7cb-9f6055835918',
      DATA_DOG__CLIENT_TOKEN:
        'pubb1aa4ee446930f67ee1492199587ef0b',
    },
    test: {
      ...globalTest,
      FREIGHT_HOSTNAME:
        'http://atlas-test.nexttrucking.com/trips',
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/accounting-bff',
      API_HOSTNAME_SERVICE:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/accounting',
      API_DOCUMENT_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/document',
      ACCESSORIAL_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/accessorial-event',
      AMPLITUDE_KEY: '1c440d57146c26bd4ad4c2c7e5bcfbf2',
      DATA_DOG__APPLICATION_ID:
        'f6c92f2a-824f-4948-a7cb-9f6055835918',
      DATA_DOG__CLIENT_TOKEN:
        'pubb1aa4ee446930f67ee1492199587ef0b',
    },
    demo: {
      ...globalDemo,
      FREIGHT_HOSTNAME:
        'http://atlas-demo.nexttrucking.com/trips',
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/accounting-bff',
      API_HOSTNAME_SERVICE:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/accounting',
      API_DOCUMENT_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/document',
      ACCESSORIAL_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/accessorial-event',
      AMPLITUDE_KEY: '1c440d57146c26bd4ad4c2c7e5bcfbf2',
      DATA_DOG__APPLICATION_ID:
        'f6c92f2a-824f-4948-a7cb-9f6055835918',
      DATA_DOG__CLIENT_TOKEN:
        'pubb1aa4ee446930f67ee1492199587ef0b',
    },
    production: {
      ...globalProd,
      FREIGHT_HOSTNAME:
        'http://atlas.nexttrucking.com/trips',
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/accounting-bff',
      API_HOSTNAME_SERVICE:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/accounting',
      API_DOCUMENT_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/document',
      ACCESSORIAL_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/accessorial-event',
      AMPLITUDE_KEY: 'd15e8094535161e33a870c26ea47eff2',
      DATA_DOG__APPLICATION_ID:
        'f6c92f2a-824f-4948-a7cb-9f6055835918',
      DATA_DOG__CLIENT_TOKEN:
        'pubb1aa4ee446930f67ee1492199587ef0b',
    },
  },
  'shipper-portal': {
    development: {
      ...globalDev,
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/shippers-portal-bff',
      SHIPPER_OTR_DASHBOARD:
        'https://app-dev.nexttrucking.com/customer-portal/shippers/dashboard',
      RULE_ENGINE_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/shippers-portal-bff',
      GRAPHQL_SERVER:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/admin-bff',
      AMPLITUDE_KEY: '3d1f5a74f3cf50f1b00905fe2d4df003',
      DATA_DOG__APPLICATION_ID:
        '57e12cb6-c371-4c5c-8101-50a01e343b2c',
      DATA_DOG__CLIENT_TOKEN:
        'pubea0b9bc15d371522e0e2578f4f18fd3e',
    },
    test: {
      ...globalTest,
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/shippers-portal-bff',
      SHIPPER_OTR_DASHBOARD:
        'https://app-test.nexttrucking.com/customer-portal/shippers/dashboard',
      RULE_ENGINE_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/shippers-portal-bff',
      GRAPHQL_SERVER:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/admin-bff',
      AMPLITUDE_KEY: 'ab673b8d842f82eff308d3c7ddea4061',
      DATA_DOG__APPLICATION_ID:
        '57e12cb6-c371-4c5c-8101-50a01e343b2c',
      DATA_DOG__CLIENT_TOKEN:
        'pubea0b9bc15d371522e0e2578f4f18fd3e',
    },
    demo: {
      ...globalDemo,
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/shippers-portal-bff',
      SHIPPER_OTR_DASHBOARD:
        'https://app-demo.nexttrucking.com/customer-portal/shippers/dashboard',
      RULE_ENGINE_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/shippers-portal-bff',
      GRAPHQL_SERVER:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/admin-bff',
      AMPLITUDE_KEY: '98f61385fe00d66b80deb5527148a40a',
      DATA_DOG__APPLICATION_ID:
        '57e12cb6-c371-4c5c-8101-50a01e343b2c',
      DATA_DOG__CLIENT_TOKEN:
        'pubea0b9bc15d371522e0e2578f4f18fd3e',
    },
    production: {
      ...globalProd,
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/shippers-portal-bff',
      SHIPPER_OTR_DASHBOARD:
        'https://app.nexttrucking.com/customer-portal/shippers/dashboard',
      RULE_ENGINE_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/shippers-portal-bff',
      GRAPHQL_SERVER:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/admin-bff',
      AMPLITUDE_KEY: '5d94638e71f5b05409202d8e5b2055fe',
      DATA_DOG__APPLICATION_ID:
        '57e12cb6-c371-4c5c-8101-50a01e343b2c',
      DATA_DOG__CLIENT_TOKEN:
        'pubea0b9bc15d371522e0e2578f4f18fd3e',
    },
  },
  'managed-carrier-portal': {
    development: {
      ...globalDev,
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/managed-carriers-portal-bff',
      FREIGHT_DOCS_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/freight-doc',
      DOCUMENT_OBLIGATION_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/document-obligation',
      AMPLITUDE_KEY: '51ab6dd0e411ac7fe31729635b5f868a',
      DATA_DOG__APPLICATION_ID:
        '1b3f8244-26cc-4160-9120-dd4de2167825',
      DATA_DOG__CLIENT_TOKEN:
        'pubd45df7555c217f857b2a99777d5f34f3',
    },
    test: {
      ...globalTest,
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/managed-carriers-portal-bff',
      FREIGHT_DOCS_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/freight-doc',
      DOCUMENT_OBLIGATION_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/document-obligation',
      AMPLITUDE_KEY: '849cab68de46824cf8f0b7f83448f646',
      DATA_DOG__APPLICATION_ID:
        '1b3f8244-26cc-4160-9120-dd4de2167825',
      DATA_DOG__CLIENT_TOKEN:
        'pubd45df7555c217f857b2a99777d5f34f3',
    },
    demo: {
      ...globalDemo,
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/managed-carriers-portal-bff',
      FREIGHT_DOCS_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/freight-doc',
      DOCUMENT_OBLIGATION_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/document-obligation',
      AMPLITUDE_KEY: 'f536648738ba4b068cb424956a9f8a83',
      DATA_DOG__APPLICATION_ID:
        '1b3f8244-26cc-4160-9120-dd4de2167825',
      DATA_DOG__CLIENT_TOKEN:
        'pubd45df7555c217f857b2a99777d5f34f3',
    },
    production: {
      ...globalProd,
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/managed-carriers-portal-bff',
      FREIGHT_DOCS_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/freight-doc',
      DOCUMENT_OBLIGATION_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/document-obligation',
      AMPLITUDE_KEY: '03167816ae4031849b724d7c8e5deaa7',
      DATA_DOG__APPLICATION_ID:
        '1b3f8244-26cc-4160-9120-dd4de2167825',
      DATA_DOG__CLIENT_TOKEN:
        'pubd45df7555c217f857b2a99777d5f34f3',
    },
  },
  reports: {
    development: {
      ...globalDev,
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/atlas-report',
      DATA_DOG__APPLICATION_ID:
        '42eea703-66e4-4930-9484-b673239a6b9a',
      DATA_DOG__CLIENT_TOKEN:
        'pubb572733a48e9fa7fa2bad1aa7f70e207',
      AMPLITUDE_KEY: '5d6376196159882926a11d9c9b3a3ccb',
    },
    test: {
      ...globalTest,
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/atlas-report',
      DATA_DOG__APPLICATION_ID:
        '42eea703-66e4-4930-9484-b673239a6b9a',
      DATA_DOG__CLIENT_TOKEN:
        'pubb572733a48e9fa7fa2bad1aa7f70e207',
      AMPLITUDE_KEY: 'fa21bdd1995c14173cf627438eb40c2d',
    },
    demo: {
      ...globalDemo,
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/atlas-report',
      DATA_DOG__APPLICATION_ID:
        '42eea703-66e4-4930-9484-b673239a6b9a',
      DATA_DOG__CLIENT_TOKEN:
        'pubb572733a48e9fa7fa2bad1aa7f70e207',
      AMPLITUDE_KEY: '4a02081d578895f4f676fc10d0d1e2c1',
    },
    production: {
      ...globalProd,
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/atlas-report',
      DATA_DOG__APPLICATION_ID:
        '42eea703-66e4-4930-9484-b673239a6b9a',
      DATA_DOG__CLIENT_TOKEN:
        'pubb572733a48e9fa7fa2bad1aa7f70e207',
      AMPLITUDE_KEY: '4639519a9538d614463b7abbeef9788c',
    },
  },
  equipment: {
    local: {
      ROUTING_API: 'http://127.0.0.1:8080',
    },
    development: {
      ...globalDev,
      ROUTING_API:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/routing',
      DATA_DOG__APPLICATION_ID:
        '96ea53b3-417f-4566-b86e-41f06c9775d2',
      DATA_DOG__CLIENT_TOKEN:
        'pub239b0d163df4c8d2d239c349de5a127f',
      AMPLITUDE_KEY: 'c790eb43aadd805c16a70939ce88a635',
    },
    test: {
      ...globalTest,
      ROUTING_API:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/routing',
      DATA_DOG__APPLICATION_ID:
        '96ea53b3-417f-4566-b86e-41f06c9775d2',
      DATA_DOG__CLIENT_TOKEN:
        'pub239b0d163df4c8d2d239c349de5a127f',
      AMPLITUDE_KEY: '0157d2d7e19c071f552a43bc8971656b',
    },
    demo: {
      ...globalDemo,
      ROUTING_API:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/routing',
      DATA_DOG__APPLICATION_ID:
        '96ea53b3-417f-4566-b86e-41f06c9775d2',
      DATA_DOG__CLIENT_TOKEN:
        'pub239b0d163df4c8d2d239c349de5a127f',
      AMPLITUDE_KEY: '43ea89fbdc23f388d4b8ae2ea2245b27',
    },
    production: {
      ...globalProd,
      ROUTING_API:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/routing',
      DATA_DOG__APPLICATION_ID:
        '96ea53b3-417f-4566-b86e-41f06c9775d2',
      DATA_DOG__CLIENT_TOKEN:
        'pub239b0d163df4c8d2d239c349de5a127f',
      AMPLITUDE_KEY: '6aeb135de12d1f5ec1788a011659aeda',
    },
  },
  carriers: {
    development: {
      ...globalDev,
      API_HOSTNAME:
        'https://svcs.us-west-2.dev.aws.nexttrucking.com/carrier-bff',
    },
    test: {
      ...globalTest,
      API_HOSTNAME:
        'https://svcs.us-west-2.test.aws.nexttrucking.com/carrier-bff',
    },
    demo: {
      ...globalDemo,
      API_HOSTNAME:
        'https://svcs.us-west-2.demo.aws.nexttrucking.com/carrier-bff',
    },
    production: {
      ...globalProd,
      API_HOSTNAME:
        'https://svcs.us-west-2.prod.aws.nexttrucking.com/carrier-bff',
    },
  },
}
