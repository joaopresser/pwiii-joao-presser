# 📚 Programação Web 3

Repositório da disciplina **Programação Web 3**, com foco no desenvolvimento de aplicações web modernas utilizando **PHP**, **Laravel** e **Laravel Herd**.

---

## 🛠️ Tecnologias Utilizadas

- [PHP](https://www.php.net/) — Linguagem de programação server-side
- [Laravel](https://laravel.com/) — Framework PHP para desenvolvimento web
- [Laravel Herd](https://herd.laravel.com/) — Ambiente de desenvolvimento local para macOS e Windows

---

## 🐎 O que é o Laravel Herd?

O **Laravel Herd** é um ambiente de desenvolvimento local nativo, rápido e simples, criado pela equipe do Laravel. Ele instala e gerencia automaticamente tudo que você precisa para desenvolver aplicações PHP e Laravel, sem a necessidade de configurar servidores manualmente (como o XAMPP, Valet ou Docker).

Com o Herd, você tem acesso a:

- Servidor PHP embutido e de alta performance (via **FrankenPHP**)
- Suporte nativo a **HTTPS** local com certificados automáticos
- Gerenciamento de múltiplas versões do PHP
- Integração com o **Laravel**, **Symfony**, **WordPress** e outros frameworks
- Interface gráfica intuitiva para gerenciar seus projetos e configurações

---

## ✅ Requisitos

Antes de instalar o Laravel Herd, certifique-se de que seu sistema atende aos seguintes requisitos:

### macOS
- macOS 12 (Monterey) ou superior
- Processador Apple Silicon (M1/M2/M3) ou Intel de 64 bits

### Windows
- Windows 10 ou Windows 11 (64 bits)
- Subsistema Windows para Linux **não** é necessário

> **Nota:** O Laravel Herd **não** está disponível para Linux. Usuários Linux podem utilizar o [Laravel Valet (Linux)](https://github.com/genesisweb/valet-linux-plus) ou o Docker como alternativa.

---

## 📥 Instalação

### macOS

1. Acesse o site oficial: [https://herd.laravel.com](https://herd.laravel.com)
2. Clique em **Download** e baixe o instalador `.dmg`
3. Abra o arquivo e arraste o **Herd** para a pasta Aplicativos
4. Execute o Herd — ele irá configurar o ambiente automaticamente
5. Quando a instalação finalizar, o ícone do Herd aparecerá na barra de menu (canto superior direito da tela), indicando que o ambiente está ativo e pronto para uso

### Windows

1. Acesse o site oficial: [https://herd.laravel.com/windows](https://herd.laravel.com/windows)
2. Baixe o instalador `.exe`
3. Execute o instalador e siga as instruções na tela
4. Após a instalação, o ícone do Herd aparecerá na bandeja do sistema (canto inferior direito), indicando que o ambiente está rodando

---

## 🚀 Criando um Projeto Laravel com o Herd

Toda a criação e gerenciamento de projetos pode ser feita diretamente pela interface gráfica do Herd, sem usar o terminal:

1. Clique no ícone do **Herd** na barra de menu (macOS) ou bandeja do sistema (Windows)
2. Selecione a opção **"Open Herd"** para abrir a interface principal
3. Vá até a aba **"Sites"**
4. Clique em **"Create new Site"** (ou no botão **+**)
5. Preencha o nome do projeto e selecione a versão do PHP desejada
6. Clique em **"Create"** — o Herd criará a estrutura do projeto automaticamente

O Herd detecta automaticamente projetos dentro da pasta `~/Herd` (macOS) ou `C:\Users\<usuario>\Herd` (Windows) e os disponibiliza em um domínio local `.test`.

Por exemplo, um projeto chamado `minha-app` estará acessível pelo navegador em:

```
https://minha-app.test
```

Você também pode clicar diretamente no nome do site dentro da aba **"Sites"** para abri-lo no navegador com um único clique.

---

## 🌟 Benefícios do Laravel Herd

| Benefício | Descrição |
|---|---|
| ⚡ **Alta Performance** | Utiliza o FrankenPHP, um dos servidores PHP mais rápidos disponíveis |
| 🔒 **HTTPS automático** | Certificados SSL gerados localmente sem configuração adicional |
| 🔄 **Múltiplas versões do PHP** | Alterne entre versões do PHP por projeto com facilidade |
| 🖥️ **Interface gráfica** | Gerencie seus projetos, serviços e configurações sem usar o terminal |
| 📦 **Zero configuração** | Nenhum arquivo de configuração manual — funciona imediatamente após a instalação |
| 🔗 **Domínios `.test` automáticos** | Cada projeto recebe um domínio local automaticamente |
| 🗄️ **Serviços integrados** | Suporte a MySQL, Redis, Mailpit e outros serviços locais (versão Pro) |
| 🔄 **Atualizações simples** | O Herd se atualiza automaticamente em segundo plano |

---

## 📂 Estrutura de Pastas Recomendada

```
~/Herd/
├── projeto-1/
│   ├── app/
│   ├── routes/
│   ├── resources/
│   └── ...
└── projeto-2/
    └── ...
```

---

## 📖 Recursos Úteis

- [Documentação do Laravel](https://laravel.com/docs)
- [Site oficial do Laravel Herd](https://herd.laravel.com)
- [PHP.net](https://www.php.net/docs.php)
- [Laracasts — Tutoriais em vídeo](https://laracasts.com)

---

## 👨‍💻 Disciplina

**Programação Web 3** — Desenvolvido com Laravel + Laravel Herd + PHP