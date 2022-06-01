import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleMessage(client: Socket, payload: string): void;
    addCart(client: Socket, payload: string): void;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
}
