import { chatbotPrompt } from "@/helpers/constants/chatbot-prompt";
import { messageArrayValidator } from "@/lib/validators/message";
import { ChatGPTMessage, OpenAiStream, OpenAiStreamPayload } from "@/lib/validators/openai-stream";

export async function POST(req: Request) {
  const {messages} = await req.json();

  const parsedMessages = messageArrayValidator.parse(messages);

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map(message=>({
    role: message.isUserMessage ? 'user' : 'system',
    content: message.text,
  }));
  
  outboundMessages.unshift({
    role: 'system',
    content: chatbotPrompt,
  });

  const payload: OpenAiStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: outboundMessages,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 150,
    stream: true,
    n: 1
  }

  const stream = await OpenAiStream(payload);

  return new Response(stream);
}