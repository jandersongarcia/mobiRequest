# Mobi HTTP Requests

**Mobi HTTP Requests** is a JavaScript library that provides convenient functions for making asynchronous HTTP requests. The library utilizes the XMLHttpRequest object to simplify working with APIs and web services.

## Installation

To use **Mobi HTTP Requests**, simply include the script in your project. You can either download it directly or include it via CDN:

```html
<!-- Including via CDN -->
<script src="https://cdn.jsdelivr.net/gh/jandersongarcia/mobiRequest@v2.0.0/mobi.request.min.js"></script>
```

## Basic Usage

### Making a GET Request

```javascript
mobi.get('https://api.example.com/data',
    function(response) {
        console.log(response);
    },
    function(error) {
        console.error(error);
    }
);
```

### Making a Simple POST Request

```javascript
mobi.post('https://api.example.com/create', { name: 'John', age: 30 },
    function(response) {
        console.log(response);
    },
    function(error) {
        console.error(error);
    }
);
```

### Making a POST Request by Capturing Form Data

```javascript
// Replace 'myForm' with the ID of your form
const sendPost = document.getElementById('myForm');

sendPost.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(sendPost);

    mobi.post('https://api.example.com/submit', formData, function (response) {
        // Lógica a ser executada em caso de sucesso
        console.log('POST Success:', response);
    }, function (error) {
        // Lógica a ser executada em caso de erro
        console.error('POST Error:', error);
    });

});
```

### Making a POST Request with Image Upload

```javascript
const formData = new FormData();
formData.append('name', 'John');
formData.append('age', 30);
// Replace "fileInputElement" with your file input element
formData.append('image', fileInputElement.files[0]);

// If there is an image, set hasImage to true
const hasImage = fileInputElement.files[0] ? true : false;

mobi.post('https://api.example.com/create', formData, 
    function(response) {
        console.log(response);
    },
    function(error) {
        console.error(error);
    },
    { hasImage }
);
```

## Functions

### `get(url, successCallback, errorCallback)`

Make a GET request.

- `url`: URL of the request.
- `successCallback`: Callback function for successful requests.
- `errorCallback`: Callback function for errors.

### `post(url, formData, successCallback, errorCallback)`

Make a POST request.

- `url`: URL of the request.
- `formData`: Data to be sent in the request.
- `successCallback`: Callback function for successful requests.
- `errorCallback`: Callback function for errors.

### `put(url, data, successCallback, errorCallback)`

Make a PUT request.

- `url`: URL of the request.
- `data`: Data to be sent in the request.
- `successCallback`: Callback function for successful requests.
- `errorCallback`: Callback function for errors.

## Advanced Examples

### Sending Custom Headers

```javascript
const customHeaders = {
    'Authorization': 'Bearer token123',
    'Custom-Header': 'value'
};

mobi.get('https://api.example.com/data', 
    function(response) {
        console.log(response);
    },
    function(error) {
        console.error(error);
    },
    { headers: customHeaders }
);
```

### Handling Specific Errors

```javascript
mobi.post('https://api.example.com/create', { name: 'John', age: 30 },
    function(response) {
        console.log(response);
    },
    function(error) {
        if (error.includes('Network error')) {
            console.error('Network error. Check your network connection.');
        } else {
            console.error(error);
        }
    }
);
```

## Contribution

Contributions are welcome! Feel free to open issues or send pull requests to improve **Mobi HTTP Requests**.

## License

This project is licensed under the [MIT License](LICENSE).