/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdCustomizationRuleSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCustomizationRuleSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      caption: 'caption',
      customization_spec: 'customization_spec',
      description: 'description',
      link: 'link',
      message: 'message',
      name: 'name',
      priority: 'priority',
      template_url_spec: 'template_url_spec',
      id: 'id'
    });
  }
}
