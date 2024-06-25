## 3D Printing Materials Backend
This backend application, built with Node.js and MongoDB, manages 3D printing materials. 
It provides a RESTful API for CRUD operations and handles image uploads.

## Features
CRUD operations for 3D printing materials
# Image upload handling


#### Setup and Installation

# Clone the repository:

git clone <repository-url>
cd 3d-printing-materials

# Install dependencies:
Running the Server
node src/index.js


# API Endpoints
Get all materials:
GET /materials

Get material by ID:
GET /materials/:id


Create a new material:
POST /materials

{
    "name": "Resin",
    "technology": "Fiber",
    "colors": [
        "black"
    ],
    "pricePerGram": 100,
    "imageUrl": "/uploads/590adb7dacc633411730e1cc84eb9933",
    "_id": "667adaec01639c629de285d4",
    "__v": 0
}

Update a material:
PUT /materials/:id

{
  "name": "ABS",
  "technology": "FDM",
  "colors": ["Black", "White"],
  "pricePerGram": 0.06,
  "imageUrl": "https://example.com/image2.jpg"
}

Delete a material:
DELETE /materials/:id


### Testing:  

GET /materials: Retrieved all materials successfully.
GET /materials/
: Retrieved specific materials by ID.
POST /materials: Created new materials with valid data.
PUT /materials/
: Updated existing materials by ID.
DELETE /materials/
: Deleted materials by ID.

### Datbase storage

![alt text](<db snapshotOne.PNG>)![dbsnapshotTwo]

![dbsnapshotTwo](https://github.com/AnjaliSuman3011/3D-printing-materials-data/assets/97871843/d04c4122-1878-43c5-8a55-e3c6da45a019)

