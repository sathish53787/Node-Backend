var express =  require("express");
var env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");


//environment variable
env.config();

//mongodb connection
mongoose.connect(
    'mongodb+srv://dbUser:dbUser@cluster0.076an.mongodb.net/ecommerce?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }
).then(() => {
    console.log('Database connected')
});

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//api
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port :"+process.env.PORT);
});