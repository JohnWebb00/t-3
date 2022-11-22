import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ClinicPage from './pages/ClinicPage'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/homepage',
    element: <HomePage />
  },
  {
    path: '/clinic/:pageId',
    element: <ClinicPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router
