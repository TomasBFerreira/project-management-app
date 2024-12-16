import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KubernetesService {
  private apiUrl = 'your-kubernetes-api-endpoint';

  constructor(private http: HttpClient) {}

  deployProject(project: any) {
    return this.http.post(`${this.apiUrl}/deployments`, project);
  }

  scaleProject(projectId: string, replicas: number) {
    return this.http.patch(`${this.apiUrl}/deployments/${projectId}`, { replicas });
  }
}
