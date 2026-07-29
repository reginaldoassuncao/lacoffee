import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CardapioPage } from './pages/Cardapio'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardapioPage />} />
        <Route path="/cardapio" element={<CardapioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
