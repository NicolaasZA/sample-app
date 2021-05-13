import { Injectable } from '@angular/core';
import { Barcode } from '../types/scandit';

@Injectable({providedIn: 'root'})
export class CoreService {

  lastScan: Barcode;

  constructor() { }
  
}