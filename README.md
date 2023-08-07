
# Mid-Term Gigih Project
Mid-Term Project (Backend Only) build REST API Tokopedia Play clone

# Videos
* videos collection
```
{
  _id: ObjectId,
  videoTitle: String,
  videoUrl: String,
  product: [{mongoose.Schema.Types.ObjectId}],
  created_at: datetime,
  updated_at: datetime,
}
```
**GET /videos**
----
  Returns all videos in the collection.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
    {
        "_id": "<video_id>",
        "videoTitle": "<video_title>",
        "videoUrl": "<video_url>",
        "products": [
            "<product_id>",
        ],
        "createdAt": "<date>",
        "updatedAt": "<date>",
        "__v": 0,
    },
    {
        "_id": "<video_id>",
        "videoTitle": "<video_title>",
        "videoUrl": "<video_url>",
        "products": [
            "<product_id>",
        ],
        "createdAt": "<date>",
        "updatedAt": "<date>",
        "__v": 0,
    }       
]
```

**GET /videos/:id**
----
  Returns the specified video.
* **URL Params**  
  *Required:* `id=[ObjectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
    "video": {
        "_id": "<video_id>",
        "videoTitle": "video_title",
        "videoUrl": "<video_url>",
        "products": [
            "<product_id>",
        ],
        "createdAt": "<video_date>",
        "updatedAt": "<video_date>",
        "__v": 0
    },
    "products": {
        "_id": "<video_id>",
        "videoTitle": "<video_title>",
        "videoUrl": "<video_url>",
        "products": [
            {
                "_id": "<product_id>",
                "productName": "<product_name>",
                "productUrl": "<product_url>",
                "price": <product_price>,
                "qty": <product_qty>,
                "description": "<product_description>",
                "createdAt": "<product_date>",
                "updatedAt": "<product_date>",
                "__v": 0
            },
        ],
        "createdAt": "<video_date>",
        "updatedAt": "<video_date>",
        "__v": 0
    }
}
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message : "Video not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error : <server error>}`

**GET /vidoes/products/:id**
----
  Returns all product associated with the specified video.
* **URL Params**  
  *Required:* `id=[ObjectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
]
    {
        "_id": "<product_id>",
        "productName": <product_name>",
        "productUrl": "<product_url>",
        "price": <product_price>,
        "qty": <product_qty>,
        "description": "<product_description>",
        "createdAt": "<product_date>",
        "updatedAt": "<product_date>",
        "__v": 0
    },
]
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Video not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error : <server error>}`
**GET /videos/comments/:id**
----
  Returns all comment associated with the specified video.
* **URL Params**  
  *Required:* `id=[ObjectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
]
    {
        "_id": "<comment_id>",
        "video": "<video_id>",
        "username": "<comment_username>",
        "comment": "<comment>",
        "createdAt": "<comment_date>",
        "updatedAt": "<comment_date>",
        "__v": 0
    },
]
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Video not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error : <server error>}`

**POST /videos/post**
----
  Creates a new Videos and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    "videoTitle": String,
    "videoUrl": String,
    "products": ["<product_id>"]
  }
```
* **Success Response:**  
* **Code:** 200  
*  **Content:**  
```
    { 
        "_id": "<video_id>",
        "videoTitle": "video_title",
        "videoUrl": "<video_url>",
        "products": [
            "<product_id>",
        ],
        "createdAt": "<video_date>",
        "updatedAt": "<video_date>",
        "__v": 0
    }
``` 
**POST /videos/post/comment/:id**
----
  Creates a new Comment and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    "username": String,
    "comment": String,
  }
```
* **Success Response:**  
* **Code:** 200  
* **Content:**  
```
    { 
        "_id": "<comment_id>",
        "video": "<video_id>",
        "username": "<comment_username>",
        "comment": "<comment>"
        "createdAt": "<comment_date>",
        "updatedAt": "<comment_date>",
        "__v": 0
    }
``` 


**PUT /videos/edit/:id**
----
  Updates fields on the specified vidoe and returns the updated object.
* **URL Params**  
  *Required:* `id=[ObjectId]`
* **Data Params**  
```
  {
  	"videoTitle": String,
    "videoUrl": String
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
*  **Content:**  
```
{ 
    "_id": "<video_id>",
    "videoTitle": "video_title",
    "videoUrl": "<video_url>",
    "products": [
        "<product_id>",
    ],
    "createdAt": "<video_date>",
    "updatedAt": "<video_date>",
    "__v": 0
}
```  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "video not found" }`  
  OR  
  * **Code:** 500  
  * **Content:** `{ error : server error}`

**DELETE /videos/delete/:id**
----
  Deletes the specified user.
* **URL Params**  
  *Required:* `id=[ObjectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
  * **Code:** 200
  *  **Content:**  
```
{ 
    "message": "Video deleted successfully"
    "_id": "<video_id>",
    "videoTitle": "video_title",
    "videoUrl": "<video_url>",
    "products": [
        "<product_id>",
    ],
    "createdAt": "<video_date>",
    "updatedAt": "<video_date>",
    "__v": 0
}
```   
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "video not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error : server error }`

