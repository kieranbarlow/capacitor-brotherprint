import { WebPlugin } from '@capacitor/core';
import { BrotherPrintPlugin, BrotherPrintOptions } from './definitions';
export declare class BrotherPrintWeb extends WebPlugin implements BrotherPrintPlugin {
    constructor();
    /**
     * Print with Base64
     */
    printImage(_options: BrotherPrintOptions): Promise<{
        value: boolean;
    }>;
    /**
     * Search Wifi Printer
     */
    searchWiFiPrinter(): Promise<void>;
    /**
     * search Bluetooth Printer
     */
    searchBLEPrinter(): Promise<void>;
}
