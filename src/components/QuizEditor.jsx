import { MdDelete } from "react-icons/md";

import OptionList from "./OptionList";

export default function QuestionEditor({
  question,
  questionIndex,
  quiz,
  setQuiz,
}) {
  
  const updateField = (field, value) => {
    const updated = [...quiz.questions]; 
    updated[questionIndex][field] = value;

    setQuiz({ ...quiz, questions: updated });
  };

/**
 * Hàm xoá question
 */
  const handleDeleteQuestion = () => {
  const confirmDelete = window.confirm("Delete this question?");
  if (!confirmDelete) return;

  // xoá question
  let updated = quiz.questions.filter((_, i) => i !== questionIndex);

  updated = updated.map((q, index) => ({
    ...q,
    sortOrder: index + 1,
  }));

  setQuiz({ ...quiz, questions: updated });
};

  return (
    <div className="bg-white p-6 rounded-xl border">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">QUESTION</h2>

        <button
          onClick={handleDeleteQuestion}
          className="text-red-500 text-sm hover:underline"
        >
          <MdDelete />
        </button>
      </div>

      
      <input
        className="w-full border rounded-lg p-2 mb-3"
        placeholder="Question name"
        value={question.name}
        onChange={(e) => updateField("name", e.target.value)}
      />

      
      <textarea
        className="w-full border rounded-lg p-2 mb-4"
        placeholder="Description"
        value={question.description}
        onChange={(e) => updateField("description", e.target.value)}
      />

      
      <input
        type="number"
        className="border rounded p-2 mb-4 w-24"
        value={question.sortOrder}
        onChange={(e) =>
          updateField("sortOrder", Number(e.target.value))
        }
      />

      
      <OptionList
        question={question}
        questionIndex={questionIndex}
        quiz={quiz}
        setQuiz={setQuiz}
      />
    </div>
  );
}