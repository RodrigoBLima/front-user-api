import HttpServer from "./HttpServer";

class FetchAdapter implements HttpServer {
  get(url: string, params: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async post(url: string, params: any): Promise<any> {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      return data;
    } catch (error: any) {
      return error;
    }
  }
}

export default FetchAdapter;
