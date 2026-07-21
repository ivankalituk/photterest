import BoardsSVG from "@/shared/assets/controlledSVG/boardsSVG";
import CollageSVG from "@/shared/assets/controlledSVG/collageSVG";
import PinSVG from "@/shared/assets/controlledSVG/pinSVG";
import { FC } from "react";

export interface CreatePanelTypes {
    name: string,
    id: string,
    heading: string,
    explanation: string,
    icon: FC<{}>,
    href: string
}

export const createContentVariants: CreatePanelTypes[] = [
    {
        name: 'Create pin',
        id: "CREATEPIN",
        heading: 'Пин',
        explanation: 'Публикуйте фотографии или видео, добавляйте ссылки, наклейки, эффекты и не только',
        icon: PinSVG,
        href: '/create-pin'
    },
    {
        name: 'Create board',
        id: 'CREATEBOARD',
        heading: 'Доска',
        explanation: 'Создайте доску, чтобы упорядочить коллекцию любимых пинов',
        icon: BoardsSVG,
        href: '/create-board'
    },
    {
        name: 'Create collage',
        id: "CREATECOLLAGE",
        heading: 'Коллаж',
        explanation: 'Комбинируйте и объединяйте идеи, чтобы воплотить новое видение',
        icon: CollageSVG,
        href: '/create-collage'
    }
]