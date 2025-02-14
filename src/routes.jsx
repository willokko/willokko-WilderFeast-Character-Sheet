import { Routes, Route } from 'react-router-dom'
import CharacterList from './components/CharacterList'
import CreateCharacter from './components/CreateCharacter'
import EditCharacter from './components/EditCharacter'
import ViewCharacter from './components/ViewCharacter'
import Rules from './components/Rules'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/create" element={<CreateCharacter />} />
      <Route path="/edit/:id" element={<EditCharacter />} />
      <Route path="/view/:id" element={<ViewCharacter />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  )
} 