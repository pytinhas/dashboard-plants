# Node API
Aplicativo criado para ser consumido no front-end.

## Cors
CORS (Cross-Origin Resource Sharing) é uma especificação do W3C que, quando implementado pelo navegador, permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.

Antes do CORS, era possível contornar essa restrição criando algum tipo de componente que servisse de proxy para as chamadas externas. O uso do JSONP (JSON with padding) para APIs que dão suporte (pouco comum) também era uma saída. Contudo o JSONP é limitado somente a chamadas do tipo GET o que causa bastante transtorno para APIs baseadas em REST (que faz uso dos outros verbos POST, PUT e DELETE).

Com a implementação do CORS um domínio permite comunicação com outro de forma livre, independente do método da chamada (GET, POST, PUT ou DELETE) contanto que o domínio de destino tenha especificado esse tipo de comunicação.