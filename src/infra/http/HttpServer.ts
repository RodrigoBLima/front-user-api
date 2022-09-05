export default interface HttpServer {
  get(url: string, params: any): Promise<any>;
  post(url: string, params: any): void;
}
