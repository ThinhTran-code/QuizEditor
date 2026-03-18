export default function QuestionList({
  quiz,
  setQuiz,
  selectedIndex,
  setSelectedIndex,
}) {

  /**
   * Hàm thêm mới câu hỏi của bài quiz
   */
  const addQuestion = () => {
    const newQuestion = {
      name: "",
      description: "",
      sortOrder: quiz.questions.length + 1,
      options: [],
      correctOptionValue: [],
    };

    setQuiz({ ...quiz, questions: [...quiz.questions, newQuestion] });
    setSelectedIndex(quiz.questions.length);
  };

  return (
    <div>
      <h2 className="font-semibold mb-4">QUESTIONS</h2>

      {quiz.questions.map((q, i) => (
        <div
          key={i}
          onClick={() => setSelectedIndex(i)}
          className={`border rounded-lg p-3 mb-2 cursor-pointer ${
            selectedIndex === i ? "bg-blue-50 border-blue-500" : ""
          }`}
        >
          <p className="text-sm text-gray-500">
            {i + 1}. Sort Order
          </p>
          <p className="font-medium truncate">
            {q.name || "Untitled"}
          </p>
        </div>
      ))}

      <button
        onClick={addQuestion}
        className="mt-4 w-full py-2 bg-blue-900 text-white rounded-full"
      >
        Add Question
      </button>
    </div>
  );
}