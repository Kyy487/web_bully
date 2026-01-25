import { useState, useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import Layout from "../components/Layout"

// Load stories dari localStorage
function loadStories() {
  try {
    const saved = localStorage.getItem("cerita_stories")
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

// Save stories ke localStorage
function saveStories(stories) {
  localStorage.setItem("cerita_stories", JSON.stringify(stories))
}

export default function RuangCerita() {
  const [stories, setStories] = useState([])
  const [input, setInput] = useState("")
  const [username, setUsername] = useState("")
  const [showUsernameForm, setShowUsernameForm] = useState(true)
  const [title, setTitle] = useState("")
  const messagesEndRef = useRef(null)
  const { user } = useContext(AuthContext)

  // Load stories from localStorage on mount
  useEffect(() => {
    const saved = loadStories()
    setStories(saved)
    const savedUsername = localStorage.getItem("user_cerita_name")
    if (savedUsername) {
      setUsername(savedUsername)
      setShowUsernameForm(false)
    }
  }, [])

  // Auto scroll ke cerita terbaru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [stories])

  // Set username
  const handleSetUsername = (e) => {
    e.preventDefault()
    if (username.trim()) {
      localStorage.setItem("user_cerita_name", username)
      setShowUsernameForm(false)
    }
  }

  // Simpan cerita baru
  const saveStory = () => {
    if (!input.trim() || !username.trim() || !title.trim()) return

    const newStory = {
      id: Date.now(),
      title: title,
      username: username,
      content: input,
      timestamp: new Date().toISOString(),
      read: false
    }

    const updated = [...stories, newStory]
    setStories(updated)
    saveStories(updated)
    setInput("")
    setTitle("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      saveStory()
    }
  }

  // Delete story
  const deleteStory = (id) => {
    if (window.confirm("Hapus cerita ini?")) {
      const updated = stories.filter(s => s.id !== id)
      setStories(updated)
      saveStories(updated)
    }
  }

  if (showUsernameForm) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
            <div className="text-center mb-8">
              <h1 className="text-4xl mb-2">📖</h1>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Ruang Cerita</h2>
              <p className="text-slate-600">Ceritakan kisahmu, sebelum itu siapa nama Anda?</p>
            </div>

            <form onSubmit={handleSetUsername} className="space-y-6">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan nama Anda..."
                className="w-full p-4 border-2 border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none"
                autoFocus
              />
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-semibold transition shadow-lg"
              >
                ➤ Mulai Cerita
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Cerita Anda akan disimpan dan dapat dilihat oleh Admin. 💚
            </p>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="h-screen flex flex-col bg-white">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">📖 Ruang Cerita</h1>
              <p className="text-purple-100">
                {`Halo ${username}! Ceritakan kisahmu di sini - Aman & Terpercaya`}
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="bg-white/20 text-white px-4 py-2 rounded-full font-semibold">
                {stories.length} Cerita
              </div>
            </div>
          </div>
        </div>

        {/* STORIES AREA */}
        <div className="flex-1 overflow-y-auto p-8 space-y-4 bg-slate-50">
          {stories.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center">
              <div className="text-slate-400">
                <p className="text-xl mb-2">📖 Belum ada cerita</p>
                <p>Mulai ceritakan kisahmu di bawah!</p>
              </div>
            </div>
          ) : (
            stories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-600">{story.title}</h3>
                    <p className="text-sm text-slate-500">
                      {story.username} • {new Date(story.timestamp).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteStory(story.id)}
                    className="text-red-500 hover:text-red-700 font-semibold transition"
                  >
                    🗑️
                  </button>
                </div>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{story.content}</p>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT AREA */}
        <div className="bg-white border-t-2 border-slate-200 p-8">
          <div className="max-w-6xl mx-auto space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul cerita Anda..."
              className="w-full p-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none font-semibold"
            />
            
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ceritakan kisahmu di sini... (Tekan Shift+Enter untuk baris baru, Enter untuk kirim)"
              className="w-full p-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none resize-none"
              rows="5"
            />
            
            <button
              onClick={saveStory}
              disabled={!input.trim() || !title.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-300 disabled:to-slate-300 text-white py-4 rounded-xl font-semibold transition shadow-lg"
            >
              💾 Simpan Cerita
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
