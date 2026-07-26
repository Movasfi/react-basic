import { MessageList } from "../../components/MessageList"

const MessageOverviewPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>Messages</p>
      <MessageList allMessage={true} />
    </div>
  )
}

export default MessageOverviewPage