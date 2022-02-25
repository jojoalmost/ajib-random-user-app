# Read Me
this apps build by boilerplate create react app

## How to Runing App
run scrips:

install dependency use:
> yarn install

run local apps use:
> yarn start 

## Third Party in this app:
- [Styled components](https://styled-components.com/) as reusable Styling component
- [axios](https://github.com/axios/axios) as API fetcher

## Explanation:
- based components or wrapper with styling or not is located in `src/components`
- first, the main app will run `App.js` then we load main `<Users />` with loading and optimizing use React suspense and React Lazy
- after component `<Users />` mounted it call api then save into state `ussrs`
- api fetcher in `src/utils/api/api.js` using axios interceptors for default handle any response after request

## Optimizing in this App:
- in this app using React suspense and Reacy lazy to load component its located in `App.js`
- other optimizing using React memo for memorize users data its located in custom hooks `src/utils/hooks/useSortableData.js`
