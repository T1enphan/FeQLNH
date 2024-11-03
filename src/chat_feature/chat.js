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
import "stream-chat-react/dist/css/v2/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiKey = "cad9tfc3qmpv";
const channelId = "chat-channel";

const ChatApp = () => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("AdminAccount");
    const adminData = storedAdmin ? JSON.parse(storedAdmin) : null;

    console.log(adminData.token);

    if (!adminData || !adminData.admin.id) {
      alert(
        "Tài khoản Admin không hợp lệ. Vui lòng đăng nhập lại và kiểm tra thông tin."
      );
      return;
    }

    // Chuyển đổi id thành chuỗi và kiểm tra đối tượng adminUser
    const adminUser = {
      ...adminData,
      id: adminData.admin.id.toString(), // Chuyển đổi id thành chuỗi
    };

    console.log("Thông tin adminUser:", adminUser); // Kiểm tra adminUser

    const chatClient = StreamChat.getInstance(apiKey);
    chatClient
      .connectUser(adminUser, chatClient.devToken(adminUser.id))
      .then(() => {
        const channel = chatClient.channel("messaging", channelId, {
          members: [adminUser.id],
        });

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
      if (client) {
        client.disconnectUser();
      }
    };
  }, []);

  if (!channel) {
    return <div>Loading...</div>;
  }

  return (
    <Chat client={client} theme="messaging light">
      <ToastContainer />
      <ChannelList
        filters={{
          type: "messaging",
          members: { $in: [channelId] },
        }}
      />
      <Channel channel={channel}>
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatApp;
