import { v4 as uuid } from "uuid"

export const projects = [
    {
        id: uuid(),
        title: "Cotizador bolivares",
        link: "https://cotizador-bolivar-dolares-app.vercel.app/",
        linkTech: "https://github.com/Afrozens/cotizador-bolivar-dolares-app",
        preview: "https://i.imgur.com/rIubSAt.png"
    },
    {
        id: uuid(),
        title: "Take notes app",
        link: "https://take-notes-app-omega.vercel.app/",
        linkTech: "https://github.com/Afrozens/take-notes-app",
        preview: "https://i.imgur.com/H87PRCg.png"
    },
    {
        id: uuid(),
        title: "Plant project",
        link: "https://plant-project-off-worked.vercel.app/",
        linkTech: "https://github.com/Afrozens/plant-project-off-worked",
        preview: "https://i.imgur.com/nubnX3H.png"
    }
]