# Products
* Product collection
```
{
  _id: ObjectId,
  productName: String,
  productUrl: String,
  price: Number,
  qty: Number,
  description: String,
  created_at: datetime,
  updated_at: datetime,
}
```
**GET /products**
----
  Returns all products in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
[
  {
        "_id": "<product_id>",
        "productName": <product_name>",
        "productUrl": "<product_url>",
        "price": <product_price>,
        "qty": <product_qty>,
        "description": "<product_description>",
        "createdAt": "<product_date>",
        "updatedAt": "<product_date>",
        "__v": 0
    },
    {
        "_id": "<product_id>",
        "productName": <product_name>",
        "productUrl": "<product_url>",
        "price": <product_price>,
        "qty": <product_qty>,
        "description": "<product_description>",
        "createdAt": "<product_date>",
        "updatedAt": "<product_date>",
        "__v": 0
    },
]
``` 

**GET /products/:id**
----
  Returns the specified product.
* **URL Params**  
  *Required:* `id=[ObjectId]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
*  **Content:**  
```
{
  "_id": "<product_id>",
  "productName": <product_name>",
  "productUrl": "<product_url>",
  "price": <product_price>,
  "qty": <product_qty>,
  "description": "<product_description>",
  "createdAt": "<product_date>",
  "updatedAt": "<product_date>",
  "__v": 0
}
``` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Product not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error : server error }`

**POST /products/post**
----
  Creates a new Product and returns the new object.
* **URL Params**  
  None
* **Data Params**  
```
{
  "productName": "<product_name>",
  "productUrl": "<product_url>",
  "price": "<product_url>",
  "qty": "<product_qty>",
  "description": "<product_description>"
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
*  **Content:**  
```
{
  "_id": "<product_id>",
  "productName": <product_name>",
  "productUrl": "<product_url>",
  "price": <product_price>,
  "qty": <product_qty>,
  "description": "<product_description>",
  "createdAt": "<product_date>",
  "updatedAt": "<product_date>",
  "__v": 0
}
``` 

**PUT /products/edit/:id**
----
  Updates fields on the specified product and returns the updated object.
* **URL Params**  
  *Required:* `id=[ObjectId]`
* **Data Params**  
```
{
  "productName": "<product_name>",
  "productUrl": "<product_url>",
  "price": "<product_url>",
  "qty": "<product_qty>",
  "description": "<product_description>"
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
*  **Content:**  
```
{
  "message": "Product edited successfully" 
  "product": {
    "_id": "<product_id>",
    "productName": <product_name>",
    "productUrl": "<product_url>",
    "price": <product_price>,
    "qty": <product_qty>,
    "description": "<product_description>",
    "createdAt": "<product_date>",
    "updatedAt": "<product_date>",
    "__v": 0
  }
}
```  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Product not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error : server error }`

**DELETE /products/delete/:id**
----
  Deletes the specified product.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**  
  * **Code:** 204
  * **Content:**
```
{
  "message": "Product deleted successfully" 
  "product": {
    "_id": "<product_id>",
    "productName": <product_name>",
    "productUrl": "<product_url>",
    "price": <product_price>,
    "qty": <product_qty>,
    "description": "<product_description>",
    "createdAt": "<product_date>",
    "updatedAt": "<product_date>",
    "__v": 0
  }
}
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Product not found" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ error : server error" }`
  
# Comments
* comments collection
```
{
    video: mongoose.Schema.Types.ObjectId
    _id: ObjectId,
    username: String,
    comment: String,
    created_at: datetime,
    updated_at: datetime,
}
```

## Installation (How To RUN!)

Clone this project

```bash
  git clone https://github.com/kadek-angga/mid-term-gigih-project.git
```
Install mid-term-gigih-project with npm

```bash
  cd mid-term-gigih-project
  npm install
```
Create and add .env file in root folder and put your mongoDB database url in it ``mongodb://your_host:your_port/your_database``

Example:
```
DATABASE_URL = mongodb://localhost:27017/mid_term
```
or
```
DATABASE_URL = mongodb://127.0.0.1:27017/mid_term 
```
Run the project with npm
```
npm start
```
## Test The API Endpoint
Test the API Endpoint with API platform or API program like Postman or similar

**Videos Endpoint**
---
* GET http:/localhost:3000/videos (Retrieve all videos)
* GET http:/localhost:3000/videos/:id (Retrieve a single video by ID)
* GET http:/localhost:3000/videos/products/:id (Retrieve a product associated with specified video)
* GET http:/localhost:3000/comments/products/:id (Retrieve a comment associated with specified video)
* POST http:/localhost:3000/videos/post (Create a new video)
* POST http:/localhost:3000/videos/post/comment/:id (Create a new comment by specified video)
* PUT http:/localhost:3000/videos/edit/:id (Update a video by ID)
* DELETE http:/localhost:3000/videos/delete/:id (Delete a product by ID)

**Products Endpoint**
---
* GET http:/localhost:3000/products (Retrieve all product)
* GET http:/localhost:3000/products/:id (Retrieve a single product by ID)
* POST http:/localhost:3000/products/post (Create a new product)
* PUT http:/localhost:3000/products/edit/:id (Update a product by ID)
* DELETE http:/localhost:3000/products/delete/:id (Delete a product by ID)


    
