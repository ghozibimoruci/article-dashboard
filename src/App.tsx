import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import About from './pages/About'
import LayoutPage from './pages/LayoutPage'
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import ArticleList from './pages/ArticleList'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LayoutPage />
            </ProtectedRoute>
          }
        >
          <Route path="article-list" element={<ArticleList />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* Redirect all unknown routes to Login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
