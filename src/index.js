import React from 'react';
import ReactDOM from 'react-dom/client'; // Обрати внимание на '/client'
import App from './App';

// Создаем корень приложения с использованием нового API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим твой компонент
root.render(
    <React.StrictMode>
        <App />
        {/*<div>Приложение работает Symbat </div>*/}
        {/*<button>Кнопка</button>*/}
    </React.StrictMode>
);