const reqDebug = (req, _res, next) => {
    if (process.env.NODE_ENV === "development") {
        console.log("REQUEST DEBUG");
        console.log(req.originalUrl);
        console.log('--params', req.params);
        console.log('--query', req.query);
        console.log('--body', req.body);
    }

    next();
}

export { reqDebug }