export default function QuizForm({ quiz, setQuiz }) {

    /**
     * Hàm bắt event thay đổi name quiz
     */
    const handleNameChange = (e) => {
        setQuiz({ ...quiz, name: e.target.value });
    };

    /**
     * Hàm bắt event thay đổi description quiz
     */
    const handleDescriptionChange = (e) => {
        setQuiz({ ...quiz, description: e.target.value });
    };
    return (

        //Layout
        <div style={{ marginBottom: "20px" }}>

            <div style={{ marginBottom: "10px" }}>
                <label>Quiz Name:</label>
                <br />
                <input
                    type="text"
                    value={quiz.name}
                    onChange={handleNameChange}
                    placeholder="Nhập vào tên quiz"
                    style={{ width: "300px" }}
                />
            </div>

            <div>
                <label>Description:</label>
                <br />
                <textarea
                    value={quiz.description}
                    onChange={handleDescriptionChange}
                    placeholder="Mô tả quiz"
                    rows="3"
                    style={{ width: "300px" }}
                />
            </div>

        </div>
    );
}