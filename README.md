Backend server :
using equepment and install:
1.express js 
2.node js
3.cors 
4.mogodb
5.mongoose
6.nodemon



mongodb connection:
1.mongodb login 
2.database access
3.user name: lutfor_books
4.2CJMG3IaHwOXvLf0
5.network access make sure
6.Database section -connect drivers 
7.mongodb connect:
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@lutfor.icznznr.mongodb.net/?retryWrites=true&w=majority&appName=lutfor";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

8.mongodb crud usage example
9.if my data need by chatgpt ask:
10.create a json file for the following data :authorName,imageURL,category,book description,book title,and book pdf url
11.get method
12.post method
13.patch or update method




<!-- frontend code  -->


1.vite project
2.tailwind css
3.react router dom
4.react icons

<!-- slider package install  -->

1.swiper js
2.


<!-- Authentication system with firebase   -->
1.Project create
2.Project name
3.Project nick name
4.npm install firebase for frontend side