import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Select';
import { FC, ReactNode } from 'react';

export interface SelectPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines whether <code>Select</code> is in disabled state. <br><br> <b>Note:</b> A disabled <code>Select</code> is noninteractive.
   */
  disabled?: boolean;
  /**
   * Determines the name with which the <code>Select</code> will be submitted in an HTML form. The value of the <code>Select</code> will be the value of the currently selected <code>Option</code>.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>Select</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines whether the <code>Select</code> is required.
   */
  required?: boolean;
  /**
   * Defines the value state of the <code>Select</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the <code>Select</code> options.<br/><br/>
   *
   * <b>Note:</b> Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.<br/><br/>
   *
   * <b>Note:</b> Use the <code>Option</code> component to define the desired options.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the <code>Select</code>. <br><br><br/><br/>
   *
   * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed. <br> <b>Note:</b> The <code>valueStateMessage</code> would be displayed, when the <code>Select</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the selected option changes.
   */
  onChange?: (event: CustomEvent<{ selectedOption: ReactNode }>) => void;
}

/**
 * The <code>Select</code> component is used to create a drop-down list. The items inside the <code>Select</code> define
 the available options by using the <code>Option</code> component.

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Select" target="_blank">UI5 Web Components Playground</a>
 */
const Select: FC<SelectPropTypes> = withWebComponent<SelectPropTypes>(
  'ui5-select',
  ['name', 'valueState'],
  ['disabled', 'required'],
  ['valueStateMessage'],
  ['change']
);

Select.displayName = 'Select';

Select.defaultProps = {
  disabled: false,
  required: false,
  valueState: ValueState.None
};

export { Select };
