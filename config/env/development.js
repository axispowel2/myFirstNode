module.exports = {
    // mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:1@localhost:27017/testdb1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '98896871793-bdekdb22i6gpsnai9moccugnpv88i21v.apps.googleusercontent.com',
        clientSecret: 'V9TKaf-6J9ieiwHsRsxLB24R',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }

}