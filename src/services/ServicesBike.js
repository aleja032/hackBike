import {fetchInterceptor} from '../interceptor/interceptor';
class ServiceBike {
    constructor(){
         this.bikeUrl = import.meta.env.VITE_API_BIKES;
    }

    async getInfo(){
    try {
        const response = await fetchInterceptor(this.bikeUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        console.log("respuesta Bike:",response);
        return response.json();
      } catch (error) {
        console.error("API Error:", error);
        throw error;
      }
    };
    
}export default new ServiceBike();