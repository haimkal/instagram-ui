import Post from "../common/Post/Post";
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

    static async like (id) {
        const res = await fetch (environment.apiUrl + '/post/' +id + '/like', {
            method: 'POST',
           
            headers: {
                Authorization: UserService.getToken(),
                'Content-Type': 'application/json'
            }
                  
            
        });
        // console.log('res from the like fetch:' +res);
        return res.json();
    }
    
    
    static async unlike (id) {
        const res = await fetch (environment.apiUrl + '/post/' +id + '/unlike', {
            method: 'DELETE',
           
            headers: {
                Authorization: UserService.getToken(),
                'Content-Type': 'application/json'
            }
                  
            
        });
        
        return res.json();
    }
    
}