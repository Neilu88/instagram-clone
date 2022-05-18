import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { useEffect } from "react"
import { db } from "../firebase"

import Moment from "react-moment"

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession()
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState([])

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        return setComments(snapshot.docs)
      }
    )
  }, [db, id])

  useEffect(() => {
    onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) => {
      return setLikes(snapshot.docs)
    })
  }, [db, id])

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    )
  }, [likes])

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid))
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      })
    }
  }

  const sendComment = async (e) => {
    e.preventDefault(e)

    const commentToSend = comment
    setComment("")

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className="bg-white border rounded-sm my-7">
      {/* Header */}
      <div className="flex select-none items-center p-5 ">
        <img
          draggable={false}
          className="rounded-full h-12 w-12 object-contain border p1 mr-3"
          src={userImg}
          alt="image"
        />
        <p className="flex-1 font-bold select-none">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <img src={img} className="object-cover w-full" alt="" draggable={false} />
      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4 ">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* caption */}
      <p className="p-5 select-none truncate">
        {likes.length === 1 && (
          <p className="font-bold mb-1">{likes.length} like </p>
        )}
        {likes.length > 1 && (
          <p className="font-bold mb-1">{likes.length} likes </p>
        )}
        <span className="font-bold mr-1 select-none">{username} </span>
        {caption}
      </p>
      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => {
            return (
              <div
                className="flex items-center space-x-2 mb-3"
                key={comment.id}
              >
                <img
                  className="h-7 rounded-full"
                  src={comment.data().userImage}
                  alt=""
                />
                <p className="text-sm flex-1">
                  <span className="font-bold">{comment.data().username} </span>
                  {comment.data().comment}
                </p>
                <Moment fromNow className="pr-5 text-xs">
                  {comment.data().timestamp?.toDate()}
                </Moment>
              </div>
            )
          })}
        </div>
      )}

      {/* inputbox */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            disabled={!comment.trim}
            onClick={sendComment}
            className="font-semi-bold text-blue-500 "
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}
export default Post
