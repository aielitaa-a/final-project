import { Routes, Route } from "react-router-dom"
import './App.css'

import Header from "./components/header/Header"
import { CartProvider } from "./context/CartContext"

// основные страницы
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Shop from './Pages/Shop/Shop'
import Single from './Pages/single/Single'
import Team from "./Pages/team/Team"
import Services from "./Pages/services/Services"
import News from "./Pages/news/News"
import Cart from "./Pages/Cart/Cart"
import Contacts from './Pages/contacts/Contacts'
import Register from "./Pages/Register/Register"

// каталоги
import NotFound from "./Pages/NotFound/NotFound"
import Licenses from "./Pages/Licenses/Licenses"
import Style from './Pages/style/Style'

// новости
import NewsandBlog3 from "./Pages/NewsandBlog3/NewsandBlog3"
import NewsandBlog4 from "./Pages/NewsandBlog4/NewsandBlog4"
import NewsandBlog5 from "./Pages/NewsandBlog5/NewsandBlog5"
import NewsandBlog6 from './Pages/NewsandBlog6/NewsandBlog6'

import Sec1 from "./Pages/Home/sec1/Sec1"
import Sect2 from "./Pages/Home/sec2/Sect2"
import Sec11 from "./Pages/Home/sect11/Sect11"
import Sec3 from "./Pages/Home/sec3/Sec3"

function App() {
  return (
    <CartProvider>
      <Header />

      <Routes>
        {/* главные маршруты */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/single" element={<Single/>}/>
        <Route path="/cart" element={<Cart />} />
        
        {/* МАРШРУТ ДЛЯ РЕГИСТРАЦИИ */}
        <Route path="/register" element={<Register />} />

        {/* каталоги */}
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News/>} />
        
        {/* новости */}
        <Route path="/newsandblog3" element={<NewsandBlog3/>} />
        <Route path="/newsandblog4" element={<NewsandBlog4/>} />
        <Route path="/newsandblog5" element={<NewsandBlog5/>} />
        <Route path="/newsandblog6" element={<NewsandBlog6/>} />

        {/* футер */}
        <Route path="/notfound" element={<NotFound/>}/>
        <Route path="/Licenses" element={<Licenses/>} />
        <Route path="/style" element={<Style/>}/>


        <Route path="/sec11" element={<Sec11 />} />
        <Route path="/sec1" element={<Sec1 />} />
        <Route path="/sect2" element={<Sect2 />} />
        <Route path="/sec3" element={<Sec3 />} />

        {/* (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  )
}

export default App