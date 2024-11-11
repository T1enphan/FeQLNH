import React, { useEffect, useState } from "react";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  Window,
  ChannelList,
  Thread,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import axios from "axios";
import "stream-chat-react/dist/css/v2/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../chat_feature/index.css"

const apiKey = "cad9tfc3qmpv";
const channelId = "chat-channel";

const ChatApp = () => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("AdminAccount");
    const adminData = storedAdmin ? JSON.parse(storedAdmin) : null;

    if (adminData && adminData.admin?.id) {
      const fetchToken = async () => {
        try {
          // Request the token from backend API using Axios
          const response = await axios.get(`http://localhost:3003/api/admin/${adminData.admin.id}/token`);
          const { token } = response.data;

          setAccessToken(token);
          setAdminUser({
            id: String(adminData.admin.id), // Ensure ID is a string
            name: adminData.admin.name,
            role: 'admin', //Check role cho user thứ 2 vào
          });
        } catch (error) {
          console.error("Error fetching token:", error);
          toast.error("Không thể lấy token từ server.");
        }
      };

      fetchToken();
    } else {
      toast.warning("Tài khoản Admin không hợp lệ. Vui lòng đăng nhập lại và kiểm tra thông tin.");
    }
  }, []);

  useEffect(() => {
    if (!accessToken || !adminUser) return;

    const chatClient = StreamChat.getInstance(apiKey);

    chatClient.connectUser(adminUser, accessToken)
      .then(() => {
        const channel = chatClient.channel("messaging", channelId, {
          members: ["1", "2", "7"],
          // cần check lại chỗ này
          // members: [adminUser.id],
        });
        console.log(channel);
        setChannel(channel);
        setClient(chatClient);
        channel.watch();
      })
      .catch((error) => {
        console.error("Error connecting Admin:", error);
        toast.warning(
          `Không thể kết nối tài khoản Admin: ${adminUser.name}. Lỗi: ${error.message}`
        );
      });

    return () => {
      chatClient.disconnectUser();
    };
  }, [accessToken, adminUser]);

  if (!channel) {
    return <div>Loading...</div>;
  }

  // return (
  //   <Chat client={client} theme="messaging light">
  //     <ToastContainer />
  //     <ChannelList
  //       filters={{
  //         type: "messaging",
  //         members: { $in: [channelId] },
  //       }}
  //     />
  //     <Channel channel={channel}>
  //       <Window>
  //         <MessageList className="custom-message-list" />
  //         <MessageInput />
  //       </Window>
  //       <Thread />
  //     </Channel>
  //   </Chat>
  // );
  return (
    <>
      <style>
        {`
          .str-chat__list .str-chat__message-list-scroll .str-chat__ul {
            max-height: 500px;
          }
        `}
      </style>
      <Chat client={client} theme="messaging dark">
        <ToastContainer />
        {/* <ChannelList
          filters={{
            type: "messaging",
            members: { $in: [channelId] },
          }}
        /> */}
        <Channel channel={channel}>
          <Window>
            <MessageList hideDeletedMessages={true} closeReactionSelectorOnClick={false} />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </>
  );
};

export default ChatApp;
