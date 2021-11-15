import bcrypt from 'bcryptjs'
const data = {
    
    users: [
        {
            name:'2kliff',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Eren',
            email: 'Eren@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
        name:" Sayl Ergonomic Office Chair",
        category: "Furniture",
        image: "/img/Herman-char.jpg",
        price: 300,
        brand: "Herman Miller",
        rating: 4.5,
        numReviews: 10,
        description: 'This "life unframed" chair is an amazing mix of sophisticated engineering, design and ergonomics that promotes a real sense of seated freedom. ',
        countInStock: 0
        },
        {
            name:"XP-PEN Artist24 Pro 23.8 Inch Drawing Monitor ",
            category: "tech",
            image: "/img/DrawMonitor20.jpg",
            price: 899,
            brand: "XP-PEN",
            rating: 4.5,
            numReviews: 10,
            description: "The Artist Display 24 Pro is the very first 23.8-inch, 2K QHD graphics display. With double the resolution of FHD displays and unprecedented vibrancy, the product offers a creative experience that exceeds all limits ",
            countInStock: 10
            },
            {

                name:"Desktop Monitor",
                category: "tech",
                image: "/img/SamsungDesktop1.jpg",
                price: 240,
                brand: "Saumsung",
                rating: 4.5,
                numReviews: 10,
                description: "high quality product",
                countInStock: 10
            },
                {
                    name:"Dell PC",
                    category: "tech",
                    image: "/img/desktop1.webp",
                    price: 1114,
                    brand: "Dell",
                    rating: 4.5,
                    numReviews: 10,
                    description: "high quality product",
                    countInStock: 10
                    },
                    {
                        name:"Razer Huntsman Mini 60% Gaming Keyboard: ",
                        category: "Keyboard",
                        image: "/img/RazerkeyB.jpg",
                        price: 109,
                        brand: "Razer ",
                        rating: 3.5,
                        numReviews: 10,
                        description: "The #1 Best-Selling Gaming Peripherals Manufacturer in the US: Source - The NPD Group, Inc. U.S. Retail Tracking Service, Keyboards, Mice, PC Headset/Pc Microphone, Gaming Designed, based on dollar sales, 2017-2021",
                        countInStock: 10
                        },
                        {
                            name:"RGB Gaming Mouse Pad,",
                            category: "tech",
                            image: "/img/Mousepad.jpg",
                            price: 14,
                            brand: "Dell",
                            rating: 4.5,
                            numReviews: 10,
                            description: "RGB Gaming Mouse Pad, LED Soft Extra Extended Large Mouse Pad",
                            countInStock: 10
                            },
                            {
                                name:"Razor Basil V3 Mouse",
                                category: "Mouse",
                                image: "/img/RazorBasil_V3.png",
                                price: 69,
                                brand: "Razor",
                                rating: 4.5,
                                numReviews: 10,
                                description: "high quality product",
                                countInStock: 9
                                }
                                                                    
    ],
    NotesData: [
        {
            name: 'Express.js',
            descp: "Express.js, or simply Express, is a back end web application framework for Node.js, ",
        },
        {
            name: 'app.get()',
            descp: "The app.get() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions. Basically is it intended for binding the middleware(connectivity between two or more applications) to your application.",
            },       
             {
                name: 'app.listen',
                descp: "Binds and listens for connections on the specified host and port.  ",
                },        {
            name: 'express.json() & express.urlencoded()',
            descp: "You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object),  ",
        },
        {
            name: 'LocalStorage.setItem',
            descp: "The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.             The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year."
            
            },       
             {
                name: 'mongoose.connect',
                descp: "Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.",
                },
             {
                name: 'dotenv',
                descp: "Environment variables allow us to manage the configuration of our applications separately from our codebase. Separating configurations makes it easier for our application to be deployed in different environments. ",
                },
             {
                name: 'location.seach',
                descp: "The search property of the Location interface is a search string, also called a query string; that is, a USVString containing a '?' followed by the parameters of the URL. ",
                },
                    
              {
                name: 'JSON.stringify()  & Parse',
                descp: "The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified. The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string ",
                },
  
              {
                name: 'Password Hasing Hashsync()',
                descp: "Hashing is a one-way ticket to data encryption. Hashing performs a one-way transformation on a password, turning the password into another String, called the hashed password. Hashing is called one way because it's practically impossible to get the original text from a hash. ",
                },
              {
                name: 'req.body',
                descp: "The req.body property contains key-value pairs of data submitted in the request body. ",
                },
                {
                name: 'await',
                descp: "The keyword await makes JavaScript wait until that promise settles and returns its result.",
                },
                {
                name: 'text',
                descp: "text ",
                },
                {
                name: 'text',
                descp: "text ",
                },
                {
                name: 'text',
                descp: "text ",
                },
                    
    ]
}

export default data