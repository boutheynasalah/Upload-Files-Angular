import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  baseUrl = "http://localhost:3000";
  constructor(    private http: HttpClient,
    ) { }
  uploadToClient(file){
    let url = `${this.baseUrl}/upload/uploadfile`;
    return this.http.post(url,file);
}
}
