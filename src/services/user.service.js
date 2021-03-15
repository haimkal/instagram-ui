import Cookies from 'js-cookie';
import environment from '../environments/index';
export class UserService {

    static getToken() {
      return Cookies.get('instagram-user');
    }
    
    static me() {
        const body = {
            token: UserService.getToken()
          };
        return fetch(environment.apiUrl+'/user/me', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: UserService.getToken()
          },
          body: JSON.stringify(body)
          }).then(res=> {
            if (res.status !== 200) {
              return null;
            }
            return res.json();
          });
    } 

    static create (values) {
        return fetch (environment.apiUrl+'/user', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
    }

    static login (values) {
      return fetch(environment.apiUrl+'/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    }

    static async getPosts (username) {
        const res = await fetch (environment.apiUrl+'/user/'+ username +'/posts', {
          headers: {
            Authorization: UserService.getToken()
          },
        }); 
       return res.json();
      }

      
    static async get (username) {
      const res = await fetch (environment.apiUrl+'/user/'+ username, {
        headers: {
          Authorization: UserService.getToken()
        },
      }); 
     return res.json();
    }

       
    static async search (username) {
      const res = await fetch (environment.apiUrl+'/user?username='+ username, {
        headers: {
          Authorization: UserService.getToken()
        },
      }); 
     return res.json();
    }

    static async editUser(values){
      const user = JSON.parse(atob(UserService.getToken().split('.')[1]));
      const res = await fetch (environment.apiUrl+`/user/edit/${user._id}`, {
        method: 'POST',
        headers: {
          Authorization: UserService.getToken(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }); 
      return res.json();

    }


    
  }


