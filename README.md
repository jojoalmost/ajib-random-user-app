# Read Me
this apps build by boilerplate create react app

## How to Runing App
run scrips:

install dependency use:
> yarn install

run local apps use:
> yarn start 

## Problems API
- Result of API response pagination  dont have total data so i just use prev and next to handle it
- Result of API response Data is dynamic, when page changed data not same, if i set parameter seed when i change page data still same so i put it off
- Searching API is not available in this documentation, so i do search in local after data collected with debounce simulation

## Third Party
- [Styled components](https://styled-components.com/) as reusable Styling component
- [axios](https://github.com/axios/axios) as API fetcher

## State Management
- React Context `<UserListProvider />`

## Explanation
- based components or wrapper with styling or not is located in `src/components`
- first, the main app will run `App.js` then we load main `<Users />` with loading and optimizing use React suspense and React Lazy
- `<Users>` are Wraped by `<UserListProvider />` which is a React context located in `src/utils/context/UsersProvider.js`. 
I declare global hooks `useUserList` for easy shared state value in other components. 
For example in `<Table/>` and `<Filter>` components
- context `<UserListProvider />` mounted it call api then save into state `users` and `usesTemp`
- api fetcher in `src/utils/api/api.js` using axios interceptors for default handle any response after request
- `<Users>` component loaded and all shared state 
- filtering debounce i use `setTimeout()`, when event `onChange` will be handled by debounce then they hit the main handler
- Sorting i use `sort()` and `React.Memo` for Sorting process method returns as `users` data. sorting method i create custom hooks located in `src/utils/hooks/useSortableData.js`

## Optimizing
- in this app using React suspense and Reacy lazy to load component its located in `App.js`
- other optimizing using React memo for memorize users data its located in custom hooks `src/utils/hooks/useSortableData.js`
