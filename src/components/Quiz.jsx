import { useState } from 'react'

const QUESTIONS = [
  'How much cuddle time do you want?',
  'How active would you like your cat to be?',
  'How social should your cat be with visitors?',
  'How tolerant should your cat be with kids?',
]

export default function Quiz({ onClose }) {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(2))
  const [result, setResult] = useState(null)
  const base = import.meta.env.VITE_BACKEND_URL

  const submit = async () => {
    const res = await fetch(`${base}/api/quiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers })
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-2xl w-full max-w-xl p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Find your ragdoll vibe</h3>
          <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-800">Close</button>
        </div>

        {!result ? (
          <div className="mt-4 space-y-6">
            {QUESTIONS.map((q, i) => (
              <div key={i}>
                <div className="font-medium">{q}</div>
                <input type="range" min="1" max="4" value={answers[i]} onChange={e => {
                  const v = Number(e.target.value)
                  setAnswers(prev => prev.map((x, idx) => idx === i ? v : x))
                }} className="w-full mt-2" />
                <div className="text-xs text-gray-500">{answers[i]}</div>
              </div>
            ))}
            <button onClick={submit} className="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-500">See result</button>
          </div>
        ) : (
          <div className="mt-6 text-center">
            <div className="text-6xl">🐾</div>
            <div className="mt-2 text-2xl font-semibold">{result.personality}</div>
            <div className="text-gray-600">Score: {result.score}</div>
          </div>
        )}
      </div>
    </div>
  )
}
