import type { DivMode } from "../../../../Enums/Modes/DivMode";
import type { DivType } from "../../../../Enums/Types/DivType";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";

/**
 * [[include:Options/Interactivity/Div.md]]
 *
 */
export interface IDivEvent {
    /**
     * @deprecated This property is deprecated, use the new selectors property instead
     */
    el: SingleOrMultiple<string>;

    /**
     * @deprecated This property is deprecated, use the new selectors property instead
     */
    elementId: SingleOrMultiple<string>;

    enable: boolean;

    /**
     * @deprecated This property is deprecated, use the new selectors property instead
     */
    ids: SingleOrMultiple<string>;

    mode: SingleOrMultiple<DivMode | keyof typeof DivMode | string>;

    selectors: SingleOrMultiple<string>;

    type: DivType | keyof typeof DivType;
}
