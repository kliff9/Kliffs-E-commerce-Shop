import bcrypt from 'bcryptjs'
const data = {
    
    users: [
        {
            name:'2kliff',
            lastname: 'kliff',
            gender: 'Male',
            birthday: 'August 23',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Eren',
            lastname: 'yarn',
            gender: 'Male',
            birthday: 'October 23',
            email: 'admin@example.com',
            email: 'Eren@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
        name:'LG 38WN95C-W 38"',
        category: "38 inches",
        image: "/img/LG38.png",
        price: 1599,
        brand: "LG",
        rating: 4.5,
        numReviews: 377,
        description: '38" Curved UltraWide QHD+ (3840 x 1600) Nano IPS Display',
        countInStock: 21
        },
        {
            name:'SAMSUNG T350 27"',
            category: "27 inches",
            image: "/img/SST3.png",
            price: 219,
            brand: "Samsung",
            rating: 4,
            numReviews: 50,
            description: `Seamless screen with 3-sided border-less display stretches from edge to edge for
             immersive viewing and maximum concentration. With refined dark blue gray exterior, the screen brings more sleek and modern look.`,
            countInStock: 12
            },
            {

                name:`Dell UltraSharp U2720Q 27"`,
                category: "27 inches",
                image: "/img/DellU2.png",
                price: 589,
                brand: "Dell",
                rating: 4.5,
                numReviews: 10,
                description: `Experience true color reproduction on this brilliant 27" 4K monitor with a wide color coverage.`,
                countInStock: 10
            },
                {
                    name:"AOC C27G2Z",
                    category: "27 inches",
                    image: "/img/AOCC2.png",
                    price: 249,
                    brand: "AOC",
                    rating: 4.3,
                    numReviews: 22,
                    description: `The curved AOC C27G2Z has a 27” VA panel and a curvature radius of 1500R. Its frame rate of 240Hz and 
                    300 nits luminance, 0.5ms response time and low input lag ensure a stutter-free display and radiant picture quality`,
                    countInStock: 27
                    },
                    {
                        name:`HP 24mh FHD`,
                        category: "24 inches",
                        image: "/img/HP24.png",
                        price: 175,
                        brand: "HP ",
                        rating: 4.1,
                        numReviews: 16,
                        description: `A 23.8-inch diagonal screen experience with this stylish, height-adjustable HP display.
                         Advanced IPS technology provides up to 178° ultra-wide viewing angles with consistent detail and vibrant color`,
                        countInStock: 5
                        },
                        {
                            name:`Sceptre IPS 27"`,
                            category: "27 inches",
                            image: "/img/SPIP.png",
                            price: 155,
                            brand: "Sceptre",
                            rating: 4.7,
                            numReviews: 10,
                            description: "RGB Gaming Mouse Pad, LED Soft Extra Extended Large Mouse Pad",
                            countInStock: 31
                            },
                            {
                           name:`LG 27GL83A-B`,
                            category: "Mouse",
                            image: "/img/LG27.png",
                            price: 358,
                            brand: "LG",
                            rating: 3.7,
                            numReviews: 90,
                            description: `It delivers a great gaming experience with extremely low input lag, an outstanding response time, and a few great gaming 
                            features. It supports AMD's FreeSync variable refresh rate technology (VRR), but it's also certified by NVIDIA to support VRR from recent 
                            NVIDIA graphics cards. It has wide viewing angles, good reflection handling, and very good peak brightness, so glare shouldn't be an issue.
                             As a more budget-oriented model, it has a pretty basic stand, with limited ergonomics and no RGB lighting. Although it supports HDR, this 
                             doesn't really add much, as it can't get bright enough to deliver a true HDR experience and has a low contrast ratio.`,
                            countInStock: 30
                            },
                            {
                           name:`BenQ SW271C 27" `,
                            category: "27 inches",
                            image: "/img/BESW.png",
                            price: 1600,
                            brand: "BenQ",
                            rating: 4.2,
                            numReviews: 12,
                            description: `With 99% coverage of the Adobe RGB color space, the SW271C 27" 16:9 4K HDR IPS Monitor from BenQ 
                            is designed for those demanding enhanced color accuracy for tasks such as video editing, photo editing, graphic design,
                             and more. In addition to 99% coverage of the Adobe RGB color space, this monitor also covers 100% of the sRGB and Rec.709`,
                            countInStock: 20
                            }
                                      
                                                                    
    ]
    
}

export default data