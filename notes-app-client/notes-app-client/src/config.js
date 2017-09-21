export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        BUCKET: "notes-app-uploads-bitnj"
    },
    apiGateway: {
        URL: "https://gwz99rtb29.execute-api.us-east-1.amazonaws.com/prod",
        REGION: "us-east-1",
    },
    cognito: {
        USER_POOL_ID: "us-east-1_mxttmzlt2",
        APP_CLIENT_ID: "2qgaeplto6mkm09j0m68aj4vue",
        REGION: "us-east-1",
        IDENTITY_POOL_ID: "us-east-1:4f1836ac-052a-48a9-8186-7d9d29870208"
    }
};
