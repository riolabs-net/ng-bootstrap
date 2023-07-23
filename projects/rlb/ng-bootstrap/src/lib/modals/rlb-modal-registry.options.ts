import { Injectable, Type } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class RlbModalRegistryOptions implements RlbModalRegistryOptions {
    public modals!: Type<any>[]
}

export interface RlbModalRegistryOptions {
    modals: Type<any>[]
}