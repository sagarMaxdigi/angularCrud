import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  listBaseUrl = 'http://192.168.0.8:8080/webServiceAngular/index.php?showData=SET';
  saveBaseUrl = 'http://192.168.0.8:8080/webServiceAngular/index.php';
  editUrl = '';
  deleteUrl = '';
  posts:any;
  constructor(private http: HttpClient) {  }

  getListData() {
    return this.http.get(`${this.listBaseUrl}`)
  }

  saveUserData(firstParameter: string,secondParameter: string,thirdParameter: string,forthParameter: string){
    let params = new HttpParams()
      .set('firstParameter',firstParameter)
      .set('secondParameter',secondParameter)
      .set('thirdParameter',thirdParameter)
      .set('forthParameter',forthParameter);
    return this.http.get(`${this.saveBaseUrl}`, {params});
  }
  getEditUser(userID:string){
    this.editUrl = 'http://192.168.0.8:8080/webServiceAngular/index.php?userID='+userID;
    return this.http.get(`${this.editUrl}`);
  }
  saveUserEditData(userID:string,firstParameter: string,secondParameter: string,thirdParameter: string,forthParameter: string){
    let params = new HttpParams()
      .set('ID',userID)
      .set('firstParameter',firstParameter)
      .set('secondParameter',secondParameter)
      .set('thirdParameter',thirdParameter)
      .set('forthParameter',forthParameter);
    return this.http.get(`${this.saveBaseUrl}`, {params});
  }
  onDeleteData(ID:number){
    this.deleteUrl = 'http://192.168.0.8:8080/webServiceAngular/index.php?userDeleteID='+ID;
    return this.http.get(`${this.deleteUrl}`);
  }
}
