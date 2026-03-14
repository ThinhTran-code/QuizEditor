export default function QuizForm({ quiz, setQuiz }) {

    //Ham xu ly su kien thay doi ten
    const handleNameChange = (e) => {
        setQuiz({ ...quiz, name: e.target.value });
    };

    //Ham su ly su kien thay doi description
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
                    placeholder="Enter quiz name"
                    style={{ width: "300px" }}
                />
            </div>

            <div>
                <label>Description:</label>
                <br />
                <textarea
                    value={quiz.description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter quiz description"
                    rows="3"
                    style={{ width: "300px" }}
                />
            </div>

        </div>
    );
}