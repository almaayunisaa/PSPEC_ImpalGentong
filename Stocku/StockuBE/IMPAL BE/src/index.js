const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bp = require('body-parser');
const authRoute = require('../route/routeAuthentication');
const catRoute = require('../route/catRoute');
const productRoute = require('../route/productRoute');

app.use(bp.json()); 
app.use('/api/auth', authRoute);
app.use('/api/category', catRoute);
app.use('/api/product', productRoute);

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
});