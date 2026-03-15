import QuestionItem from "./QuestionItem";

export default function QuestionList({quiz, setQuiz}) {
  
  /**
   * Hàm thêm question
   */
    const addQuestion = () => {
        const newQuestion = {
            name: "",
            description: "",
            sortOrder: quiz.questions.length + 1,
            options: [],
            correctOptionValue: []
        };
        setQuiz({...quiz, questions: [...quiz.questions, newQuestion]});
    };
   return (
    <div style={{ marginTop: "30px" }}>
      
      <h2>Questions</h2>

      <button onClick={addQuestion}>
        Add Question
      </button>

      {quiz.questions.map((question, index) => (
        <QuestionItem
          key={index}
          question={question}
          index={index}
          quiz={quiz}
          setQuiz={setQuiz}
        />
      ))}

    </div>
  );
}