import { useState } from "react";
import QuizForm from "../components/QuizForm";
import QuestionList from "../components/QuestionList";

export default function QuizEditorPage() {

  const [quiz, setQuiz] = useState({
    name: "",
    description: "",
    questions: []
  });

  /**
   * Hàm lấy quiz ra file json
   */
  const exportQuiz = () => {

    const dataStr = JSON.stringify(quiz, null, 2);

    const blob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "database.json";
    link.click();

  };
/**
 * Hàm đưa file json vào thành quiz
 */
  const importQuiz = (event) => {

    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setQuiz(data);
    };

    reader.readAsText(file);

  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Quiz Editor</h1>

      <button onClick={exportQuiz}>
        Export Quiz JSON
      </button>

      <div style={{ marginTop: "10px", marginBottom: "20px" }}>
        <input
          type="file"
          accept=".json"
          onChange={importQuiz}
        />
      </div>

      <QuizForm quiz={quiz} setQuiz={setQuiz} />

      <QuestionList quiz={quiz} setQuiz={setQuiz} />

    </div>
  );
}