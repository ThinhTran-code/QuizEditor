export default function QuizForm({ quiz, setQuiz }) {
  return (
    <div>

      <div className="mb-3">
        <label className="text-sm text-gray-500">
          QUIZ NAME
        </label>
        <input
          className="w-full border rounded-lg p-2 mt-1"
          value={quiz.name}
          placeholder="Quiz name"
          onChange={(e) =>
            setQuiz({ ...quiz, name: e.target.value })
          }
        />
      </div>

      <div>
        <label className="text-sm text-gray-500">
          DESCRIPTION
        </label>
        <textarea
          className="w-full border rounded-lg p-2 mt-1"
          value={quiz.description}
          placeholder="Description name"
          onChange={(e) =>
            setQuiz({ ...quiz, description: e.target.value })
          }
        />
      </div>
    </div>
  );
}