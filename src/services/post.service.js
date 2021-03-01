import environment from "../environments";
import { UserService } from "./user.service";

export class PostService{
    static feed(){
        return fetch (environment.apiUrl+'/post', {
            headers: {
                Authorization: UserService.getToken()
            }
        }).then(res=> res.json());
    }

    static async get (id) {
        
            const res = await fetch(environment.apiUrl + '/post/'+id, {
                headers: {
                    Authorization: UserService.getToken()
                }
            });
            return res.json();
        }
    

}