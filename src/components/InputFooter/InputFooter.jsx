import "./InputFooter.scss";
import avatarImg from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";
import { toast } from "react-toastify";

function InputFooter({ postFunction }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const commentInput = event.target.commentText.value;
    const nameInput = event.target.name.value;
    if (commentInput.trim() === "" || nameInput.trim() === "") {
      toast.error("Please enter the comment and name");
    } else {
      const response = await postFunction({
        name: nameInput,
        comment: commentInput,
      });
      event.target.reset();
    }
  }
  return <div className="input-footer">
      <div className="comments">
        <img src={avatarImg} alt="A user's face image" className="comments__avatar-image" />
        <form className="comments__form" onSubmit={handleSubmit}>
          <label htmlFor="comment" className="comments__title">
            Join the Conversation
          </label>
          <div className="input-button-box">
            <div className="comments__comment">
              <input type="text" className="input comments__name-input" name="name" id="name" placeholder="Add a name" />
              <input type="text" className="comments__input comments__input__text" name="commentText" id="commentInput" placeholder="Add a new comment" />
            </div>
            <button type="submit" className="comments__button button">
              <img src={commentIcon} alt="upload icon, interact to upload." className="comments__button-img" />
              <span className="comments__button-text">COMMENT</span>
            </button>
          </div>
        </form>
      </div>
    </div>;
}

export default InputFooter;
