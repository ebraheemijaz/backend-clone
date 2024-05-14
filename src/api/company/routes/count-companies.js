module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/companies/count',
            handler: 'company.count',
        },
    ]
}
