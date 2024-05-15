
# useApi Hook for React Js

A simple customizable react hook for handling API in your react project.
## 🛠 Skills
Javascript , React JS , Node js

## Features

- Handle API Responce
- Handle API Loading
- Handle API error

## Installation

Create vite + React or simple react app
```bash
npx create-react-app project_name
```
Or
```bash
npm create vite@latest
```

### Usage -

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/devXlalit/useApi-Hook/main/hook%20folder.png)

Use this on any component or App.jsx file if you want.

```bash
  const [loading, error, response] = useApi(
    "http://localhost:3000/api/products/name"
  );

  if (error) {
    return <h1>Something went wrong!</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
```

Just pass your api on the useApi hook and useApi hook will give your 3 response that are 
1. loading - it will check if api is ready or not
2. error - it will throw an error if API dosen't respond 
3. response - it will show the result/response of API


we can also handle all the responses and can customize the useApi for our own usecase scenario.




## Authors

- [@lalit-pagare](https://github.com/lalit-pagare)
- [@devXlalit](https://github.com/devXlalit)



## Support

For support, Just Star ⭐ the Repo and enjoy learnig the most usefull customizable react hook😎😎

