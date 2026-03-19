import { useState } from "react";
import QuestionList from "../components/QuestionList";
import QuestionEditor from "../components/QuizEditor";
import QuizForm from "../components/QuizForm";

export default function QuizEditorPage() {

  //Lưu giá trị và cập nhật quiz
  const [quiz, setQuiz] = useState({
    name: "",
    description: "",
    questions: [],
  });

  const [selectedIndex, setSelectedIndex] = useState(null);

  /**
   * Hàm tạo bài quiz mới
   */
  const handleNewQuiz = () => {
    const confirmReset = window.confirm(
      "Bạn muốn tạo quiz mới?"
    );

    if (!confirmReset) return;

    setQuiz({
      name: "",
      description: "",
      questions: [],
    });

    setSelectedIndex(null);
  };

  /**
   * Export quiz hiện tại thành file Json
   */
  const exportQuiz = () => {
    const dataStr = JSON.stringify(quiz, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "quiz.json";
    link.click();
  };

  /**
   * Import file Json vào thành quiz
   */
  const importQuiz = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      setQuiz(data);
      setSelectedIndex(0);
    };

    reader.readAsText(file);
  };

  /**
   * Validate phải nhập đủ data
   */
  const isValidQuiz = () => {
    if (!quiz.name.trim()) return false;

    for (let q of quiz.questions) {
      if (!q.name.trim()) return false;
      if (q.options.length < 2) return false;
      if (q.correctOptionValue.length < 1) return false;
    }

    return true;
  };
  return (
    <div className="h-screen flex flex-col bg-gray-50">

      <div className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <h1 className="text-xl font-semibold">Quiz Editor</h1>

        <div className="flex gap-3">
          <button
            onClick={handleNewQuiz}
            className="px-4 py-2 border rounded-full hover:bg-gray-100"
          >
            New Quiz
          </button>

          <label className="px-4 py-2 bg-blue-900 text-white rounded-full cursor-pointer">
            Import JSON
            <input
              type="file"
              accept=".json"
              onChange={importQuiz}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">

        <div className="w-1/4 border-r bg-white p-4 overflow-y-auto">
          <QuestionList
            quiz={quiz}
            setQuiz={setQuiz}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>

        <div className="w-2/4 p-6 overflow-y-auto">
          {selectedIndex !== null && quiz.questions[selectedIndex] ? (
            <QuestionEditor
              question={quiz.questions[selectedIndex]}
              questionIndex={selectedIndex}
              quiz={quiz}
              setQuiz={setQuiz}
            />
          ) : (
            <div className="text-gray-400 text-center mt-20">
              Select a question to edit
            </div>
          )}
        </div>


        <div className="w-1/4 border-l bg-white p-6">
          <QuizForm quiz={quiz} setQuiz={setQuiz} />
          <button
            onClick={exportQuiz}
            disabled={!isValidQuiz()}
            className={`w-full mt-3 py-2 rounded-full ${isValidQuiz()
                ? "bg-blue-900 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Export JSON
          </button>
        </div>
      </div>
    </div>
  );
}