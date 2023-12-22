import Header from "../components/Header"
import NotesList from "../components/NotesList"

const Home = () => {
  return (
    <div className="home_view">
        <Header />
        <NotesList />
    </div>
  )
}

export default Home