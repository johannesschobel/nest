import { BaseRpcContext } from './base-rpc.context';

type RmqContextArgs = [Record<string, any>, any];

export class RmqContext extends BaseRpcContext<RmqContextArgs> {
  constructor(args: RmqContextArgs) {
    super(args);
  }

  /**
   * Returns the original message (with properties, fields, and content).
   */
  getMesssage() {
    return this.args[0];
  }

  /**
   * Returns the reference to the original RMQ channel.
   */
  getChannelRef() {
    return this.args[1];
  }
}
