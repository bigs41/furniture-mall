import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
 } from '@nestjs/websockets';
 import { Logger } from '@nestjs/common';
 import { Socket, Server } from 'socket.io';
import _ from 'lodash';
import * as help from 'src/helper/utils';
 import { decode } from 'jsonwebtoken';
 @WebSocketGateway({
   cors: {
     origin: '*',
   },
   transports: ['websocket'],
   path: "/api/tts_io"
 })
 export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
 
  @WebSocketServer() server: Server;
  // private logger: Logger = new Logger('AppGateway');
 
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): void {
    console.log(payload);
   this.server.emit('msgToClient', payload);
   }
   @SubscribeMessage('add-cart')
   addCart(client: Socket, payload: string): void {
    // console.log(JSON.parse(JSON.stringify(client.handshake.query)).token);
     let user:any = {}
     try {
      user = decode(JSON.parse(JSON.stringify(client.handshake.query)).token);
     } catch (error) { 
        console.log(error);
     }
     if (!help.empty(user)) {
        console.log(user);
        
       this.server.emit('add-cart', payload);
      } else {
        return;
      }
        // this.server.emit('add-cart', payload);
   }
  
 
  afterInit(server: Server) {
  //  this.logger.log('Init');
  }
 
  handleDisconnect(client: Socket) {
  //  this.logger.log(`Client disconnected: ${client.id}`);
  }
 
  
  handleConnection(client: Socket, ...args: any[]) {
    let user:any = {}
     try {
        user = decode(JSON.parse(JSON.stringify(client.handshake.query)).token);
     } catch (error) { 
        console.log(error);
    }
    if (!help.empty(user)) { 
      client.join(user._id);
    }
    
  //  this.logger.log(`Client connected: ${client.id}`);
  }
 }