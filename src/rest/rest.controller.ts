import { Controller, Get, Query, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import {
  RpcService,
  Empty,
  GetChampionResponse,
  GetChampionRequest,
  ListChampionsResponse,
  GetBattleFieldResponse,
} from '../../types';
import { grpcClientOptions } from '../grpc-client.options';

@Controller('rest')
export class RestController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private rpcService: RpcService;

  onModuleInit(): void {
    this.rpcService = this.client.getService<RpcService>('Rpc');
  }

  @Get('champion')
  async getChampion(
    @Query() request: GetChampionRequest,
  ): Promise<GetChampionResponse> {
    return this.rpcService.getChampion(request);
  }

  @Get('champions')
  async getChampions(@Query() request: Empty): Promise<ListChampionsResponse> {
    return this.rpcService.listChampions(request);
  }

  @Get('battle_field')
  async getBattleField(
    @Query() request: Empty,
  ): Promise<GetBattleFieldResponse> {
    return this.rpcService.getBattleField(request);
  }
}
