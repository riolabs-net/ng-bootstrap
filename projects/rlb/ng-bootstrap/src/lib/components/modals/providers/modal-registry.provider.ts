
import { RlbBootstrapOptions } from "../../../rlb-bootstrap";
import { ModalRegistry } from "../options/modal-registry";
import { ModalRegistryOptions } from "../options/modal-registry.options";

export function modalRegistryProvider(options?: ModalRegistry) {
  return (rootOptions?: RlbBootstrapOptions): ModalRegistryOptions => {
    const registryOptions = new ModalRegistryOptions();
    if (!options && rootOptions && rootOptions.modals) {
      registryOptions.modals = [...rootOptions.modals];
      //registryOptions.modals = [RlbFormComponent, ...rootOptions.modals];
      return registryOptions;
    }
    if (options && options.modals) {
      registryOptions.modals = options.modals;
      return registryOptions
    }
    registryOptions.modals = [];
    return (registryOptions);
  }
}