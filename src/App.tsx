import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import ArticleDetail from './pages/ArticleDetail'
import LayoutPage from './pages/LayoutPage'
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import ArticleList from './pages/ArticleList'
import "gridjs/dist/theme/mermaid.css";
import NotFound from './pages/NotFound'
import ArticleEdit from './pages/ArticleEdit'
import Dashboard from './pages/Dashboard'

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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="article-list" element={<ArticleList />} />
          <Route path="article/detail/:id" element={<ArticleDetail />} />
          <Route path="article/edit/:id" element={<ArticleEdit />} />
          <Route path="article/add" element={<ArticleEdit />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Redirect all unknown routes to Login */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
