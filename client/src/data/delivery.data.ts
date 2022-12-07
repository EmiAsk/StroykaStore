import { THeadlineBreadcrumbs } from "../@types/globalTypes"

export const tutorialArr = [
    { img: './../assets/images/delivery_cart_icon.svg', content: 'Добавьте нужные товарыв  корзину и оплатите заказ' },
    { img: './../assets/images/delivery_bell_icon.svg', content: 'Получите уведомления о подтверждении вашего заказа' },
    { img: './../assets/images/delivery_box_icon.svg', content: 'После подтверждения мы сформируем ваш заказ' },
    { img: './../assets/images/delivery_locate_icon.svg', content: 'Заберите из пунктов выдачи' },
]

const breadcrumbsArr: THeadlineBreadcrumbs[] = [
    { path: '/', title: 'Главная', type: 'link' },
    { title: '→', type: 'seperator' },
    { path: ' ', title: 'Доставка', type: 'link' }
]

export const headData = {
    breadcrumbs: breadcrumbsArr,
    title: "Доставка",
    descr: 'Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика',
    layout: './../assets/images/layouts/delivery-layuot.webp',
}

type TFAQData = {
    question: string;
    answer: {
        text: string;
        text1: string;
    }[];
    id: number;
}

export const FAQData: TFAQData[] = [
    {
        question: 'Водитель уведомит меня о начале доставки доставки?',
        answer: [{
            text: 'Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых нужно перейти на сайт магазина. Условия их получения отличаются.',
            text1: 'В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые продаются на Маркете, доставляются непосредственно продавцамии имеют пометку об этом. Для таких товаров могут быть доступны не все возможности, описанные ниже.'
        }],
        id: 1
    },
    {
        question: 'Мне нужна помощь в разгрузке товара (дополнительная услуга), что делать?',
        answer: [{
            text: 'Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых нужно перейти на сайт магазина. Условия их получения отличаются.',
            text1: 'В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые продаются на Маркете, доставляются непосредственно продавцамии имеют пометку об этом. Для таких товаров могут быть доступны не все возможности, описанные ниже.'
        }],
        id: 2
    },
    {
        question: 'Заказ доставили, что-то от меня требуется?',
        answer: [{
            text: 'Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых нужно перейти на сайт магазина. Условия их получения отличаются.',
            text1: 'В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые продаются на Маркете, доставляются непосредственно продавцамии имеют пометку об этом. Для таких товаров могут быть доступны не все возможности, описанные ниже.'
        }],
        id: 3
    },
    {
        question: 'Что делать если товар не тот, или ненадлежащего качества?',
        answer: [{
            text: 'Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых нужно перейти на сайт магазина. Условия их получения отличаются.',
            text1: 'В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые продаются на Маркете, доставляются непосредственно продавцамии имеют пометку об этом. Для таких товаров могут быть доступны не все возможности, описанные ниже.'
        }],
        id: 4
    },
    {
        question: 'У меня крупный заказ (5 и более тонн груза), у вас есть доставка и разгрузка манипулятором?',
        answer: [{
            text: 'Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых нужно перейти на сайт магазина. Условия их получения отличаются.',
            text1: 'В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые продаются на Маркете, доставляются непосредственно продавцамии имеют пометку об этом. Для таких товаров могут быть доступны не все возможности, описанные ниже.'
        }],
        id: 5
    },
    {
        question: 'Ваша доставка опоздала, как можно помочь вам улучшить свой уровень сервиса?',
        answer: [{
            text: 'Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых нужно перейти на сайт магазина. Условия их получения отличаются.',
            text1: 'В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые продаются на Маркете, доставляются непосредственно продавцамии имеют пометку об этом. Для таких товаров могут быть доступны не все возможности, описанные ниже.'
        }],
        id: 6
    },
]