import { Injectable, Type } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class ModalRegistryOptions implements ModalRegistryOptions {
    public modals!: Type<any>[]
}

export interface ModalRegistryOptions {
    modals: Type<any>[]
}