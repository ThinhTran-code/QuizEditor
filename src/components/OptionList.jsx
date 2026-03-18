import OptionItem from "./OptionItem";

export default function OptionList({
  question,
  questionIndex,
  quiz,
  setQuiz,
}) {

  /**
   * Hàm thêm các lựa chọn đáp án
   */
  const addOption = () => {
    const updated = [...quiz.questions];

    updated[questionIndex].options.push({
      value: "",
      label: "",
      sortOrder:
        updated[questionIndex].options.length + 1,
    });

    setQuiz({ ...quiz, questions: updated });
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">
        ANSWERS
      </h3>

      {question.options.map((opt, i) => (
        <OptionItem
          key={i}
          option={opt}
          optionIndex={i}
          questionIndex={questionIndex}
          quiz={quiz}
          setQuiz={setQuiz}
        />
      ))}

      <button
        onClick={addOption}
        className="mt-3 px-4 py-2 border rounded-full"
      >
        Add Option
      </button>
    </div>
  );
}