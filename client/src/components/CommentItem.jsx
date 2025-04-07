import { useState } from "react";
import { MoreVertical } from "lucide-react";

const CommentItem = ({ comment, userId, token, refreshComments }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.comment);
  const [showMenu, setShowMenu] = useState(false);

  const isOwner = comment.userId === userId;

  const handleDelete = async () => {
    await fetch(`https://youtube-clone-backend-murex.vercel.app/comment/${comment._id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    refreshComments();
  };

  const handleEdit = async () => {
    await fetch(`https://youtube-clone-backend-murex.vercel.app/comment/${comment._id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: editedText }),
    });
    setEditing(false);
    refreshComments();
  };

  return (
    <div className="text-gray-300 bg-gray-800 p-3 rounded relative">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold text-white">{comment.userName}</p>
          {editing ? (
            <textarea
              className="w-full bg-gray-700 p-1 rounded text-white mt-1"
              rows={2}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <p className="mt-1">{comment.comment}</p>
          )}
        </div>

        <div className="relative">
          <button onClick={() => setShowMenu(!showMenu)} className="text-white">
            <MoreVertical size={18} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 bg-gray-700 rounded shadow-md z-10 p-2 w-28">
              {isOwner ? (
                <>
                  <button
                    className="text-white w-full text-left hover:bg-gray-600 px-2 py-1 rounded"
                    onClick={() => {
                      setEditing(true);
                      setShowMenu(false);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-white w-full text-left hover:bg-gray-600 px-2 py-1 rounded"
                    onClick={() => {
                      handleDelete();
                      setShowMenu(false);
                    }}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <p className="text-sm text-red-400 px-2">Report</p>
              )}
            </div>
          )}
        </div>
      </div>

      {editing && (
        <div className="mt-2 flex gap-2">
          <button
            onClick={handleEdit}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditing(false);
              setEditedText(comment.comment);
            }}
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
