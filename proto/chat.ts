/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "chat";

/** Chat Room Messages */
export interface ChatRoom {
  id: string;
  name: string;
  /** "direct" or "group" */
  type: string;
  memberIds: number[];
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  id: string;
  chatRoomId: string;
  senderId: number;
  content: string;
  createdAt: string;
}

/** Request Messages */
export interface CreateChatRoomRequest {
  memberIds: number[];
  roomName: string;
  /** "direct" or "group" */
  type: string;
}

export interface GetChatRoomRequest {
  chatRoomId: string;
  userId: number;
}

export interface GetChatRoomsRequest {
  userId: number;
  page: number;
  pageSize: number;
}

export interface SendMessageRequest {
  chatRoomId: string;
  senderId: number;
  content: string;
}

export interface GetMessagesRequest {
  chatRoomId: string;
  userId: number;
  page: number;
  pageSize: number;
}

/** Response Messages */
export interface CreateChatRoomResponse {
  chatRoom: ChatRoom | undefined;
}

export interface GetChatRoomResponse {
  chatRoom: ChatRoom | undefined;
}

export interface GetChatRoomsResponse {
  chatRooms: ChatRoom[];
  hasNext: boolean;
}

export interface SendMessageResponse {
  message: ChatMessage | undefined;
}

export interface GetMessagesResponse {
  messages: ChatMessage[];
  hasNext: boolean;
}

export interface CommonResponse {
  success: boolean;
  message: string;
}

export const CHAT_PACKAGE_NAME = "chat";

/** Service Definition */

export interface ChatServiceClient {
  createChatRoom(request: CreateChatRoomRequest): Observable<CreateChatRoomResponse>;

  getChatRoom(request: GetChatRoomRequest): Observable<GetChatRoomResponse>;

  getChatRooms(request: GetChatRoomsRequest): Observable<GetChatRoomsResponse>;

  sendMessage(request: SendMessageRequest): Observable<SendMessageResponse>;

  getMessages(request: GetMessagesRequest): Observable<GetMessagesResponse>;
}

/** Service Definition */

export interface ChatServiceController {
  createChatRoom(
    request: CreateChatRoomRequest,
  ): Promise<CreateChatRoomResponse> | Observable<CreateChatRoomResponse> | CreateChatRoomResponse;

  getChatRoom(
    request: GetChatRoomRequest,
  ): Promise<GetChatRoomResponse> | Observable<GetChatRoomResponse> | GetChatRoomResponse;

  getChatRooms(
    request: GetChatRoomsRequest,
  ): Promise<GetChatRoomsResponse> | Observable<GetChatRoomsResponse> | GetChatRoomsResponse;

  sendMessage(
    request: SendMessageRequest,
  ): Promise<SendMessageResponse> | Observable<SendMessageResponse> | SendMessageResponse;

  getMessages(
    request: GetMessagesRequest,
  ): Promise<GetMessagesResponse> | Observable<GetMessagesResponse> | GetMessagesResponse;
}

export function ChatServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createChatRoom", "getChatRoom", "getChatRooms", "sendMessage", "getMessages"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChatService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChatService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAT_SERVICE_NAME = "ChatService";
