export default function handler(req, res) {
    res.status(200).json(data);
}

const data = {
    "skills": {
        "frontEnd": [
            {
                "title": "Vue.Js",
                "desc": "Desenvolvimento de aplicações responsivas e performáticas com componentização.",
                "img": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-color-tal-revivo.png"
            },
            {
                "title": "Angular",
                "desc": "Criação de SPAs robustas com Angular, utilizando boas práticas de arquitetura.",
                "img": "https://img.icons8.com/fluency/48/angularjs.png"
            },
            {
                "title": "Next",
                "desc": "Desenvolvimento de aplicações SSR e estáticas com Next.js.",
                "img": "https://img.icons8.com/color/48/nextjs.png"
            },
            {
                "title": "React",
                "desc": "Construção de interfaces dinâmicas e reutilizáveis com React.",
                "img": "https://img.icons8.com/ultraviolet/40/react--v1.png"
            },
            {
                "title": "SassCSS",
                "desc": "Estilização modular e eficiente com Sass.",
                "img": "https://img.icons8.com/color/48/sass.png"
            },
            {
                "title": "LIMA",
                "desc": "Experiência em HTML5, CSS3, Markdown e outras linguagens de marcação.",
                "img": "https://img.icons8.com/glyph-neue/64/source-code.png"
            }
        ],
        "backEnd": [
            {
                "title": "NestJS",
                "desc": "Desenvolvimento de APIs RESTful e GraphQL com modulação clara e microserviços.",
                "img": "https://img.icons8.com/color/48/nestjs.png"
            },
            {
                "title": "Flask",
                "desc": "Criação de APIs e backends leves com Flask.",
                "tecnologias": [
                    {
                        "desc": "Desenvolvimento de APIs REST"
                    }
                ],
                "img": "https://img.icons8.com/ios/50/flask.png"
            },
            {
                "title": "Spring",
                "desc": "Desenvolvimento de backends escaláveis com Spring Boot e JPA.",
                "tecnologias": [
                    {
                        "desc": "Spring Boot"
                    },
                    {
                        "desc": "Spring Data JPA"
                    }
                ],
                "img": "https://img.icons8.com/color/48/spring-logo.png"
            },
            {
                "title": "SQL",
                "desc": "Manipulação eficiente de bancos de dados relacionais com SQL.",
                "img": "https://img.icons8.com/ios-filled/50/000000/database.png"
            }
        ],
        "linguagens": [
            {
                "title": "JavaScript",
                "desc": "Experiência em manipulação do DOM e consumo de APIs.",
                "img": "https://img.icons8.com/color/48/javascript.png"
            },
            {
                "title": "TypeScript",
                "desc": "Desenvolvimento com tipagem estática e POO.",
                "img": "https://img.icons8.com/color/48/typescript.png"
            },
            {
                "title": "Python",
                "desc": "Desenvolvimento de scripts e automação com Python.",
                "img": "https://img.icons8.com/color/48/python.png"
            },
            {
                "title": "Java",
                "desc": "Desenvolvimento orientado a objetos e APIs com Java.",
                "img": "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
            },
            {
                "title": "Kotlin",
                "desc": "Desenvolvimento moderno com Kotlin e POO.",
                "img": "https://img.icons8.com/color/48/kotlin.png"
            }
        ],
        "devOps": [
            {
                "title": "Azure",
                "desc": "Desenvolvimento e implantação de soluções na nuvem com Azure.",
                "img": "https://img.icons8.com/fluency/48/azure-1.png"
            },
            {
                "title": "Google Cloud Platform",
                "desc": "Gerenciamento de serviços e infraestrutura com GCP.",
                "img": "https://img.icons8.com/color/48/google-cloud.png"
            },
            {
                "title": "AWS",
                "desc": "Criação e gerenciamento de recursos na AWS.",
                "img": "https://img.icons8.com/color/48/amazon-web-services.png"
            },
            {
                "title": "JUnit",
                "desc": "Testes unitários para garantir a qualidade do código.",
                "img": "https://avatars.githubusercontent.com/u/874086?s=200&v=4"
            },
            {
                "title": "Jest",
                "desc": "Testes automatizados para JavaScript/TypeScript.",
                "img": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png"
            },
            {
                "title": "Jenkins",
                "desc": "Automação de pipelines de integração contínua.",
                "img": "https://img.icons8.com/color/48/jenkins.png"
            },
            {
                "title": "GitHub && GitHub Actions",
                "desc": "Gerenciamento de repositórios no GitHub e automação de workflows com GitHub Actions para integração contínua e entrega eficiente.",
                "img": "https://img.icons8.com/glyph-neue/64/github.png"
            },
            {
                "title": "Git",
                "desc": "Controle de versão e colaboração com Git.",
                "img": "https://img.icons8.com/color/48/git.png"
            },
            {
                "title": "GitLab && GitHub",
                "desc": "Gerenciamento de repositórios e colaboração em equipe.",
                "img": "https://img.icons8.com/color/48/gitlab.png"
            },
            {
                "title": "Miro || Trello",
                "desc": "Ferramentas de organização e planejamento ágil.",
                "img": "https://img.icons8.com/color/48/trello.png"
            }
        ]
    },
    "projects": [
        {
            "name": "DevWizards",
            "img": "https://github.com/oN0V41S/Rafael_Novais/blob/main/src/static/projects/devwizards.png?raw=true",
            "tech": "ReactJS, TailwindCSS, Figma, Trello",
            "desc": "Desenvolvimento de uma página web estática para exibir habilidades e conhecimentos adquiridos no curso técnico.",
            "href": "https://github.com/oN0V41S/ProjetoIntegrador"
        }
    ]
}