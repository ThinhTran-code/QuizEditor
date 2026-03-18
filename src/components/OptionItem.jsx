export default function OptionItem({
  option,
  optionIndex,
  questionIndex,
  quiz,
  setQuiz,
}) {

  /**
   * Hàm update các field của option (value, label, sortOrder)
   */
  const update = (field, value) => {
    const updated = [...quiz.questions];
    updated[questionIndex].options[optionIndex][field] = value;
    setQuiz({ ...quiz, questions: updated });
  };

  /**
   * Hàm để tick chọn đáp án đúng
   */
  const toggleCorrect = (checked) => {
    const updated = [...quiz.questions];
    const question = updated[questionIndex];

    if (checked) {
      question.correctOptionValue.push(option.value);
    } else {
      question.correctOptionValue =
        question.correctOptionValue.filter(
          (v) => v !== option.value
        );
    }

    setQuiz({ ...quiz, questions: updated });
  };

  /**
   * Hàm xoá các option hiện tại
   */
  const deleteOption = () => {
    const updated = [...quiz.questions];
    updated[questionIndex].options =
      updated[questionIndex].options.filter(
        (_, i) => i !== optionIndex
      );

    setQuiz({ ...quiz, questions: updated });
  };

  return (
    <div className="flex items-center gap-3 border rounded-lg p-3 mb-2">
      <input
        type="checkbox"
        checked={quiz.questions[
          questionIndex
        ].correctOptionValue.includes(option.value)}
        onChange={(e) => toggleCorrect(e.target.checked)}
      />

      <input
        className="w-16 border p-1 rounded"
        value={option.sortOrder}
        onChange={(e) =>
          update("sortOrder", Number(e.target.value))
        }
      />

      <input
        className="flex-1 border p-2 rounded"
        placeholder="Label"
        value={option.label}
        onChange={(e) => update("label", e.target.value)}
      />

      <input
        className="flex-1 border p-2 rounded"
        placeholder="Value"
        value={option.value}
        onChange={(e) => update("value", e.target.value)}
      />

      <button
        onClick={deleteOption}
        className="text-red-500"
      >
        ✕
      </button>
    </div>
  );
}