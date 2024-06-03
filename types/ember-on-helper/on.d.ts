declare module 'ember-on-helper/helpers/on' {
    import Helper from '@ember/component/helper';

    import { OnArgs } from '@gavant/glint-template-types/types/ember-on-helper/-private/shared';

    interface OnHelperSignature<K extends keyof GlobalEventHandlersEventMap> {
        Args: {
            Named: OnArgs;
            Positional: [
                target: EventTarget | null | undefined,
                eventName: K,
                handler: (event: GlobalEventHandlersEventMap[K]) => void
            ];
        };
        Return: null;
    }

    export default class OnHelper<K extends keyof GlobalEventHandlersEventMap> extends Helper<OnHelperSignature<K>> {}
}
