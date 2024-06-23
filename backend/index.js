const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rootArrangementRoutes = require('./routes/RootArrangementRoutes');
const driverRoutes = require('./routes/DriverRoutes');
const helperRoutes = require('./routes/HelperRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/arrangements', rootArrangementRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/helpers', helperRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
