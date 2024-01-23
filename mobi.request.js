// Exemplo de uso via POST:
// mobi.post('https://api.example.com/create', { name: 'John', age: 30 })
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
//
// Exemplo de uso via POST:
// mobi.post('https://api.example.com/create', { name: 'John', age: 30 })
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

const mobi = {
    // Função genérica para fazer requisições HTTP
    request: function (url, options = {}) {
        const { method = 'GET', headers = {}, data } = options;

        // Configurações da requisição
        const requestOptions = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: data ? JSON.stringify(data) : undefined,
        };

        // Retorna uma Promise que envolve a chamada do fetch
        return new Promise((resolve, reject) => {
            fetch(url, requestOptions)
                .then(response => {
                    // Verifica se a resposta foi bem-sucedida, caso contrário, lança um erro
                    if (!response.ok) {
                        throw new Error(`Erro na requisição ${method}: ${response.statusText}`);
                    }
                    // Parseia a resposta como JSON e a retorna
                    return response.json();
                })
                .then(result => resolve(result))
                .catch(error => {
                    let errorMessage;
                    // Trata erro de conexão específico
                    if (error instanceof TypeError && error.message === 'Failed to fetch') {
                        errorMessage = 'Erro de conexão. Verifique sua conexão de rede.';
                    } else {
                        errorMessage = `Erro na requisição ${method}: ${error.message}`;
                    }
                    reject(new Error(errorMessage));
                });
        });
    },

    // Função específica para requisições HTTP do tipo POST
    post: function (url, data, options = {}) {
        return this.request(url, { method: 'POST', data, ...options });
    },

    // Função específica para requisições HTTP do tipo GET
    get: function (url, options = {}) {
        return this.request(url, { method: 'GET', ...options });
    }
};