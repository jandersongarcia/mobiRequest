# Mobi Request

O **Mobi Request** é uma biblioteca JavaScript que fornece funções convenientes para realizar requisições HTTP de forma assíncrona. A biblioteca utiliza o método `fetch` para facilitar o trabalho com APIs e serviços web.

## Instalação

Para utilizar o **Mobi Request**, basta incluir o script em seu projeto. Você pode baixar diretamente ou incluir via CDN:

```html
<!-- Incluindo via CDN -->
<script src="https://cdn.jsdelivr.net/gh/jandersongarcia/mobiRequest@v1.0.0/mobi.request.min.js"></script>
```

## Uso Básico

### Realizando uma requisição GET

```javascript
mobi.get('https://api.example.com/data')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### Realizando uma requisição POST simples

```javascript
mobi.post('https://api.example.com/create', { name: 'John', age: 30 })
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### Realizando uma requisição POST capturando todos os dados do formulário
```javascript
// Substitua 'myForm' pelo ID do seu formulário
const formElement = document.getElementById('myForm');
mobi.postForm('https://api.example.com/submit', formElement)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### Realizando uma requisição POST com envio de imagem
```javascript
const formData = new FormData();
formData.append('name', 'John');
formData.append('age', 30);
// Substitua "fileInputElement" pelo seu elemento de input de arquivo
formData.append('image', fileInputElement.files[0]);

// Se tiver uma imagem, sete hasImage para true
const hasImage = fileInputElement.files[0] ? true : false;

mobi.post('https://api.example.com/create', formData, { hasImage })
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

## Funções

### `request(url, options)`

Realiza uma requisição HTTP genérica com suporte a métodos, cabeçalhos e dados personalizados.

- `url`: URL da requisição.
- `options`: Objeto contendo opções adicionais como método, cabeçalhos e dados.

### `get(url, options)`

Realiza uma requisição HTTP do tipo GET.

- `url`: URL da requisição.
- `options`: Objeto contendo opções adicionais.

### `post(url, data, options)`

Realiza uma requisição HTTP do tipo POST.

- `url`: URL da requisição.
- `data`: Dados a serem enviados na requisição.
- `options`: Objeto contendo opções adicionais.

## Exemplos Avançados

### Enviando cabeçalhos personalizados

```javascript
const customHeaders = {
    'Authorization': 'Bearer token123',
    'Custom-Header': 'value'
};

mobi.get('https://api.example.com/data', { headers: customHeaders })
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### Tratando erros específicos

```javascript
mobi.post('https://api.example.com/create', { name: 'John', age: 30 })
    .then(response => console.log(response))
    .catch(error => {
        if (error.message.includes('Erro de conexão')) {
            console.error('Erro de conexão. Verifique sua conexão de rede.');
        } else {
            console.error(error.message);
        }
    });
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar o **Mobi Request**.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
