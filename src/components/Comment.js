import thumbnail from "../assets/thumbnail-avatar.png";
import "./Comment.css";

const Comment = () => {
  return (
    <div className="comment">
      <img src={thumbnail} alt="" />
      <div className="profile">
        <div className="name-date">
          <h3 className="name">Matt Adams</h3>
          <p className="date">Jan 2nd, 2012 2:35 pm</p>
          <p className="reply">Reply</p>
        </div>
        <p className="text">
          Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui,
          nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit
          egestas, augue vel suspendisse. Et felis venenatis blandit sed est
          ultrices, adipiscing urna.
        </p>
      </div>
    </div>
  );
};

export default Comment;
