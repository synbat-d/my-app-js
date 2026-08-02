import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 1. Добавили Routes
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
    return (
        <BrowserRouter>
            <Routes> {/* 2. Обернули в Routes */}
                <Route path="/about" element={<About />} /> {/* 3. Использовали проп element */}
                <Route path="/posts" element={<Posts />} /> {/* 3. Использовали проп element */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;