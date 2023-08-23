import { Component, ComponentRef, Injectable, Input, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { ComponentHostDirective } from './component-host.directive';
import { ComponentCreationOptions, ComponentInfo } from './component.info';
import { GenericComponent } from './generic.component';
import { AbstractRegistryService } from '../abstract.registry.service';

@Injectable()
export abstract class BuilderComponent<T extends AbstractRegistryService<Function>> {
	abstract component: ComponentHostDirective;

	constructor(protected registryService: T) { }

	public buildComponent(component: ComponentInfo, options?: ComponentCreationOptions): ComponentRef<GenericComponent> | null {
		if (component.name) {
			const componentType = this.registryService.get(component.name) as Type<any>;
			const componentRef = this.component.viewContainerRef.createComponent<GenericComponent>(componentType);
			componentRef.instance.data = component.data;
			if (options && options.inputs) {
				for (const key in options.inputs) {
					componentRef.setInput(key, options.inputs[key]);
				}
			}
			return componentRef;
		}
		return null;
	}
}