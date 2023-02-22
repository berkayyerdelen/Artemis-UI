import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stockInformationApiResponse } from '../models/response/stockInformationApiResponse';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { purchaseStockApiRequest, purchaseStockApiRequest as PurchaseStockApiRequest } from '../models/response/purchaseStockApiRequest';
@Component({
  selector: 'app-stocks-purchase',
  templateUrl: './stocks-purchase.component.html',
  styleUrls: ['./stocks-purchase.component.css'],
})
export class StocksPurchaseComponent implements OnInit {
  constructor(private httpclient: HttpClient) {}

  baseUrl: string = 'http://localhost:5063/';
  stockInformationList: stockInformationApiResponse[] = [];
  stockPurchaseFormGroup = new FormGroup({
    stockQuantity: new FormControl(),
    stockId: new FormControl(),
  });

  ngOnInit(): void {
    this.httpclient
      .get<stockInformationApiResponse[]>(this.baseUrl + 'stockManagement')
      .subscribe((data: stockInformationApiResponse[]) => {
        this.stockInformationList = data;
      });
  }

  purchaseStock(): void {
    var stockId = this.stockPurchaseFormGroup.get('stockId')?.value;
    var stockQuantity = this.stockPurchaseFormGroup.get('stockQuantity')?.value;
    var userId = '1357fe31-1725-4123-8b4d-eec52a1d117d';
    var accountId = 'debdbbfe-5c39-4704-b58a-a8e68ed8edc0';
    debugger;
    var request = new purchaseStockApiRequest();
    request.quantity = stockQuantity;
    request.stockId = stockId;

    this.httpclient
      .post(`${this.baseUrl}stockManagement/${userId}/purchase/${accountId}`, request)
      .subscribe(() => {});
  }
}
