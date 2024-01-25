/*!
 * MobiRequest v1.1.0
 * By Janderson Garcia
 * Documentation (https://github.com/jandersongarcia/mobiRequest)
 */
const mobi = {
    // Função genérica para fazer requisições HTTP
    request: function (url, options = {}) {
        const { method = 'GET', headers = {}, data } = options;

        // Configurações da requisição
        const requestOptions = {
            method,
            headers: {
                ...headers,
            },
            body: data,
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
        const { hasImage = false, ...otherOptions } = options;

        // Verifica se data é um objeto FormData
        if (data instanceof FormData) {
            return this.request(url, { method: 'POST', data, ...otherOptions });
        } else {
            // Se data for um objeto JSON, converte para string e configura a requisição como 'application/json'
            const jsonBody = JSON.stringify(data);
            return this.request(url, { method: 'POST', data: jsonBody, ...otherOptions });
        }
    },

    // Função específica para requisições HTTP do tipo GET
    get: function (url, options = {}) {
        return this.request(url, { method: 'GET', ...options });
    },
};