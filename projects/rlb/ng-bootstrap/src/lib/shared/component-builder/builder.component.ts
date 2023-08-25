import { ComponentRef, Injectable, Type } from '@angular/core';
import { ComponentHostDirective } from './component-host.directive';
import { ComponentInfo } from './data/component-info';
import { GenericComponent } from './generic.component';
import { AbstractRegistryService } from '../abstract.registry.service';
import { ComponentCreationOptions } from './data/component-creation-options';

@Injectable()
export abstract class BuilderComponent<T extends AbstractRegistryService<Function>> {
	abstract component: ComponentHostDirective;
	abstract builderId: string;

	constructor(protected registryService: T) { }

	public buildComponent(component: ComponentInfo, options?: ComponentCreationOptions): ComponentRef<GenericComponent> | null {
		if (component.name) {
			const componentType = this.registryService.get(component.name) as Type<any>;
			const componentRef = this.component.viewContainerRef.createComponent<GenericComponent>(componentType);
			componentRef.instance.data = component.data;
			if (options?.setInstance === true) {
				componentRef.setInput(options?.instanceInputName || 'data-instance', componentRef.instance);
			}
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