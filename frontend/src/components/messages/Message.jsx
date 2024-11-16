import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  if (!authUser) {
    console.error("authUser is not defined!");
    return null; // Render nothing if authUser is missing
  }

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser.profilePic || "default-profile-pic-url"
    : selectedConversation?.profilePic || "default-profile-pic-url";
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="User avatar" src={`https://avatar.iran.liara.run/public` } />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;





// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>

//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//             <img
//         alt="Tailwind CSS chat bubble component"
//         src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

//             </div>

//         </div>
//        <div className={'chat-bubble text-white bg-blue-500'}>Hi! What is upp?</div>
//        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12.42</div>

      
//     </div>
//   )
// }

// export default Message
